const heading = React.createElement("h1", { id: "heading" }, "Displaying different colours");
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