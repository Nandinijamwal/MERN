// const ul = document.createElement('ul');
// ul.className="ulist";

// const li1 = document.createElement('li');
// li1.style.color="brown";
// li1.innerText="ITEM1";

// const li2 = document.createElement('li');
// li2.innerText="ITEM2";

// parent= document.getElementById("root");

// ul.appendChild(li1);
// ul.appendChild(li2);

// parent.appendChild(ul);

// ------------------------------------------- USING REACT ------------------------------------------- 

// const li1= React.createElement(
//     "li",
//     {
//         style:{
//             color:"brown",
//         },
//     },
//     "IteM1"
// );
// console.log(li1);

// const li2=React.createElement("li",{},"IteM2");
// const ul=React.createElement("ul",{className: "ulist",}, [li1,li2]);
// const parent= document.getElementById("root");
// const root= ReactDOM.createRoot(parent);
// root.render(ul);

// ------------------------------------------- USING JSX ------------------------------------------- 

// const mystyle={
//     color: "brown",
// };
// const li1=<li style={mystyle}> ItEm-1 </li>;
// const li2=<li>ItEm-2</li>;
// const ul=(<ul className="ulist">{li1}{li2}</ul>);
// const parent= document.getElementById("root");
// const root= ReactDOM.createRoot(parent);
// root.render(ul);

// ------------------------------------------- USING JSX NESTED ------------------------------------------- 

// const mystyle={
//     color: "brown",
// };
// const ul=(<ul className="ulist"><li style={mystyle}> ItEm-1 </li><li>ItEm-2</li></ul>);
// const parent= document.getElementById("root");
// const root= ReactDOM.createRoot(parent);
// root.render(ul);

// ------------------------------------------- COMPACTED STYLES ------------------------------------------- 

const ul=(
<ul className="ulist">
    <li style={{color: "brown"}}> ItEm-1 </li>
    <li>ItEm-2</li>
    </ul>
);
const parent= document.getElementById("root");
const root= ReactDOM.createRoot(parent);
root.render(ul);