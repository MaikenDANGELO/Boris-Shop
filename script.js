AOS.init();

const main = document.querySelector('.main');
const sortSelect = document.getElementById('sort-by');
const showMoreButton = document.getElementById('show-more');

const additionalProducts = [
    {
        image: '/images/produit/phage.webp',
        title: 'Phage',
        description: 'Pour enfoncer les clous les plus coriaces',
        dataCategory: 'category2',
        category: 'Divers',
        color: 'Blanc',
        price: '109,99 €'
    }, {
        image: '/images/produit/sorcerers-shoes.png',
        title: 'Air Sorcerer 1',
        description: 'Pour se déplacer en toute élégance',
        dataCategory: 'category1',
        category: 'Vetement',
        color: 'Bleu',
        price: '109,99 €'
    }, {
        image: '/images/produit/negatrons-cloak.png',
        title: 'Manteau de Négatron',
        description: 'Cette cape permet de vous donne des stats de RM (Résistance au ManqueDeFlow)',
        dataCategory: 'category1',
        category: 'Vetement',
        color: 'Blanc',
        price: '89,99 €'
    },
];

function addProducts(products) {
    products.forEach((product) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${
            product.image
        }" alt="${
            product.title
        }">
            <h2>${
            product.title
        }</h2>
            <p>${
            product.description
        }</p>
            <span data-category="${
            product.dataCategory
        }" class="category">${
            product.category
        }</span>
            <span class="color">${
            product.color
        }</span>
            <span class="price">${
            product.price
        }</span>
            <button>Acheter</button>
        `;
        main.appendChild(productElement);
    });
}

showMoreButton.addEventListener('click', () => {
    addProducts(additionalProducts);
    showMoreButton.style.display = 'none';
});

const categoryRadioButtons = document.querySelectorAll('input[name="category"]');

categoryRadioButtons.forEach((radio) => {
    radio.addEventListener('change', filterProducts);
});

function filterProducts() {
    const selectedCategory = document.querySelector('input[name="category"]:checked').value;

    const products = document.querySelectorAll('.product');

    products.forEach((product) => {
        const category = product.querySelector('.category').getAttribute('data-category');

        if ((selectedCategory === 'all' || category === selectedCategory)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

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
