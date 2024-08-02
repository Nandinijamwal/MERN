import React from "react";
import ReactDOM from "react-dom";
const heading = React.createElement("h1", {}, "Hello From React!");
const parent = document.getElementById("parent");
const root =ReactDOM.createRoot(parent);
root.render(heading);
