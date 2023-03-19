import React, { useState } from "react";

function Products() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems([...cartItems, item]);
  }

  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];

  return (
    <div className="product-list">
      <h2>Products</h2>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
}

function ProductList({ products, addToCart }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <span className="product-name">{product.name}</span>
          <span className="product-price">${product.price}</span>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </li>
      ))}
    </ul>
  );
}

export default Products;
