import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Homepge from "./SOURCE/pages/homepage";
import Searchpge from "./SOURCE/pages/searchpage";
import { useState } from "react";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const App=()=>{
    const [text, SetText] = useState("");
    const handleChange=(e)=>{
        SetText(e.target.value);
    };
    const approuter= createBrowserRouter([
        {
            path:"/",
            element: <Homepge  text={text} handleChange={handleChange}/>
        },
        {
            path:"/search",
            element:<Searchpge text={text} handleChange={handleChange}/>
        }
    ])
    return <RouterProvider router = {approuter}/>;
};

const parent=document.getElementById("parent");
const root= ReactDOM.createRoot(parent);
root.render(<App/>);