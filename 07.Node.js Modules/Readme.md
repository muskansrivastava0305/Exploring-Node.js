# Understanding the Node.js Modules System 

**Seld-contained code unit:**

- Each file in Node.js is treated as a separate module.
-Variable, function, or objects defined in on file are not accessible in another file by default unless you explicitly export them.

**Encapsulation:** 

- Node.js use the CommonJS module system (module.export and require) to ensure the code on one file does not pollute or interfere with the global scope.
- This makes your code modular, maintainable , and easier to debug.

## What Exactly is a Module in Node.js?

- A module is Node.js represents a file containing code that is self-contained reusable, and encapsulated .
- Node.js uses the COmmonJS module system.
- This module system came before ES Module was introduced in JavaScript; that's why its syntax ids different.
- modules in Node.js are created by defining separate file for different functionalities.
- You must export anything you want to make accessible to other module
