// NodeJS Tutorial - package.json - https://www.youtube.com/watch?v=bSuFQY0fB8Y&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=50
// NodeJS Tutorial - Installing Packages - https://www.youtube.com/watch?v=exWXjqCSSRE&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=51&pp=iAQB
// NodeJS Tutorial - Using Packages - https://www.youtube.com/watch?v=5oDSVJ7ZCXc&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=52&pp=iAQB
// NodeJS Tutorial - Dependencies - https://www.youtube.com/watch?v=xpHziG_PNqY&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=53&pp=iAQB
// NodeJS Tutorial - Global Packages - https://www.youtube.com/watch?v=Ns0dG5QKI80&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=55&pp=iAQB
// NodeJS Tutorial - npm Scripts - https://www.youtube.com/watch?v=XHtYRaIzNUM&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=56&pp=iAQB
// NodeJS Tutorial - Publishing an npm Package - https://www.youtube.com/watch?v=IND8P7M3-Ng&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=57&pp=iAQB

/*
package.json:
    - package.json is npm's configuration file.
    - It is a json file that typically lives in the root directory of your package and holds various metadata
      relevant to the package.
    - package.json is the central place to configure and describe how to interact with and run your package.
    - It is primarily used by the npm CLI.
    - create package.json using command npm init or npm init --yes through terminal.
*/

/*
npm Scripts:
  - An npm script is a convenient way to bundle common commands for use in a project.
  - They are typically entered in the command line in order to do something with the application.
  - npm scripts are stored in a project's package.json file, give access to everyone who has access everyone
    to the codebase
  - They also ensure that everyone is using the same command with the same options.
  - Common use cases for npm scripts include building your project, starting a development server, compiling
    CSS, linting, minifying etc.,
  - npm scripts are executed using the command npm run <SCRIPT_NAME>
*/

import { upperCase } from 'upper-case'; // Importing installed package(Third-Party Package)
function greet(name) {
  console.log(upperCase(`Hello ${name}, welcome to Codevolution!`));
}
greet("Koodalarasan");
