import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Home as HomeIcon, User, ShoppingCart, MapPin } from "lucide-react";
import IdentifyNavbar from "../components/IdentifyNavbar";
import { Card, CardContent } from "@/components/ui/card";

const useMockAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();
  const login = () => {
    setIsAuthenticated(true);
    navigate("/");
  };
  const logout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return { isAuthenticated, login, logout };
};

const Home = () => {
  const { isAuthenticated, logout } = useMockAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <IdentifyNavbar />

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Sustainable Living Made <span className="text-green-600">Simple</span></h1>
            <p className="text-lg text-gray-600 mb-8">Join the EcoConnect Hub community and discover ways to reduce your carbon footprint, track your waste management, and shop eco-friendly products.</p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/explore">
                <Button className="bg-green-600 hover:bg-green-700">
                  <HomeIcon className="mr-2" />
                  Explore Now
                </Button>
              </Link>
              <Link to="/shopping">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  <ShoppingCart className="mr-2" />
                  Shop Eco Products
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-100 rounded-lg p-5 text-center hover:shadow-md transition">
                  <h3 className="font-medium text-green-800">Track Waste</h3>
                  <p className="text-sm text-gray-600 mt-2">Monitor and manage your household waste</p>
                </div>
                <div className="bg-blue-100 rounded-lg p-5 text-center hover:shadow-md transition">
                  <h3 className="font-medium text-blue-800">Eco Community</h3>
                  <p className="text-sm text-gray-600 mt-2">Connect with like-minded people</p>
                </div>
                <div className="bg-amber-100 rounded-lg p-5 text-center hover:shadow-md transition">
                  <h3 className="font-medium text-amber-800">Shop Green</h3>
                  <p className="text-sm text-gray-600 mt-2">Browse sustainable products</p>
                </div>
                <div className="bg-purple-100 rounded-lg p-5 text-center hover:shadow-md transition">
                  <h3 className="font-medium text-purple-800">Your Profile</h3>
                  <p className="text-sm text-gray-600 mt-2">Track your sustainability journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Find Recycling Centers Near You</h2>
          <Link to="/recycling-centers">
            <Card className="max-w-4xl mx-auto hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/c5e03f53-84bf-45b9-8008-7e2def08131a.png"
                    alt="Recycling Centers Map"
                    className="w-full h-[300px] object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
                    <div className="bg-white/90 px-6 py-3 rounded-full flex items-center gap-2">
                      <MapPin className="text-green-600" />
                      <span className="font-medium text-green-700">View Recycling Centers Map</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold mb-4">1</div>
              <h3 className="text-xl font-medium mb-2">Track Your Waste</h3>
              <p className="text-gray-600">Monitor your waste production and learn how to separate, reduce, and manage it effectively.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold mb-4">2</div>
              <h3 className="text-xl font-medium mb-2">Join Communities</h3>
              <p className="text-gray-600">Connect with eco-conscious individuals and groups to share ideas and initiatives.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold mb-4">3</div>
              <h3 className="text-xl font-medium mb-2">Shop Sustainably</h3>
              <p className="text-gray-600">Browse our curated marketplace of eco-friendly products from verified sustainable sources.</p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold text-green-400 mb-4">EcoConnect Hub</div>
              <p className="text-gray-300 max-w-xs">Empowering individuals to make sustainable choices for a greener planet.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-300 hover:text-green-400">Home</Link></li>
                  <li><Link to="/explore" className="text-gray-300 hover:text-green-400">Explore</Link></li>
                  <li><Link to="/track" className="text-gray-300 hover:text-green-400">Track</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><Link to="/shopping" className="text-gray-300 hover:text-green-400">Shop</Link></li>
                  <li><Link to="/community" className="text-gray-300 hover:text-green-400">Community</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Account</h3>
                <ul className="space-y-2">
                  {!isAuthenticated && (
                    <>
                      <li><Link to="/login" className="text-gray-300 hover:text-green-400">Login</Link></li>
                      <li><Link to="/signup" className="text-gray-300 hover:text-green-400">Sign Up</Link></li>
                    </>
                  )}
                  <li><Link to="/profile" className="text-gray-300 hover:text-green-400">Profile</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EcoConnect Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
