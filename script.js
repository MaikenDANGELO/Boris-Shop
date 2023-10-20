const main = document.querySelector('.main');
const sortSelect = document.getElementById('sort-by');
const showMoreButton = document.getElementById('show-more');

const additionalProducts = [
    {
        image: '/images/produit/phage.webp',
        title: 'Phage',
        description: 'Pour enfoncer les clous les plus coriaces',
        category: 'Divers',
        color: 'Blanc',
        price: '109,99 €',
    },
    {
        image: '/images/produit/sorcerers-shoes.png',
        title: 'Air Sorcerer 1',
        description: 'Pour se déplacer en toute élégance',
        category: 'Vêtement',
        color: 'Bleu',
        price: '109,99 €',
    },
    {
        image: '/images/produit/negatrons-cloak.png',
        title: 'Manteau de Négatron',
        description: 'Cette cape permet de vous donne des stats de RM (Résistance au ManqueDeFlow)',
        category: 'Vêtement',
        color: 'Blanc',
        price: '89,99 €',
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
