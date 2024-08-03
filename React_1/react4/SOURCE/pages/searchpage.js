import NavBar from "../components/navbar";
import { useEffect, useState } from "react";

const Searchpge = (props)=>{
    
    //const [val, SetVal]= useState("OKAY"); 
    const [data, SetData] = useState({recipes:[]});
    // const handleChange=(e)=>{
    //     SetVal(e.target.value);
    // }
   
      
    const getData = async()=>{
        const res = await fetch(`https://dummyjson.com/recipes/search?q=${props.text}`);
        let temp = await res.json();
        SetData(temp);
    };

   // getData();
   useEffect (()=>{
    getData();
   },
   [props.text]
);
    console.log("ok");
    return (
        <div>
            <NavBar text={props.text} handleChange={props.handleChange}/>
            <h1>SEARCHING</h1>
            
            <div style={{
                    width: "200px",
                    backgroundColor: "pink",
                    margin: "24px auto",
                    padding: "24px", 
                }}>
                    {data.recipes.map((ele)=>{
                        return(
                         <div 
                          style={{
                            width:"100",
                            backgroundColor: "lightgrey",
                            margin: "10px auto",
                            padding: "16px" }}
                            key={ele.id}>
                          <h3>{ele.name}</h3>
                          <img src={ele.image} height="100"/>
                          <p>Serve: {ele.servings}</p>
                         </div>
                );
            })}
            </div>
        </div>
    );
};

export default Searchpge