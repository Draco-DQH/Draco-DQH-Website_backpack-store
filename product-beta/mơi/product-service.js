class ProductService {
    constructor() {
        this.products = [
            { id: 'P1', name: 'Product 1', price: 100, image: 'https://via.placeholder.com/300x200' },
            { id: 'P2', name: 'Product 2', price: 200, image: 'https://via.placeholder.com/300x200' },
            { id: 'P3', name: 'Product 3', price: 300, image: 'https://via.placeholder.com/300x200' },
            { id: 'P4', name: 'Product 4', price: 400, image: 'https://via.placeholder.com/300x200' }
        ];
    }

    // Render product list to HTML
    renderProducts() {
        const productList = document.getElementById('product-list');
        productList.innerHTML = ''; // Clear existing products
        this.products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.setAttribute('data-id', product.id);
            productItem.setAttribute('data-name', product.name);

            productItem.innerHTML = `
                <img src="${product.image}" alt="Product Image" onclick="goToDetail('${product.id}')">
                <h4>${product.name}</h4>
                <p>$${product.price}</p>
                <span>Mã: ${product.id}</span>
            `;

            productList.appendChild(productItem);
        });
        this.updateProductCount();
    }

    // Search products by name or id
    searchProducts(query) {
        const filteredProducts = this.products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.id.toLowerCase().includes(query.toLowerCase())
        );
        return filteredProducts;
    }

    // Add new product
    addProduct(product) {
        this.products.push(product);
        this.renderProducts();
    }

    // Update product count
    updateProductCount() {
        const productCountElement = document.getElementById('product-count');
        productCountElement.innerText = `Số lượng sản phẩm: ${this.products.length}`;
    }
}

// Khởi tạo ProductService
const productService = new ProductService();
productService.renderProducts(); // Render initial product list

// Hàm tìm kiếm sản phẩm theo tên hoặc mã
function searchProducts() {
    const query = document.getElementById('search-input').value;
    const filteredProducts = productService.searchProducts(query);
    productService.products = filteredProducts;
    productService.renderProducts();
}

// Hàm chuyển hướng đến chi tiết sản phẩm
function goToDetail(id) {
    window.location.href = `sc2.html?id=${id}`;
}
