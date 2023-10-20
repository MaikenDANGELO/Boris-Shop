const main = document.querySelector('.main');
const sortSelect = document.getElementById('sort-by');
const showMoreButton = document.getElementById('show-more');

const additionalProducts = [
    {
        image: 'product7.jpg',
        title: 'Produit 7',
        description: 'Description du produit 7.',
        category: 'Catégorie 1',
        color: 'Bleu',
        price: '32,99 €',
    },
    {
        image: 'product8.jpg',
        title: 'Produit 8',
        description: 'Description du produit 8.',
        category: 'Catégorie 2',
        color: 'Rouge',
        price: '42,99 €',
    },
    {
        image: 'product9.jpg',
        title: 'Produit 9',
        description: 'Description du produit 9.',
        category: 'Catégorie 1',
        color: 'Vert',
        price: '27,99 €',
    },
];

function addProducts(products) {
    products.forEach((product) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <span class="category">${product.category}</span>
            <span class="color">${product.color}</span>
            <span class="price">${product.price}</span>
            <button>Acheter</button>
        `;
        main.appendChild(productElement);
    });
}

showMoreButton.addEventListener('click', () => {
    addProducts(additionalProducts);
    showMoreButton.style.display = 'none';
});

function sortProducts(sortBy) {
    const products = Array.from(main.querySelectorAll('.product'));
    products.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.price').textContent.replace(' €', ''));
        const priceB = parseFloat(b.querySelector('.price').textContent.replace(' €', ''));
        if (sortBy === 'price-asc') {
            return priceA - priceB;
        } else {
            return priceB - priceA;
        }
    });
    products.forEach(product => product.remove());
    products.forEach(product => main.appendChild(product));
}

sortSelect.addEventListener('change', () => {
    const sortBy = sortSelect.value;
    sortProducts(sortBy);
});

sortProducts(sortSelect.value);
