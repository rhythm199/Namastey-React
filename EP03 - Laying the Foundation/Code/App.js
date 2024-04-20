// ## Namaste React Course by Akshay Saini
// # Chapter 03 - Laying the Foundation


import React from "react";
import ReactDOM from "react-dom/client"; //imported from node-modules folder

// React.createElement => ReactElement(JS object) => HTMLElement(renders react element into DOM it becomes html)
const reactEle = React.createElement("div", { id: "parent" }, "Hi Rhythm");

//create h1 tag using JSX
// JSX (transpiled before it reaches the JS Engine)  
// JSX => (code transpiled by babel to) => React.createElement() => ReactElement(JS Object) => HTMLElement(render) on browser
const JSXHeading = (
    <span id="jsxh1" key="h1">
        This is JSX heading
    </span>
);

// React Component 
// Functional component - new way of writing component 
// Class component - old way of writing component

// React Functional component
const Title = () => {
    return <h1 id="title" key="title">
        {JSXHeading}
    </h1>
}
const HeadingComponent = () => {
    return <div id="container" key="head">
        <Title /> {" "} 
        {/** component composition --> Title component passed inside HeaderComponent component */}
        {/* Can also be written as { Title() } */}
        {/* we can also use <Title></Title> */}
        {console.log(10)}
        <h1>Hi, This is React functional Component</h1>
    </div>
}

console.log(reactEle); // logs object in console.
console.log(JSXHeading); // logs object to consol.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);