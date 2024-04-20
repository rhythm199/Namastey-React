// ## Namaste React Course by Akshay Saini
// # Chapter 03 - Laying the Foundation

import React from "react";
import ReactDOM from "react-dom/client";
import search from '../Assets/search.png'

// Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
// const header = React.createElement(
//     'div', { className: 'title'}, [
//         React.createElement(
//             'h1', { id: 'h1'}, 'This is h1 heading'
//         ),
//         React.createElement(
//             'h2', { id: 'h2'}, 'This is h2 heading'
//         ),
//         React.createElement(
//             'h3', { id: 'h3'}, 'This is h3 heading'
//         ),
//     ]
// );

// Q: Create the same element using JSX
const header = (
    <div className="title">
        <h1 id="h1">This is h1 tag</h1>
        <h2 id="h2">This is h2 tag</h2>
        <h3 id="h3">This is h3 tag</h3>
    </div>
);

// Q: Create a functional component of the same with JSX
// const Header = () => {
//     return (
//         <div className="title">
//             <h1 id="h1">This is h1 tag</h1>
//             <h2 id="h2">This is h2 tag</h2>
//             <h3 id="h3">This is h3 tag</h3>
//         </div>
//     )
// };

// Q: Pass attribute into the tag in JSX
const TitleComponent = () => {
    return (
        <div className="title" style={{ color: "blue" }}>
            <h1>Namaste React Live</h1>
            <h2>Chapter 03 : Laying the foundation</h2>
            <h3>Nested header element with h1,h2,h3 using JSX</h3>
        </div>
    )
};


// Q: Create a Header Component from scratch using Functional Component with JSX
// - Add a Logo on Left
// - Add a search bar in middle
// - Add User icon on right
// - Add CSS to make it look nice


const HeaderComponent = () => {
    return (
        <div className="heading-wrapper">
            <div className="search-logo-wrapper">
                <img src={search} alt="search-logo" />
            </div>
            <div className="search">
                <input type="search" id="search" placeholder="search for a word" />
            </div>
            <div className="avatar">
                <div className="user-icon" key="user-icon"> </div>
            </div>
        </div>
    )
};


/* Component Composition */

const NestedComponent = function () {
    return (
        <div>
            <HeaderComponent />
            {header}
            {TitleComponent}{/* It does not work and warning is thrown in console since TitleComponent is a component and not a react element*/}
            {<TitleComponent />} {/* It works since TitleComponent is enclosed within <> */}
            {<TitleComponent> </TitleComponent>} {/* It works since TitleComponent is enclosed within <> */}

        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NestedComponent />); // we can also write like this for functional component root.render(Header())
