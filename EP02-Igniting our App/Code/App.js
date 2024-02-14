import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child1" },
            [
                React.createElement("h1", { id: "heading1" }, "Hello World C1H1 from Nested React element!"),
                React.createElement("h2", { id: "heading1" }, "Hello World C1H2 from Nested React element!")
            ]
        ),
        React.createElement("div", { id: "child2" },
            [
                React.createElement("h1", { id: "heading1" }, "Hello World C2H1 from Nested React element!"),
                React.createElement("h2", { id: "heading1" }, "Hello World C2H2 from Nested React element!")
            ]
        ),
    ]
);


const heading = React.createElement("h1", { id: "heading" }, "Displaying different colors");
const list = React.createElement("ul", { id: "ulList" },
    [
        React.createElement("li", { id: "ulRed" }, "Red"),
        React.createElement("li", { id: "ulBlue" }, "Blue"),
        React.createElement("li", { id: "ulGreen" }, "Green"),
        React.createElement("li", { id: "ulYellow" }, "Yellow"),
    ]
);

const container = React.createElement("div", { id: "divContainer" },
    [
        heading,
        list
    ]
);

console.log(container);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container); 