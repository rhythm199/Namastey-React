
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; //or Header.js(.js extension) it doesnot matter react will treat it as js file.
import Body from "./components/Body"; // we import default export like this without {}
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);