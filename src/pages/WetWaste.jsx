import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus, Edit, Calendar } from "lucide-react";
import IdentifyNavbar from '../components/IdentifyNavbar';

const WetWaste = () => {
  const wasteEntries = [
    { date: "2025-04-20", type: "Food scraps", weight: "1.2 kg", notes: "Leftover vegetables and fruit peels" },
    { date: "2025-04-19", type: "Coffee grounds", weight: "0.4 kg", notes: "Morning coffee grounds and tea bags" },
    { date: "2025-04-17", type: "Food scraps", weight: "0.8 kg", notes: "Meal preparation scraps" },
    { date: "2025-04-14", type: "Yard waste", weight: "2.5 kg", notes: "Grass clippings and small plant trimmings" },
    { date: "2025-04-10", type: "Food scraps", weight: "0.9 kg", notes: "Spoiled produce and leftovers" }
  ];

  const compostTips = [
    "Keep a balance of 'browns' (dry leaves, paper) and 'greens' (food scraps)",
    "Chop or crush larger food pieces to speed up decomposition",
    "Turn your compost regularly to provide oxygen",
    "Keep compost damp but not soggy for optimal breakdown",
    "Avoid meat, dairy, and oily foods in home compost"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <IdentifyNavbar />

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/track" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Waste Tracking
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Wet Waste Tracking</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Monitor your food scraps, kitchen waste, and compostable materials to reduce landfill waste.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Recent Wet Waste Entries</h2>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Entry
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Weight
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Notes
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {wasteEntries.map((entry, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {entry.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {entry.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {entry.weight}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {entry.notes}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">
                            <Edit className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-6">Wet Waste Analytics</h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <div className="h-64 flex items-center justify-center">
                  <p className="text-gray-500 text-center">Chart showing your wet waste tracking over time would appear here</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-100 rounded-lg p-4">
                  <div className="text-blue-800 font-medium mb-1 text-sm">Total This Month</div>
                  <div className="text-2xl font-bold">5.8 kg</div>
                </div>
                <div className="bg-green-100 rounded-lg p-4">
                  <div className="text-green-800 font-medium mb-1 text-sm">Composted</div>
                  <div className="text-2xl font-bold">4.2 kg</div>
                </div>
                <div className="bg-amber-100 rounded-lg p-4">
                  <div className="text-amber-800 font-medium mb-1 text-sm">CO₂ Saved</div>
                  <div className="text-2xl font-bold">2.1 kg</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex items-center mb-6">
                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                <h2 className="text-xl font-bold">Add New Entry</h2>
              </div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="wasteType" className="block text-sm font-medium text-gray-700 mb-1">
                    Waste Type
                  </label>
                  <select
                    id="wasteType"
                    name="wasteType"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select type</option>
                    <option value="foodScraps">Food Scraps</option>
                    <option value="coffee">Coffee Grounds/Tea Bags</option>
                    <option value="yardWaste">Yard Waste</option>
                    <option value="other">Other Compostables</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    step="0.1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="0.0"
                  />
                </div>
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                    Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Additional details about your waste"
                  ></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Save Entry
                </Button>
              </form>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Composting Tips</h2>
              <ul className="space-y-3">
                {compostTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
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

export default WetWaste;
