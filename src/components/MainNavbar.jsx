
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MainNavbar = () => {
  const location = useLocation();
  
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-green-600">EcoConnect Hub</div>
          <div className="flex items-center space-x-6">
            <Link to="/" className={`font-medium ${location.pathname === '/' ? 'text-green-600' : 'text-gray-600 hover:text-green-600'}`}>Home</Link>
            <Link to="/explore" className={`font-medium ${location.pathname === '/explore' ? 'text-green-600' : 'text-gray-600 hover:text-green-600'}`}>Explore</Link>
            <Link to="/track" className={`font-medium ${location.pathname === '/track' ? 'text-green-600' : 'text-gray-600 hover:text-green-600'}`}>Track</Link>
            <Link to="/shopping" className={`font-medium ${location.pathname === '/shopping' ? 'text-green-600' : 'text-gray-600 hover:text-green-600'}`}>Shop</Link>
            <Link to="/community" className={`font-medium ${location.pathname === '/community' ? 'text-green-600' : 'text-gray-600 hover:text-green-600'}`}>Community</Link>
            <Link to="/profile" className={`font-medium ${location.pathname === '/profile' ? 'text-green-600' : 'text-gray-600 hover:text-green-600'}`}>Profile</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MainNavbar;
