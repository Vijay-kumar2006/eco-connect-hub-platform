import React from 'react';
import MainNavbar from '../components/MainNavbar';
import PageNavigation from '../components/PageNavigation';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Search, MapPin, Filter } from "lucide-react";

const JoinCommunity = () => {
  const communities = [
    {
      id: 1,
      name: "Zero Waste Living",
      members: 1254,
      description: "A community dedicated to reducing waste through lifestyle changes and sustainable practices.",
      image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topics: ["Waste Reduction", "DIY", "Lifestyle"],
      location: "Global",
      popular: true
    },
    {
      id: 2,
      name: "Urban Gardeners",
      members: 876,
      description: "Growing food and plants in urban environments using sustainable methods and space-saving techniques.",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topics: ["Gardening", "Food", "Urban Living"],
      location: "New York, USA",
      popular: true
    },
    {
      id: 3,
      name: "Eco-Conscious Parents",
      members: 623,
      description: "Parents sharing tips and experiences raising environmentally conscious children in today's world.",
      image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topics: ["Parenting", "Education", "Lifestyle"],
      location: "Global",
      popular: false
    },
    {
      id: 4,
      name: "Renewable Energy Advocates",
      members: 492,
      description: "Discussing and promoting renewable energy solutions for homes, communities, and beyond.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topics: ["Energy", "Technology", "Policy"],
      location: "Global",
      popular: false
    },
    {
      id: 5,
      name: "Plastic-Free Movement",
      members: 782,
      description: "Dedicated to eliminating single-use plastics and finding sustainable alternatives in everyday life.",
      image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topics: ["Plastic Pollution", "Lifestyle", "Oceans"],
      location: "Global",
      popular: true
    },
    {
      id: 6,
      name: "Local Food Systems",
      members: 438,
      description: "Building resilient local food networks through farmers markets, CSAs, and community gardens.",
      image: "https://images.unsplash.com/photo-1506484381205-f7945653044d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topics: ["Food", "Farming", "Community"],
      location: "Portland, USA",
      popular: false
    },
    {
      id: 7,
      name: "Sustainable Fashion",
      members: 512,
      description: "Exploring ethical, eco-friendly clothing options and promoting responsible consumption.",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topics: ["Fashion", "Textiles", "Ethics"],
      location: "Global",
      popular: false
    },
    {
      id: 8,
      name: "Climate Action Network",
      members: 1347,
      description: "Organizing advocacy efforts and education around climate change solutions and policy.",
      image: "https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topics: ["Climate Change", "Activism", "Policy"],
      location: "Global",
      popular: true
    }
  ];

  const topics = [
    { name: "Waste Reduction", count: 15 },
    { name: "Gardening", count: 8 },
    { name: "Energy", count: 12 },
    { name: "Sustainable Living", count: 24 },
    { name: "Food", count: 14 },
    { name: "Climate Change", count: 18 },
    { name: "Conservation", count: 9 },
    { name: "Recycling", count: 11 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <MainNavbar />
      <PageNavigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/community" className="inline-flex items-center text-green-600 hover:text-green-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Communities
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Join a Community</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find and connect with communities that share your environmental interests and values.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search communities..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-3">Filter by Topic</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                  {topics.map(topic => (
                    <div key={topic.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id={topic.name.replace(/\s+/g, '-').toLowerCase()}
                          type="checkbox"
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <label htmlFor={topic.name.replace(/\s+/g, '-').toLowerCase()} className="ml-2 block text-sm text-gray-700">
                          {topic.name}
                        </label>
                      </div>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {topic.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-3">Location</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter location"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  />
                  <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <div className="mt-2 flex items-center">
                  <input
                    id="global-only"
                    type="checkbox"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor="global-only" className="ml-2 block text-sm text-gray-700">
                    Show global communities only
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-3">Community Size</h3>
                <div className="space-y-2">
                  {['Any size', 'Small (< 100 members)', 'Medium (100-500 members)', 'Large (500+ members)'].map((size, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        id={`size-${index}`}
                        type="radio"
                        name="community-size"
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                        defaultChecked={index === 0}
                      />
                      <label htmlFor={`size-${index}`} className="ml-2 block text-sm text-gray-700">
                        {size}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700">
                <Filter className="mr-2 h-4 w-4" />
                Apply Filters
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-3/4">
            <div className="mb-8 flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full flex items-center">
                Popular
                <button className="ml-2 focus:outline-none">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
              <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                Clear All Filters
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {communities.map(community => (
                <div key={community.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img
                      src={community.image}
                      alt={community.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                      <h3 className="text-white font-bold text-xl">{community.name}</h3>
                    </div>
                    {community.popular && (
                      <div className="absolute top-0 right-0 bg-green-600 text-white text-xs px-2 py-1">
                        Popular
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-2 text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{community.members} members</span>
                      {community.location && (
                        <>
                          <span className="mx-2">•</span>
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{community.location}</span>
                        </>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{community.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {community.topics.map(topic => (
                        <span key={topic} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Join Community
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-green-600 text-white rounded-md">1</button>
                <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100">2</button>
                <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100">3</button>
                <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100">Next</button>
              </div>
            </div>
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

export default JoinCommunity;
