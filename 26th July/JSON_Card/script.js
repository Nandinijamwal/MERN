console.log("Fetching Data... 3");
const res = fetch('https://dummyjson.com/recipes');

let allRecipes = [];

res.then((data) => {
    const obj = data.json();
    obj.then((js) => {
        allRecipes = js.recipes;
        renderUI(allRecipes);
    })
    .catch((err1) => {
        console.log("Error with parsing", err1);
    });
})
.catch((err) => {
    console.log("ERROR", err);
});

function renderUI(recipes) {
    const parent = document.getElementById("root");
    parent.innerHTML = ''; 

    recipes.forEach(rec => {
        const { name, rating, cuisine, image } = rec;

        // CREATE ELEMENTS
        const heading = document.createElement('h2');
        const divi = document.createElement('div');
        const head4 = document.createElement('h3');
        const para = document.createElement('h3');
        const img = document.createElement('img');
        const btn = document.createElement('button');

        // CLASS NAME
        heading.className = 'head1';
        divi.className = 'divi';
        head4.className = 'head2';
        para.className = 'head2';
        img.className = 'photo';
        btn.className = 'btn';

        // ASSIGNING
        heading.innerText = name;
        para.innerText = "Ratings: " + rating;
        head4.innerText = "Cuisine: " + cuisine;
        img.src = image;
        btn.innerText = "ORDER!";

        // ORDER EVENT
        btn.onclick = function() {
            window.location.href = './btn.html';
        };

        // APPEND
        divi.appendChild(heading);
        divi.appendChild(img);
        divi.appendChild(head4);
        divi.appendChild(para);
        divi.appendChild(btn);
        parent.appendChild(divi);
    });
}

// Debounce function to limit the rate at which the search function is called
function debounce(func, delay) {
    let debounceTimer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
}

function handleSearch(event) {
    const query = event.target.value.toLowerCase();
    const filteredRecipes = allRecipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query)
    );
    renderUI(filteredRecipes);
}

// Attach the debounced search handler to the input event
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', debounce(handleSearch, 300));