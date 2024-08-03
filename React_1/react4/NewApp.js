import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Homepge from "./SOURCE/pages/homepage";
import Searchpge from "./SOURCE/pages/searchpage";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const App=()=>{
    const approuter= createBrowserRouter([
        {
            path:"/",
            element: <Homepge/>
        },
        {
            path:"/search",
            element:<Searchpge/>
        }
    ])
    return <RouterProvider router = {approuter}/>;
};

const parent=document.getElementById("parent");
const root= ReactDOM.createRoot(parent);
root.render(<App/>);