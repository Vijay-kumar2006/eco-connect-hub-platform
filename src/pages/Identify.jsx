
import React from 'react';
import { Link } from 'react-router-dom';
import IdentifyNavbar from '../components/IdentifyNavbar';
import { Search } from 'lucide-react';

const Identify = () => {
  return (
    <>
      <IdentifyNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-green-800">Waste Identification</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/identify/wet" className="block">
            <div className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 text-green-800">Wet Waste Identification</h2>
              <p className="text-gray-600 mb-4">Learn about wet waste and how to identify it correctly.</p>
              <div className="flex items-center text-green-600 hover:text-green-800">
                <Search className="mr-2" />
                <span>Explore Wet Waste</span>
              </div>
            </div>
          </Link>
          
          <Link to="/identify/dry" className="block">
            <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">Dry Waste Identification</h2>
              <p className="text-gray-600 mb-4">Learn about dry waste and how to identify it correctly.</p>
              <div className="flex items-center text-blue-600 hover:text-blue-800">
                <Search className="mr-2" />
                <span>Explore Dry Waste</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Identify;
