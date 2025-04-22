
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, Filter, Star, Heart, ArrowRight } from "lucide-react";

const Shopping = () => {
  const categories = [
    { name: "All Products", count: 120 },
    { name: "Home & Kitchen", count: 42 },
    { name: "Personal Care", count: 28 },
    { name: "Food & Beverages", count: 25 },
    { name: "Fashion", count: 18 },
    { name: "Garden & Outdoors", count: 7 }
  ];

  const products = [
    {
      id: 1,
      name: "Bamboo Toothbrush Set",
      price: 12.99,
      rating: 4.5,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Personal Care",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Reusable Produce Bags",
      price: 14.95,
      rating: 4.8,
      reviews: 95,
      image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Home & Kitchen",
      badge: "New"
    },
    {
      id: 3,
      name: "Stainless Steel Water Bottle",
      price: 24.99,
      rating: 4.7,
      reviews: 215,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Home & Kitchen"
    },
    {
      id: 4,
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      rating: 4.3,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Fashion"
    },
    {
      id: 5,
      name: "Beeswax Food Wraps",
      price: 18.50,
      rating: 4.6,
      reviews: 142,
      image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Home & Kitchen",
      badge: "Popular"
    },
    {
      id: 6,
      name: "Compostable Phone Case",
      price: 22.00,
      rating: 4.2,
      reviews: 53,
      image: "https://images.unsplash.com/photo-1604054923518-e491a9a6afbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Personal Care"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-green-600">EcoConnect Hub</div>
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-gray-600 hover:text-green-600 font-medium">Home</Link>
              <Link to="/explore" className="text-gray-600 hover:text-green-600 font-medium">Explore</Link>
              <Link to="/track" className="text-gray-600 hover:text-green-600 font-medium">Track</Link>
              <Link to="/shopping" className="text-green-600 hover:text-green-700 font-medium">Shop</Link>
              <Link to="/community" className="text-gray-600 hover:text-green-600 font-medium">Community</Link>
              <Link to="/profile" className="text-gray-600 hover:text-green-600 font-medium">Profile</Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Eco-Friendly Marketplace</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Shop sustainably with our curated collection of eco-friendly products from verified ethical sellers.
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          <div className="flex items-center space-x-4 w-full md:w-auto">
            <Button variant="outline" className="flex items-center">
              <Filter className="mr-2 h-4 w-4" />
              <span>Filter</span>
            </Button>
            <select className="px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating: Highest</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-6">Categories</h2>
              <div className="space-y-2">
                {categories.map(category => (
                  <button 
                    key={category.name}
                    className={`w-full text-left px-3 py-2 rounded-md flex justify-between items-center ${
                      category.name === 'All Products' ? 'bg-green-100 text-green-800' : 'hover:bg-gray-100'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-8 border-t pt-6">
                <h2 className="text-xl font-semibold mb-4">Price Range</h2>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-5/12">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div className="w-2/12 text-center">-</div>
                  <div className="w-5/12">
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">Apply Filter</Button>
              </div>

              <div className="mt-8 border-t pt-6">
                <h2 className="text-xl font-semibold mb-4">Eco Certifications</h2>
                <div className="space-y-2">
                  {['Organic Certified', 'Plastic-Free', 'Fair Trade', 'Biodegradable', 'Vegan'].map(cert => (
                    <div key={cert} className="flex items-center">
                      <input
                        id={cert.replace(' ', '-').toLowerCase()}
                        type="checkbox"
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label htmlFor={cert.replace(' ', '-').toLowerCase()} className="ml-2 block text-sm text-gray-700">
                        {cert}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <button className="absolute top-3 right-3 h-8 w-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100">
                      <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                    </button>
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-gray-500 mb-1">{product.category}</div>
                    <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="ml-1 text-sm font-medium">{product.rating}</span>
                      </div>
                      <span className="text-xs text-gray-500 ml-2">({product.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">${product.price}</span>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-green-600 text-white rounded-md">1</button>
                <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100">2</button>
                <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100">3</button>
                <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>&copy; 2025 EcoConnect Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Shopping;
