// NodeJS Tutorial - ES Modules - https://www.youtube.com/watch?v=g98XlFOiXz0&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=16&pp=iAQB
/*
Common Modules:
- Each file is treated as a module.
- Variable, functions, classes, etc. are not accessible to other files by default.
- Explicitly tell the module system which parts of your code should be exported via module.exports or exports.
- To import code into a file, use the require() function

ES Modules:
- ES Modules is the ECMAScript standard for modules.
- It was introduced with ES2015.
- Node.js 14 and above support ES Modules.
- Instead of module.exports, we use the export keyword.
- The export can be default or named.
- We import the exported variables or functions using the import keyword.
- If it is a default export, we can assign any name while importing.
- If it is a named export, the import name must be the same. 
- At the time Node.js was created, there was no built-in module system in JavaScript.
- Node.js defaulted to CommonJS as its module system.
- As of ES2015, JavaScript does have a standardized module system as part of the language itself.
- That module system is called EcmaScript Modules or ES Modules or ESM for short.
*/

import * as math from './math-esm.mjs';  // importing modules using "import" keyword because of it's ES Modules(.mjs)
const { add, subtract } = math
console.log(add(5, 5));
console.log(subtract(5, 5));
