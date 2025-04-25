
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { BarChart, Calendar, ArrowRight } from "lucide-react";
import IdentifyNavbar from '../components/IdentifyNavbar';

const Track = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Use consistent navbar */}
      <IdentifyNavbar />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Track Your Waste Management</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Monitor and manage your household waste more effectively by tracking your waste separation and recycling habits.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Waste Tracking Dashboard</h2>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>This Month</span>
              </Button>
              <Button variant="outline" className="flex items-center">
                <BarChart className="mr-2 h-4 w-4" />
                <span>View Stats</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-gray-500 text-sm mb-1">Total Waste</div>
              <div className="text-2xl font-bold">24.5 kg</div>
              <div className="text-green-600 text-sm">
                ↓ 12% from last month
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-gray-500 text-sm mb-1">Recycled</div>
              <div className="text-2xl font-bold">15.2 kg</div>
              <div className="text-green-600 text-sm">
                ↑ 8% from last month
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-gray-500 text-sm mb-1">Composted</div>
              <div className="text-2xl font-bold">5.8 kg</div>
              <div className="text-green-600 text-sm">
                ↑ 15% from last month
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-gray-500 text-sm mb-1">Landfill</div>
              <div className="text-2xl font-bold">3.5 kg</div>
              <div className="text-green-600 text-sm">
                ↓ 20% from last month
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            <Link 
              to="/track/wet" 
              className="flex-1 bg-blue-50 rounded-xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-colors flex flex-col justify-between hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-blue-800">Wet Waste</h3>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-lg font-bold">43%</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Track your kitchen waste, food scraps, and compostable items. Learn how to properly manage wet waste through composting and other eco-friendly disposal methods.
                </p>
                <ul className="text-sm text-gray-700 space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Food scraps and leftovers
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Fruit and vegetable peels
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Coffee grounds and tea bags
                  </li>
                </ul>
              </div>
              
              <Button className="bg-blue-600 hover:bg-blue-700 w-full justify-center mt-4">
                Track Wet Waste
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            
            <Link 
              to="/track/dry" 
              className="flex-1 bg-amber-50 rounded-xl p-6 border-2 border-amber-200 hover:border-amber-400 transition-colors flex flex-col justify-between hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-amber-800">Dry Waste</h3>
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-amber-600 text-lg font-bold">57%</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Track recyclable materials like paper, plastic, glass, and metal. Monitor your consumption patterns and find ways to reduce, reuse, and recycle more effectively.
                </p>
                <ul className="text-sm text-gray-700 space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    Paper, cardboard, and magazines
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    Plastic containers and bottles
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    Glass jars and metal cans
                  </li>
                </ul>
              </div>
              
              <Button className="bg-amber-600 hover:bg-amber-700 w-full justify-center mt-4">
                Track Dry Waste
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Tips for Better Waste Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-5">
              <div className="text-green-600 text-xl font-bold mb-2">01</div>
              <h3 className="font-semibold text-lg mb-2">Proper Segregation</h3>
              <p className="text-gray-600">Start by separating your waste into wet and dry categories. This is the foundation of effective waste management.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <div className="text-green-600 text-xl font-bold mb-2">02</div>
              <h3 className="font-semibold text-lg mb-2">Home Composting</h3>
              <p className="text-gray-600">Consider setting up a home composting system for your wet waste. It's easier than you think and great for gardens.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <div className="text-green-600 text-xl font-bold mb-2">03</div>
              <h3 className="font-semibold text-lg mb-2">Reduce Consumption</h3>
              <p className="text-gray-600">The best way to manage waste is to create less of it. Be mindful of packaging when shopping.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>&copy; Ecotrack Made in India with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Track;
