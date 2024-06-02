# **Documentation of learning had in this Episode.**

## Q: Can i use default export along with named export?
A: However, it's important to note that using both named and default exports in the same file can be considered an anti-pattern. It can lead to confusion and make the code harder to understand. It's generally recommended to use either named exports or default exports in a single file, but not both.

But you can use one or both of them in the same file. A file can only have one default export, but it can have numerous named exports!

|   Syntax  |   Export statement    |   Import statement    |
|-----------|-----------------------|-----------------------|
|Default|   ```export default function Button() {}``` |	```import Button from './Button.js';```   |
|Named| ```export function Button() {}```|	```import { Button } from './Button.js';```   |

## Q: What is export keyword?
A: In JavaScript, the export statement is used in modules to expose variables, functions, or classes so that they can be accessed and used in other parts of the application or in separate files.
By using the export, you make certain parts of your code accessible outside the module. This enables you to reuse and promote a modular and organized code structure.
In JavaScript, there are two main ways to export values: default exports, used for a single value per file, and named exports, allowing multiple exports per file.

## Q: What is the difference between `Named export`, `Default export`, and `* as export`?
A: ES6 provides us to import & export a module and use it in other files. ES6 provides two ways to export a module from a file: `named export` and `default export`.

`Named exports` in JavaScript allow you to export multiple functions, variables, or classes from a single file as separate entities. Instead of exporting everything as a single unit, you can specifically name and export each part individually. When importing these named exports into other files, you have to use the exact names that were used during the export, ensuring that you can access and use the specific functionalities you need from the source file.

**Syntax**:

**Exporting**:

```javascript
export const myVariable = 42;
export function myFunction() {
  console.log('Hello');
}
export class MyClass {
  constructor() {
    console.log('MyClass instance created');
  }
}
```

**Importing:**

```javascript
import { myVariable, myFunction, MyClass } from './myModule.js';
console.log(myVariable); // 42
myFunction(); // Hello
const myClassInstance = new MyClass(); // MyClass instance created
```

`Default export` is a way to share a single value, function, or class as the main thing from a file with other parts of your code. When you have a file that needs to be used in other parts of your application, you can mark one item in that file as the default export using the export default syntax. This means that when you import from that file in another part of your code, you don't need to use curly braces `{} `around the import statement. Instead, you can give it any name you want during the import, making it more convenient to use. Each module can have only one default export.

**Syntax:**

**Exporting:**

```javascript
const myDefaultExport = 42;
export default myDefaultExport;

// Alternatively, you can directly export a function, class, or expression
export default function() {
  console.log('Hello');
}
```

**Importing:**

```javascript
import myDefault from './myModule.js';

console.log(myDefault); // 42 or output from the default function
```

* Note that the import name can be different from the export name
You can give any name to the imported value, as it represents the default export of the module.

`* as Export` * as export (also known as namespace import) allows you to import all named exports from a module as properties of an object. It is used to import the whole module as a component and access the components inside the module.

**Syntax:**

**Exporting:**
The exporting remains the same as with named exports.

**Importing:**

```javascript
import * as myModule from './myModule.js'; // giving a named import a different name by using "as":
console.log(myModule.myVariable); // 42
myModule.myFunction(); // Hello
const myClassInstance = new myModule.MyClass(); // MyClass instance created
```
This method imports all named exports and organizes them under a single namespace object (myModule in this case).
It is useful when you want to import everything from a module without listing each named export.

We can use `Named export and Default export` together. So you should export like:

```javascript
export const MyComponent2 = () => {}
const MyComponent = () => {}
export default MyComponent;
```
and import like:

`import MyComponent, {MyComponent2} from "./MyComponent";`

## Q: What is the importance of `config.js` file?
A: config.js file can be used to store the hardcoded values in one file, so that when the value needs to be modified, it can be easy to do the modification in one file.

Example : All API Base URLs, CDN links, config data from backend, default values needed in the app are could be placed in config.js file.

## Q: What are `React Hooks`?
A: `React Hooks` are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects. They were first introduced in React 16.8, and allow developers to hook into the state and other React features without having to write a class. 
React provides a bunch of standard in-built hooks:

* useState: To manage states. Returns a stateful value and an updater function to update it.
* useEffect: To manage side-effects like API calls, subscriptions, timers, mutations, and more.
* useContext: To return the current value for a context.
* useReducer: A useState alternative to help with complex state management.
* useCallback: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
* useMemo: It returns a memoized value that helps in performance optimizations.
* useRef: It returns a ref object with a .current property. The ref object is mutable. It is mainly used to access a child component imperatively.
* useLayoutEffect: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
* useDebugValue: Helps to display a label in React DevTools for custom hooks.

## Q: Why do we need `useState Hook`?
A: `useState hook` is used to maintain the state in our React application. It keeps track of the state changes so basically useState has the ability to encapsulate local state in a functional component.
The  useState hook is a special function that takes the `initial state` as an `argument` and `returns an array` of two entries.  UseState encapsulate only singular value from the state, for multiple state need to have useState calls.
#### Syntax for useState hook
```javascript
const [state, setState] = useState(initialState);
```
#### Importing: To use useState you need to import useState from react as shown below:
```javascript
import React, { useState } from "react";
```
we can use Hooks in Functional Components
```javascript
const Example = (props) => {
  // You can use Hooks here!
  return <div />;
}
```

We can also destructure useState variable like this:
```
const arr = useState(initialState);

const state = arr[0];
const setState = arr[1];
```

During initial render, the returned state (state) is the same as the value passed as the first argument (initialState).

The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.

`setState(newState)`

During subsequent re-renders, the first value returned by useState will always be the most recent state after applying updates.

If we want to use the prev state value instead of the first value , we can pass a function to setState, it receives previous state and returns updated state.
