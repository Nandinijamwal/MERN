import NavBar from "../components/navbar";
import { useState } from "react";

const Searchpge = ()=>{
    const [val, SetVal]= useState(""); 
    const handleChange=(e)=>{
        SetVal(e.target.value);
    }
      
    return(
        <div>
            <NavBar/>
            <h1>SEARCHING</h1>
            <div style={{
                    width: "200px",
                    backgroundColor: "pink",
                    margin: "24px auto",
                    padding: "24px", 
                }}>
                    <input onChange={handleChange}/>
            </div>
            {val}
        </div>
    )
}

export default Searchpge