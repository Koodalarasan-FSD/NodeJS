// NodeJS Tutorial - Module Scope - https://www.youtube.com/watch?v=RR5zEGU7TqY&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=11&pp=iAQB
// NodeJS Tutorial - Module Wrapper - https://www.youtube.com/watch?v=ce90lLhDI_Y&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=12&pp=iAQB
/*
1)Module Scope:
Immediately Invoked Function Expression(IIFE) in Node.js
- Before a module's code is executed, Node.js will wrap it with a function wrapper that provides module scope.
- This saves us from having to worry about conflicting variables or functions.
- There is proper encapsulation and reusability is unaffected.

- Each loaded module is Node.js is wrapped with an IIFE that provides private scoping of code.
- IIFE allows you to repeat variable or function names without any conflicts.
2)Module Wrapper:
- Every module in node.js gets wrapped in an IIFE before being loaded.
- IIFE helps keep top-level variables scoped to the module rather than the global object.
- The IIFE that wraps every module contains 5 parameters which are pretty important for the functioning of
  a module.
  For Ex:(function (exports,require,module,__filename,__dirname) 
        {
            const superHero = "Superman";
            console.log(superHero);
        })
    Where exports,require,module,__filename,__dirname are 5 parameters which are pretty important 
    for the functioning of a module.

*/

(function (message) {
    const superHero = "Superman";
    console.log(message, superHero);
})("Hello");

(function (message) {
    const superHero = "Batman";
    console.log(message, superHero);
})("Hey");

