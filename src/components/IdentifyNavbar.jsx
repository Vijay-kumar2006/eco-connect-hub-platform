
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Home, ShoppingCart, Book, Leaf, Map, Droplet, CloudRain } from 'lucide-react';

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/explore", label: "Explore", icon: Map },
  { to: "/track", label: "Track", icon: Leaf },
  { to: "/identify", label: "Identify", icon: Search },
  { to: "/identify/wet", label: "Wet", icon: Droplet },
  { to: "/identify/dry", label: "Dry", icon: CloudRain },
  { to: "/shopping", label: "Shopping", icon: ShoppingCart },
  { to: "/community", label: "Community", icon: Book },
  { to: "/profile", label: "Profile", icon: User },
];

export default function IdentifyNavbar() {
  const location = useLocation();

  return (
    <nav className="w-full bg-gradient-to-r from-green-200 via-blue-100 to-green-100 shadow px-4 py-2 flex items-center justify-between mb-2">
      <div className="flex items-center gap-3">
        <span className="text-xl font-bold text-green-800 tracking-tight">EcoTrack</span>
        <span className="text-xs text-gray-600 font-medium">
          Identify & Learn about Plants!
        </span>
      </div>
      <ul className="flex items-center gap-5 mx-10">
        {navLinks.map(link => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={`font-semibold px-2 py-1 rounded transition-colors ${
                location.pathname === link.to
                  ? "bg-green-600 text-white"
                  : "text-green-900 hover:bg-green-100"
              } flex items-center gap-1`}
            >
              {link.icon && <link.icon size={18} className="inline mr-1" />}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
