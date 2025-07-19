import React, { useState } from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [products] = useState([
    { id: 1, name: "Wireless Mouse", price: 25.99, description: "Ergonomic and fast response", category: "Accessories" },
    { id: 2, name: "Mechanical Keyboard", price: 89.99, description: "Tactile switches for smooth typing", category: "Accessories" },
    { id: 3, name: "HD Monitor", price: 149.99, description: "1080p LED display", category: "Displays" },
    { id: 4, name: "Webcam", price: 39.99, description: "HD video streaming", category: "Accessories" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(products.map(p => p.category))];

  // Filter products by category
  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="app">
      <h1>🛒 Cyberpunk Product Listing App</h1>
      <label>
        Filter by Category:{" "}
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
