# **Documentation of learning had in this Episode.**

## Q. Is JSX mandatory for React?
A: `JSX` is an Extension Syntax that allows writing HTML and Javascript together easily in React and is used to create React elements. These elements are then rendered to the React DOM. Each JSX element is just to make use of React easy and for calling React.createElement(component, props, …children) with less work. So, anything that is done with JSX can also be done with just plain JavaScript. So `JSX` is not mandatory but is used for writing better and clean code instead of writing code using `React.CreateElement`.
#### Example of `JSX`
```
const sample = <h2>Greetings</h2>;
```

## Q. Is ES6 mandatory for React?
A: ES6 is not mandatory for using React but it's highly recommended to use ES6. Any javascript expressions (pure js) can be used in JSX to render React elements.

Currently, lot of React projects use ES6 features in React ecosystem, so it's better to have knowledge on ES6 features like modules, destructuring, spread operator, template literals, classes, map, filter and reduce array methods.

## Q. {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.
A: The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable or React element. 
The `{}` can embed a javascript expression or a variable or React element inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value. If component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
#### Example
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```

## Q. How can I write comments in JSX?
A: JSX provides us with the ability to write comments. In jsx we enclose js code inside {} and hence comments are also enclosed within { }.
```
{/* This is a single line comment */}

{/* This is
a multiline 
comment */}
```
Note: Only /* */ is used inside the curly braces. Any other character like the popular double forward slash //, will throw an error.

## Q. What is <React.Fragment></React.Fragment> and <></>?
A: Each jsx element (component) can have only one parent. This is because jsx element is converted to React.createElement(parent, props, ...children) before rendering in the DOM.

But the common pattern in React is for a component to return multiple elements. For grouping, we can enclose them within <div> </div>. But there can be situations were <div> </div> should not be used. In such cases, Fragments can be used to group a list of children without adding extra nodes to the DOM.

`<React.Fragment></React.Fragment>` serve as a cleaner alternative to using unnecessary divs in our code. These fragments do not produce any extra elements in the DOM, which means that a fragment’s child components will render without any wrapping DOM node.

React fragments enable us to group multiple sibling components without introducing any unnecessary markup in the rendered HTML. `<></>` is the shorthand tag for `React.Fragment`. The only difference between them is that the shorthand version does not support the key attribute.

## Q. What is Reconciliation in React?
A: `Reconciliation` is the process through which React updates the Browser DOM and makes React work faster. React use a diffing algorithm so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components. React stores a copy of Browser DOM which is called Virtual DOM. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by Diffing Algorithm. React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.

## Q. What is React Fiber?
A: `React Fiber` is a concept of ReactJS that is used to render a system faster, smoother and smarter. The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React. Because Fiber is asynchronous, React can:

Pause, resume, and restart rendering work on components as new updates come in.
Reuse previously completed work and even abort it if not needed.
Split work into chunks and prioritize tasks based on importance.

In React, a reconciler is an algorithm that helps it compare two DOM trees and get the difference between the two. This helps React determine what it needs to change on the screen.

## Q. Why do we need keys in React? When do we need keys in React?
A: A `key` is a special string attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, added, updated, or deleted. They contribute to the array's items having a consistent identity.

Keys are used to give an identity to the elements in the lists. It is recommended to use a string as a key that uniquely identifies the items in the list.
Keys are significant in React because they aid in determining whether items in a list have been changed, updated, or removed. This process helps React to optimize the rendering by recycling existing DOM elements.

Keys are required when a parent tag has two or more similar tags in it, so that react can update the component which is needed to be updated without destroying the whole parent component. It improves the efficiency of the application.

## Q. Can we use index as keys in React?
A: One common mistake when using keys in lists is using the item `index` as a key. While this can work in some cases, it's not recommended if the order of items can change. This can negatively impact performance and may cause issues with component state or if we modify the incoming data react may render them in unusual order.

Another common mistake is not providing a key at all. If a key is not provided, React will default to using indexes as keys. This can lead to the same issues as using indexes as keys.

## Q. What is props in React? Ways to use props?
A: Props is a special keyword in React that stands for properties and is used for passing data from one component to another. Data with props are passed in a unidirectional flow from parent to child. Props data is read-only, which means that data coming from the parent shouldn’t be changed by child components.

`Props (properties)` passed in Component are similar to the arguments passed in a js function call and received by that function as parameters.

Every parent component can pass some information to its child components by giving them props. Props are similar to HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

Types of Props : 

- Familiar Props - HTML attributes like className, src, width, height passed in HTML <img> tag 

- Passing Props to Component - props are the only argument to your component. React component functions accept a single argument, a props object.

| Ways to pass props to component | Ways to receive the props in another component | 
| ------------------------------- | :--------------------------------:             | 
| 1. Add props to the JSX, just like you would with HTML attributes  | All props are sent into a single props object  | 
|  ```<Profile name = { "Anii"} age={28}   />``` |  ``` const Profile = (props) => { let name = props.name; let age = props.age; } ``` |  
| 2.   Similar to the way mentioned in 1.          | Props object can be destructed using {} to receive only the required props| 
| ```<Profile name = { "Anii"} age={28}   />```  | ``` const Profile = ({name, age}) => { } ```    | 
| 3. Using spread syntax                           |  And props objects destructed using {}        |
| ```<Profile {...props}   />```   | ``` const Profile = ({name, age}) => { } ```  |

However, props are immutable which means unchangeable. When a component needs to change its props (for example, in response to a user interaction or new data), it will have to “ask” its parent component to pass it different props—a new object! Its old props will then be cast aside, and eventually the JavaScript engine will reclaim the memory taken by them.

## Q. What is Config Driven UI?
A: `Config Driven UI` are based on the configurations of the data application receives. It is rather a good practice to use config driven UIs to make application for dynamic and customizable UIs without hard coding them. It is a very common & basic approach to interact with the User. It provides a generic interface to develop things which help your project scale well. It saves a lot of development time and effort. A typical login form, common in most of the Apps. Most of these forms also get frequent updates as the requirements increase in terms of Form Validations, dropdown options,.. or design changes. 
Config-driven UI is one of the UI design pattern in which the UI is rendered based on the configuration parameter sent by the server (backend). This is one of the popular pattern used in the industry now.

Configuration-driven UI, also known as config-driven UI or configuration-based UI - When you build real a world application so you want should your website work in many country or many place we control our frontend it is known as using Config-Driven UI . API or Backend Driven which is data Coming from API.
or
In a configuration-driven UI, the layout, styles, and other properties of UI elements are defined in a configuration file or database, which can be easily modified without requiring changes to the codebase. This approach makes it easier to customize the UI for different use cases or user groups, without the need for extensive coding.
The configuration file or database may also define the data sources and the data to be displayed in the UI, as well as the interactions and behavior of the UI components. This allows for greater flexibility and adaptability of the UI to different use cases, as the configuration data can be easily modified or replaced without affecting the underlying application logic

## Q. What is Virtual DOM?
A: `Virtual DOM` is an abstraction of the Real DOM, created and maintained by JavaScript libraries such as React. The Virtual DOM is a lightweight copy of the Real DOM, which allows for faster updates and improved performance. When a user interacts with a web page, React updates the Virtual DOM, compares it with the previous version, and only updates the Real DOM with the necessary changes. This process is known as Reconciliation.
https://blog.logrocket.com/virtual-dom-react/#exploring-virtual-dom-react

## Q. Difference between Virtual DOM and Real DOM?
A: DOM:
Normally, whenever a user requests a webpage, the browser receives an HTML document for that page from the server. The browser then constructs a logical, tree-like structure from the HTML to show the user the requested page in the client.

This tree-like structure is called the `Document Object Model`, also known as the DOM. It is a structural representation of the web document as nodes and objects, in this case, an HTML document.

The DOM serves as an interface for the web document so that JavaScript and other scripting languages can access, manipulate, and programmatically interact with the document’s content. For example, developers can use DOM APIs to add or remove elements, modify their appearance, and perform user actions on web elements.

- `Virtual DOM`
    - The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a copy of the DOM, that can be updated without affecting the actual DOM. It has all the same properties as the real DOM object, but doesn’t have the ability to write to the screen like the real DOM.
    - Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.
    - Reconciliation is a process to compare and keep in sync the two files (Real and Virtual DOM). Diffing algorithm is a technique of reconciliation which is used by React.
- `Real DOM`
    - The DOM represents the web page often called a document with a logical tree and each  branch of the tree ends in a node and each node contains object programmers can modify the content of the document using a scripting language like javascript and the changes and updates to the dom are fast because of its tree-like structure but after changes, the updated element and its children have to be re-rendered to update the application UI so the  re-rendering of the UI which make the dom slow all the UI components you need to be rendered for every dom update so real dom would render the entire list and not only those item that receives the update .

|   `Real DOM`    |   `Virtual DOM` |
|-------------|-----------------|
|Real DOM represent actual structure of the webpage.| Virtual DOM represent the virtual/memory representation of the Webpage.|
| DOM manipulation is very expensive  | DOM manipulation is very easy  | 
| There is too much memory wastage  | No memory wastage  |
| It updates Slow | It updates fast |
| It can directly update HTML | It can’t update HTML directly  |
|  Creates a new DOM if the element updates. | Update the JSX if the element update |
| It allows us to directly target any specific node (HTML element) | It can produce about 200,000 Virtual DOM Nodes / Second. |
| It represents the UI of your application | It is only a virtual representation of the DOM |

Finally, the Virtual DOM is highly flexible and can be used with any programming language that can run JavaScript. In contrast, the Real DOM is tightly coupled with the browser and can only be manipulated using JavaScript.