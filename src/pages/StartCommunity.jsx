
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Image, Calendar } from "lucide-react";

const StartCommunity = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-green-600">EcoConnect Hub</div>
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-gray-600 hover:text-green-600 font-medium">Home</Link>
              <Link to="/explore" className="text-gray-600 hover:text-green-600 font-medium">Explore</Link>
              <Link to="/track" className="text-gray-600 hover:text-green-600 font-medium">Track</Link>
              <Link to="/shopping" className="text-gray-600 hover:text-green-600 font-medium">Shop</Link>
              <Link to="/community" className="text-green-600 hover:text-green-700 font-medium">Community</Link>
              <Link to="/profile" className="text-gray-600 hover:text-green-600 font-medium">Profile</Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/community" className="inline-flex items-center text-green-600 hover:text-green-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Communities
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Start a New Community</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Create a space for like-minded individuals to connect, share ideas, and take action on environmental causes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex items-center mb-8">
              <Users className="h-6 w-6 text-green-600 mr-2" />
              <h2 className="text-2xl font-bold">Community Details</h2>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="community_name" className="block text-sm font-medium text-gray-700 mb-1">
                  Community Name*
                </label>
                <input
                  id="community_name"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  placeholder="Give your community a clear, descriptive name"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description*
                </label>
                <textarea
                  id="description"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  placeholder="Describe what your community is about and what members can expect"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Community Type*
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-300 rounded-md p-4 cursor-pointer hover:border-green-500 flex items-start">
                    <input
                      type="radio"
                      id="public"
                      name="community_type"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 mt-1 mr-3"
                    />
                    <div>
                      <label htmlFor="public" className="block font-medium text-gray-700 cursor-pointer">Public</label>
                      <p className="text-sm text-gray-500">Anyone can find and join this community</p>
                    </div>
                  </div>
                  <div className="border border-gray-300 rounded-md p-4 cursor-pointer hover:border-green-500 flex items-start">
                    <input
                      type="radio"
                      id="private"
                      name="community_type"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 mt-1 mr-3"
                    />
                    <div>
                      <label htmlFor="private" className="block font-medium text-gray-700 cursor-pointer">Private</label>
                      <p className="text-sm text-gray-500">Members must be invited or approved to join</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Topics (Select up to 5)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Waste Reduction', 'Gardening', 'Renewable Energy', 'Sustainable Living', 'Recycling', 'Conservation', 'Climate Action', 'Zero Waste', 'Eco-Friendly Products', 'Food Sustainability', 'Environmental Education', 'Local Initiatives'].map(topic => (
                    <div key={topic} className="flex items-center">
                      <input
                        id={topic.replace(/\s+/g, '-').toLowerCase()}
                        type="checkbox"
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label htmlFor={topic.replace(/\s+/g, '-').toLowerCase()} className="ml-2 block text-sm text-gray-700">
                        {topic}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Community Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Image className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="guidelines" className="block text-sm font-medium text-gray-700 mb-1">
                  Community Guidelines (Optional)
                </label>
                <textarea
                  id="guidelines"
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  placeholder="Set expectations for community behavior and interaction"
                ></textarea>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Optional Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Location (Optional)
                    </label>
                    <input
                      id="location"
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      placeholder="City, Country or Online"
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      If your community has a physical presence or focuses on a specific area
                    </p>
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                      Website or Social Media (Optional)
                    </label>
                    <input
                      id="website"
                      type="url"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      placeholder="https://example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start pt-4">
                <input
                  id="agree_terms"
                  name="agree_terms"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="agree_terms" className="ml-2 block text-sm text-gray-700">
                  I agree to the Community Guidelines and Terms of Service, and confirm this community does not violate any laws or promote harmful activities.
                </label>
              </div>

              <div className="flex justify-center pt-4">
                <Button className="px-8 py-2 bg-green-600 hover:bg-green-700 text-lg">
                  Create Community
                </Button>
              </div>
            </form>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-lg font-medium text-green-800 mb-4">Tips for Creating a Successful Community</h3>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-start">
                <div className="h-5 w-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                </div>
                <span>Be clear about your community's purpose and goals</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                </div>
                <span>Establish simple, positive guidelines for interaction</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                </div>
                <span>Plan a few initial activities or discussions to get started</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                </div>
                <span>Be responsive to new members and encourage participation</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>&copy; 2025 EcoConnect Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StartCommunity;
