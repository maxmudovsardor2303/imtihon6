document.addEventListener("DOMContentLoaded", function() {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        displayProducts(data); // displayProducts funksiyasini chaqirish
      })
      .catch(error => {
        console.error('Xatolik yuz berdi:', error);
      });
  
    function displayProducts(products) {
      const productsContainer = document.getElementById('products');
      
      products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
          <h2>${product.title}</h2>
          <img src="${product.image}" alt="${product.title}" style="max-width: 200px;">
          <p>Price: $${product.price}</p>
          <p>Description: ${product.description}</p>
        `;
        productsContainer.appendChild(productElement);
      });
    }
  });