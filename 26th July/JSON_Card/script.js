const res =fetch('https://dummyjson.com/recipes');

res.then((data)=>
{
    const obj=data.json();
    obj.then((js)=>
    {
        // console.log(js);
        renderUI(js);
    })
    .catch((err1)=>{
        console.log("Error with parsing", err1);
    })

})
.catch((err)=>{
    console.log("ERROR", err);
});



function renderUI(js){
    const recipe = js.recipes;
    console.log(recipe);
    const parent = document.getElementById("root");
    let i=0;
    for (i =0; i<30;i++)
    {
        const rec = recipe[i];
        const nam =rec.name;
        const ratin =rec.rating;
        const cui =rec.cuisine;
        const im =rec.image;

        //CREATE ELEMENTS
        const heading = document.createElement('h2');
        const divi = document.createElement('div');
        const head4 = document.createElement('h3');
        const para = document.createElement('h3');
        const image = document.createElement('img');
        const bu=document.createElement('button');

        //CLASS NAME
        heading.className = 'head1';
        divi.className = 'divi';
        head4.className = 'head2';
        para.className = 'head2';
        image.className = 'photo';
        bu.className='btn';

        //ASSIGNING
        heading.innerText = nam;
        para.innerText= "Ratings:" +  ratin;
        head4.innerText="Cuisine:" +  cui;
        image.src=im;
        bu.innerText="ORDER!";

        //ORDER EVENT
        bu.onclick = function() {
            window.location.href = './btn.html';
        };

        //APPEND
        divi.appendChild(heading);
        divi.appendChild(image);
        divi.appendChild(head4);
        divi.appendChild(para);
        divi.appendChild(bu);
        parent.appendChild(divi);
    }

}
