// NodeJS Tutorial - CLI Options - https://www.youtube.com/watch?v=oIg08Z0bqsY&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=59
// NodeJS Tutorial - Interactive CLI Tools - https://www.youtube.com/watch?v=sJdqdGxRbXY&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=60&pp=iAQB

// CLI Options
const printFiveMoves = async (pokemonName) => {
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const pokemon = await response.json();
    const moves = pokemon.moves.map(({ move }) => move.name);
    console.log(moves.slice(0, 5));
};

printFiveMoves("charmander");