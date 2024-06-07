// NodeJS Tutorial - Modules - https://www.youtube.com/watch?v=uatPQZVnng4&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=8&pp=iAQB
// NodeJS Tutorial - Local Modules - https://www.youtube.com/watch?v=4gWoKrwGui4&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=9
// NodeJS Tutorial - Modules Exports -  https://www.youtube.com/watch?v=hvOrwICaEJY&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=10
/*

Modules:
A module is an encapsulated and  reusable chunk of code that has its own context
In Node.js, each file is treated as a separate module.

Types of Modules;
1.Local Modules - Modules that we create in our application.
2.Built-in-Modules - Modules that Node.js ships with out of the box.
3.Third Party Modules - Modules written by other developers that we can use in our application.

1)CommonJS is a standard that states how a module should be structured and shared. Node.js adopted CommonJS 
when it started out and is what you will see in code bases.
2)In node.js, each file is a module that is isolated by default.
3)To load a module into another file, we use the "require" function(Please Refer index.js).
4)When index.js is executed, the code in the module is also executed.
5)If the file we are requiring is a javascript file, we can skip specifying the extension and node.js will
infer it on our behalf.
*/

const add = (a, b) => {
    return (a + b);
};

module.exports = add