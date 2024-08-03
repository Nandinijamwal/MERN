import React from "react";
import ReactDOM from "react-dom/client";

//REACT ELEMENT
//const heading= <h1> "hello" </h1>; //JSX
const heading = React.createElement("h1", {}, "Hello From React!");
const parent = document.getElementById("parent");
const root =ReactDOM.createRoot(parent);

//PARSING AN ELEMENT TO ROOT
root.render(heading);
