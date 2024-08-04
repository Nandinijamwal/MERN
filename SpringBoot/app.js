import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Footer from "./SOURCE/footer";

// const App=()=>{
//     const approuter= createBrowserRouter([
//         {
//             path:"/",
//             element: <Homepge  text={text} handleChange={handleChange}/>
//         },
//         {
//             path:"/search",
//             element:<Searchpge text={text} handleChange={handleChange}/>
//         }
//     ])
//     return <RouterProvider router = {approuter}/>;
// };

// const parent=document.getElementById("parent");
// const root= ReactDOM.createRoot(parent);
// root.render(<App/>);



function App() {
  return (
    <Footer/>
  );
}

export default App;
const parent=document.getElementById("parent");
const root= ReactDOM.createRoot(parent);
root.render(<App/>);
