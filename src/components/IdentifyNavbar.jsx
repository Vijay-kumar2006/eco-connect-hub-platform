
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Home } from 'lucide-react';

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/explore", label: "Explore" },
  { to: "/track", label: "Track" },
  { to: "/identify", label: "Identify", icon: Search },
  { to: "/shopping", label: "Shopping" },
  { to: "/community", label: "Community" },
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
              {link.icon && <link.icon size={16} className="inline" />}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
