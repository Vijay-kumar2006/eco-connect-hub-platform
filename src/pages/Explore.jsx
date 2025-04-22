
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";

const Explore = () => {
  const ecoTips = [
    {
      id: 1,
      title: "Reduce Single-Use Plastics",
      description: "Switch to reusable water bottles, bags, and containers to minimize plastic waste in landfills and oceans.",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Start Composting at Home",
      description: "Turn kitchen scraps and yard waste into nutrient-rich soil for your garden while reducing methane emissions.",
      category: "Waste Management",
      image: "https://images.unsplash.com/photo-1591340250382-899a54d55941?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Energy-Efficient Lighting",
      description: "Replace traditional bulbs with LED lights to save energy and reduce your electricity bill.",
      category: "Energy",
      image: "https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Water Conservation Methods",
      description: "Install low-flow showerheads and fix leaky faucets to save thousands of gallons of water annually.",
      category: "Water",
      image: "https://images.unsplash.com/photo-1534707055352-5d9de5ec3d7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      title: "Reduce Meat Consumption",
      description: "Try incorporating more plant-based meals into your diet to reduce carbon footprint and water usage.",
      category: "Food",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      title: "Shop Local and Seasonal",
      description: "Support local farmers and reduce transportation emissions by buying seasonal produce from nearby sources.",
      category: "Shopping",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const categories = [
    { name: "All", count: ecoTips.length },
    { name: "Lifestyle", count: 1 },
    { name: "Waste Management", count: 1 },
    { name: "Energy", count: 1 },
    { name: "Water", count: 1 },
    { name: "Food", count: 1 },
    { name: "Shopping", count: 1 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-green-600">EcoConnect Hub</div>
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-gray-600 hover:text-green-600 font-medium">Home</Link>
              <Link to="/explore" className="text-green-600 hover:text-green-700 font-medium">Explore</Link>
              <Link to="/track" className="text-gray-600 hover:text-green-600 font-medium">Track</Link>
              <Link to="/shopping" className="text-gray-600 hover:text-green-600 font-medium">Shop</Link>
              <Link to="/community" className="text-gray-600 hover:text-green-600 font-medium">Community</Link>
              <Link to="/profile" className="text-gray-600 hover:text-green-600 font-medium">Profile</Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Explore Eco-Friendly Resources</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover tips, guides, and information to help you live more sustainably and reduce your environmental impact.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-6">Categories</h2>
              <div className="space-y-2">
                {categories.map(category => (
                  <button 
                    key={category.name}
                    className={`w-full text-left px-3 py-2 rounded-md flex justify-between items-center ${
                      category.name === 'All' ? 'bg-green-100 text-green-800' : 'hover:bg-gray-100'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Search</h2>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search resources..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Featured Resource</h2>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Zero Waste Living Guide"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                    Comprehensive Guide
                  </span>
                  <h3 className="text-xl font-bold mb-3">Zero Waste Living: A Beginner's Guide</h3>
                  <p className="text-gray-600 mb-4">
                    Learn practical steps to reduce waste in your daily life, from shopping habits to home organization. This comprehensive guide provides actionable tips for beginners looking to embrace a more sustainable lifestyle.
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Read Full Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ecoTips.map(tip => (
                <div key={tip.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium mb-3">
                      {tip.category}
                    </span>
                    <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{tip.description}</p>
                    <button className="text-green-600 font-medium hover:text-green-700 flex items-center text-sm">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
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

export default Explore;
