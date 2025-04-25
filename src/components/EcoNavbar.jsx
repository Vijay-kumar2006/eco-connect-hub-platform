
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, MapPin, Search, ShoppingCart, Book, User, Leaf } from 'lucide-react';

const EcoNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/explore", icon: MapPin, label: "Explore" },
    { to: "/track", icon: Leaf, label: "Track" },
    { to: "/identify", icon: Search, label: "Identify" },
    { to: "/recycling-centers", icon: MapPin, label: "Recycling Centers" },
    { to: "/shopping", icon: ShoppingCart, label: "Shopping" },
    { to: "/community", icon: Book, label: "Community" },
    { to: "/profile", icon: User, label: "Profile" },
  ];

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <nav className="w-full bg-gradient-to-r from-green-200 via-blue-100 to-green-100 shadow px-4 py-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={handleLogoClick}>
          <img
            src="/lovable-uploads/67076f3c-666f-486c-8723-73cc2662db4f.png"
            alt="EcoTrack Logo"
            className="w-8 h-8 rounded-full border-2 border-green-700 object-cover"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-green-800 tracking-tight">EcoTrack</span>
            <span className="hidden sm:inline text-xs text-gray-600 font-medium">
              Identify & Learn about Recycling!
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {navItems.map(({ to, icon: Icon, label }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                location.pathname === to
                  ? "bg-green-600 text-white"
                  : "text-green-900 hover:bg-green-100"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default EcoNavbar;
