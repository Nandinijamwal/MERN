import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import NavBar from "./SOURCE/components/navbar";
import ImageProduct from "./SOURCE/components/prod";

const dummy =[
    {
    title: 'Container-1',
    products:[
        {
            title: 'DUCKY1',
            imgsrc:'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY4Ni0yNzUtdi5qcGc.jpg',
        },
        {
            title: 'DUCKY2',
            imgsrc:'https://static.vecteezy.com/system/resources/thumbnails/017/173/053/small/cute-squirrel-head-pet-and-rodent-animal-character-in-animated-cartoon-illustration-vector.jpg',
        },
        {
            title: 'DUCKY3',
            imgsrc:'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlNV8zZF9jaGFyYWN0ZXJfaWxsdXN0cmF0aW9uX2NhcnRvb25fb2ZfYmFieV9mb3hfbl80YmQ5YTViMC0xMzJlLTRlMjMtODJjMi1lYzQxNDhhNTc1ODAucG5n.png',
        },
        {
            title: 'DUCKY4',
            imgsrc:'https://e7.pngegg.com/pngimages/913/948/png-clipart-domestic-pig-animated-cartoon-pig-mammal-animals.png',
        }
    ]
},
{
    title: 'Container-2',
    products:[
        {
            title: 'DUCKY5',
            imgsrc:'https://thumbs.dreamstime.com/b/cartoon-dragon-d-illustration-style-playful-characters-powerful-symbolism-animated-cute-inventive-character-280698167.jpg',
        },
        {
            title: 'DUCKY6',
            imgsrc:'https://t3.ftcdn.net/jpg/05/80/74/04/360_F_580740494_9R9vqDM4zshhNeEMIFgCFYh24bVuqkNa.jpg',
        },
        {
            title: 'DUCKY7',
            imgsrc:'https://thumbs.dreamstime.com/b/cartoon-dragon-posing-fire-illustration-58811910.jpg',
        },
        {
            title: 'DUCKY8',
            imgsrc:'https://img.freepik.com/free-vector/cute-baby-dragon-with-fire-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-8670.jpg',
        }
    ]
},
{
    title: 'Container-3',
    products:[
        {
            title: 'DUCKY9',
            imgsrc:'https://img.freepik.com/premium-vector/cute-cartoon-design-happy-potato-vegetables-kids_594704-47.jpg',
        },
        {
            title: 'DUCKY10',
            imgsrc:'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY4NC0yMDMtcF8xLnBuZw.png',
        },
        {
            title: 'DUCKY11',
            imgsrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDHmd8u1KWff_yztHktZhkl_vzftUWU1pLAQ&s',
        },
        {
            title: 'DUCKY12',
            imgsrc:'https://cdn.pixabay.com/photo/2017/11/06/18/30/eggplant-2924511_1280.png',
        }
    ]
},
{
    title: 'Container-4',
    products:[
        {
            title: 'DUCKY13',
            imgsrc:'https://i.pinimg.com/236x/eb/a3/2e/eba32e672af506c4f6293eeb40053e30.jpg',
        },
        {
            title: 'DUCKY14',
            imgsrc:'https://i.pinimg.com/736x/2a/e0/3e/2ae03e95ef7682a6afe3b3fe9a880a1b.jpg',
        },
        {
            title: 'DUCKY15',
            imgsrc:'https://i0.wp.com/i.pinimg.com/originals/8c/5f/44/8c5f4438dfa6c43a8c9bedc20e4ec866.gif?resize=160,120',
        },
        {
            title: 'DUCKY16',
            imgsrc:'https://i.pinimg.com/236x/78/c0/de/78c0de75f5fe87451163ebd18ac64145.jpg',
        }
    ]
}
];

const App=()=>{
    return (
        <div>
            <NavBar/>
            <h1>WORKING</h1>
            <div className="Prod-add-cont">
                {dummy.map((ele,idx)=>{
                    console.log(ele,idx);
                    return <ImageProduct 
                    key={ele.title} 
                    title={ele.title} 
                    products={ele.products}
                    idx={idx}/>
                })}
            </div>
        </div>
    )
};

const parent=document.getElementById("parent");
const root= ReactDOM.createRoot(parent);
root.render(<App/>);