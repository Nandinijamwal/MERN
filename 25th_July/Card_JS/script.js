document.addEventListener('DOMContentLoaded', () => {
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('card-container');
            data.products.forEach(product => {
                const card = document.createElement('div');
                card.className = 'card';
                
                card.innerHTML = `
                    <img src="${product.thumbnail}" alt="${product.title}">
                    <div class="card-content">
                        <h2 class="card-title">${product.title}</h2>
                        <p class="card-description">${product.description}</p>
                        <p class="card-price">$${product.price}</p>
                    </div>
                `;
                
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});





// MANAS CODE

console.log("Fetching Data... 3");
const res = fetch('https://dummyjson.com/products');

res.then((data) => {
    const obj = data.json();
    obj.then((js) => {
        renderUI(js);
    })
    .catch((err) => {
        console.log("ERROR", err);
    });
})
.catch((error) => {
    console.error('Error fetching data:', error);
});

function renderUI(data) {
    const products = data.products;
    const parent = document.getElementById('root')
    for (let i = 0; i < 9; i++) {
        const product = products[i];
        const ftitle = product.title;
        const tn = product.thumbnail;
        console.log(ftitle, tn);
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        const ti = document.createElement('h3');
        ti.innerText = ftitle;
        productDiv.appendChild(ti);
        const im = document.createElement('img');
        im.src = tn;
        productDiv.appendChild(im);
        parent.appendChild(productDiv);
    }
}