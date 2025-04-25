
import React from 'react';
import EcoNavbar from '../components/EcoNavbar';
import RecyclingMap from '../components/RecyclingMap';

const RecyclingCenters = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <EcoNavbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Find Recycling Centers</h1>
        <div className="max-w-4xl mx-auto">
          <RecyclingMap />
        </div>
      </main>
    </div>
  );
};

export default RecyclingCenters;
