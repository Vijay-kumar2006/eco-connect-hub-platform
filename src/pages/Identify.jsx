
import React from 'react';
import { Button } from "@/components/ui/button";
import { Droplet, CloudRain } from "lucide-react";
import { Link } from "react-router-dom";

const wetExamples = [
  { name: "Banana Peel", img: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=300&q=80" },
  { name: "Vegetable Scraps", img: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=300&q=80" }
];

const dryExamples = [
  { name: "Dry Leaf", img: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=300&q=80" },
  { name: "Paper", img: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=300&q=80" }
];

const Identify = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-green-700">Plant & Waste Identifier</h1>
          <p className="text-gray-600">Quickly recognize and sort your wet and dry waste below</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Wet Waste */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-2 mb-4">
              <Droplet className="text-green-500" size={24} />
              <h2 className="text-xl font-semibold">Wet Waste Examples</h2>
            </div>
            <div className="flex gap-4 mb-4">
              {wetExamples.map((w) => (
                <div key={w.name} className="flex flex-col items-center">
                  <img src={w.img} alt={w.name} className="w-16 h-16 object-cover rounded-full mb-1" />
                  <span className="text-sm">{w.name}</span>
                </div>
              ))}
            </div>
            <Link
              to="/identify/wet"
              className="inline-flex items-center mt-2 px-3 py-2 bg-green-600 rounded text-white font-medium hover:bg-green-700"
            >
              Go to Wet Waste ID <Droplet size={18} className="ml-2" />
            </Link>
          </div>
          {/* Dry Waste */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-2 mb-4">
              <CloudRain className="text-blue-500" size={24} />
              <h2 className="text-xl font-semibold">Dry Waste Examples</h2>
            </div>
            <div className="flex gap-4 mb-4">
              {dryExamples.map((d) => (
                <div key={d.name} className="flex flex-col items-center">
                  <img src={d.img} alt={d.name} className="w-16 h-16 object-cover rounded-full mb-1" />
                  <span className="text-sm">{d.name}</span>
                </div>
              ))}
            </div>
            <Link
              to="/identify/dry"
              className="inline-flex items-center mt-2 px-3 py-2 bg-blue-600 rounded text-white font-medium hover:bg-blue-700"
            >
              Go to Dry Waste ID <CloudRain size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Identify;
