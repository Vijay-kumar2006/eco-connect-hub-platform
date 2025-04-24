import React from 'react';
import MainNavbar from '../components/MainNavbar';
import PageNavigation from '../components/PageNavigation';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Users, ArrowRight, Calendar, MapPin, Heart } from "lucide-react";

const Community = () => {
  const communities = [
    {
      id: 1,
      name: "Zero Waste Living",
      members: 1254,
      description: "A community dedicated to reducing waste through lifestyle changes and sustainable practices.",
      image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topics: ["Waste Reduction", "DIY", "Lifestyle"]
    },
    {
      id: 2,
      name: "Urban Gardeners",
      members: 876,
      description: "Growing food and plants in urban environments using sustainable methods and space-saving techniques.",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topics: ["Gardening", "Food", "Urban Living"]
    },
    {
      id: 3,
      name: "Eco-Conscious Parents",
      members: 623,
      description: "Parents sharing tips and experiences raising environmentally conscious children in today's world.",
      image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topics: ["Parenting", "Education", "Lifestyle"]
    },
    {
      id: 4,
      name: "Renewable Energy Advocates",
      members: 492,
      description: "Discussing and promoting renewable energy solutions for homes, communities, and beyond.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topics: ["Energy", "Technology", "Policy"]
    }
  ];

  const events = [
    {
      id: 1,
      title: "Beach Cleanup Day",
      date: "May 15, 2025",
      time: "9:00 AM - 1:00 PM",
      location: "Ocean Beach Park",
      attendees: 45,
      image: "https://images.unsplash.com/photo-1618477462146-aa33b08bb07f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Sustainable Living Workshop",
      date: "May 22, 2025",
      time: "6:30 PM - 8:30 PM",
      location: "Community Center",
      attendees: 28,
      image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Community Garden Planting",
      date: "June 5, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Green Valley Gardens",
      attendees: 36,
      image: "https://images.unsplash.com/photo-1540340061722-9293d5163008?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <MainNavbar />
      <PageNavigation />
      
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Connect with Eco-Minded People</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join communities of like-minded individuals who are passionate about sustainability and making a positive impact on our planet.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/community/start">
              <Button className="bg-white text-green-700 hover:bg-gray-100 py-2 px-6 text-lg">
                Start a Community
              </Button>
            </Link>
            <Link to="/community/join">
              <Button className="bg-transparent border-2 border-white hover:bg-white/10 py-2 px-6 text-lg">
                Join a Community
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Popular Communities</h2>
            <Link to="/community/join" className="text-green-600 hover:text-green-700 flex items-center">
              View all
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-3 text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{community.members} members</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{community.description}</p>
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
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
            <a href="#" className="text-green-600 hover:text-green-700 flex items-center">
              View all
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map(event => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-3 right-3 h-8 w-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100">
                    <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                  <div className="flex items-start mb-2">
                    <Calendar className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <div className="text-sm">{event.date}</div>
                      <div className="text-xs text-gray-500">{event.time}</div>
                    </div>
                  </div>
                  <div className="flex items-start mb-4">
                    <MapPin className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <div className="text-sm">{event.location}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">{event.attendees} attending</div>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Join
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Why Join Our Community?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-green-600 font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Connect with Like-minded People</h3>
                    <p className="text-gray-600">Meet others who share your passion for sustainability and environmental conservation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-green-600 font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Learn and Share Knowledge</h3>
                    <p className="text-gray-600">Exchange ideas, tips, and experiences to grow your sustainable living practices.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-green-600 font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Make a Collective Impact</h3>
                    <p className="text-gray-600">Participate in community events and initiatives that create meaningful environmental change.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e7c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Community gathering" 
                className="rounded-lg w-full h-64 object-cover"
              />
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

export default Community;
