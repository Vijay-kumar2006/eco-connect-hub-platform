
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { User, Edit, Settings, BarChart, Calendar, ShoppingCart, Heart, Users } from "lucide-react";

const Profile = () => {
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
              <Link to="/community" className="text-gray-600 hover:text-green-600 font-medium">Community</Link>
              <Link to="/profile" className="text-green-600 hover:text-green-700 font-medium">Profile</Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="h-40 bg-gradient-to-r from-green-600 to-blue-600"></div>
            <div className="p-6 md:p-8 relative">
              <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
                <div className="absolute -top-16 border-4 border-white rounded-full overflow-hidden">
                  <img
                    src="https://randomuser.me/api/portraits/women/42.jpg"
                    alt="Profile"
                    className="h-32 w-32 object-cover"
                  />
                </div>
                <div className="mt-16 md:mt-0 md:ml-36">
                  <h1 className="text-2xl font-bold text-gray-800">Emily Johnson</h1>
                  <p className="text-gray-600">Eco Enthusiast | Sustainable Living Advocate</p>
                </div>
                <div className="md:ml-auto flex gap-3">
                  <Button variant="outline" className="flex items-center">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" className="flex items-center">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h2 className="text-lg font-semibold mb-4">About Me</h2>
                <p className="text-gray-600 mb-4">
                  Passionate about environmental conservation and sustainable living. I'm on a journey to reduce my carbon footprint and inspire others to do the same.
                </p>
                <div className="border-t pt-4">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600">Joined January 2025</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600">Member of 3 communities</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h2 className="text-lg font-semibold mb-4">My Impact Stats</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">Waste Reduction</span>
                      <span className="text-sm font-medium text-green-600">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">Energy Conservation</span>
                      <span className="text-sm font-medium text-green-600">62%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '62%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">Sustainable Shopping</span>
                      <span className="text-sm font-medium text-green-600">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">Water Conservation</span>
                      <span className="text-sm font-medium text-green-600">58%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '58%' }}></div>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-4 flex items-center justify-center">
                  <BarChart className="mr-2 h-4 w-4" />
                  View Detailed Analytics
                </Button>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">My Communities</h2>
                <div className="space-y-4">
                  {[
                    { name: "Zero Waste Living", members: 1254, image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" },
                    { name: "Sustainable Fashion", members: 512, image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" },
                    { name: "Urban Gardeners", members: 876, image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" }
                  ].map((community, index) => (
                    <div key={index} className="flex items-center p-2 hover:bg-gray-50 rounded-lg">
                      <img
                        src={community.image}
                        alt={community.name}
                        className="h-10 w-10 rounded-full mr-3 object-cover"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900">{community.name}</h3>
                        <p className="text-xs text-gray-500">{community.members} members</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t mt-4 pt-4">
                  <Link to="/community">
                    <Button variant="link" className="w-full text-green-600 hover:text-green-700">
                      Browse More Communities
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">My Waste Tracking</h2>
                  <Link to="/track">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-gray-500 text-sm mb-1">This Month</div>
                    <div className="text-2xl font-bold">18.3 kg</div>
                    <div className="text-green-600 text-sm">↓ 15% from last month</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-blue-500 text-sm mb-1">Wet Waste</div>
                    <div className="text-2xl font-bold">7.2 kg</div>
                    <div className="text-green-600 text-sm">39% of total</div>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4">
                    <div className="text-amber-500 text-sm mb-1">Dry Waste</div>
                    <div className="text-2xl font-bold">11.1 kg</div>
                    <div className="text-green-600 text-sm">61% of total</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-green-500 text-sm mb-1">CO₂ Saved</div>
                    <div className="text-2xl font-bold">7.5 kg</div>
                    <div className="text-green-600 text-sm">Through recycling</div>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="h-48 flex items-center justify-center">
                    <p className="text-gray-500 text-center">Waste tracking trend chart would appear here</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Saved Items</h2>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-4 p-3 border rounded-lg hover:bg-gray-50">
                    <img
                      src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80"
                      alt="Product"
                      className="h-16 w-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">Stainless Steel Water Bottle</h3>
                      <p className="text-gray-500 text-sm">$24.99</p>
                      <div className="flex gap-2 mt-2">
                        <Button size="sm" variant="outline" className="h-8 px-2 py-0">
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="h-8 px-2 py-0 text-red-500 border-red-200">
                          <Heart className="h-4 w-4 fill-current" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 p-3 border rounded-lg hover:bg-gray-50">
                    <img
                      src="https://images.unsplash.com/photo-1605600659873-d808a13e4d9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80"
                      alt="Product"
                      className="h-16 w-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">Bamboo Toothbrush Set</h3>
                      <p className="text-gray-500 text-sm">$12.99</p>
                      <div className="flex gap-2 mt-2">
                        <Button size="sm" variant="outline" className="h-8 px-2 py-0">
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="h-8 px-2 py-0 text-red-500 border-red-200">
                          <Heart className="h-4 w-4 fill-current" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Recent Activity</h2>
                </div>
                <div className="space-y-4">
                  {[
                    { type: 'waste', text: 'Recorded 1.2kg of wet waste', time: '2 hours ago', icon: <BarChart className="h-5 w-5 text-blue-500" /> },
                    { type: 'community', text: 'Joined the "Zero Waste Living" community', time: 'Yesterday', icon: <Users className="h-5 w-5 text-green-500" /> },
                    { type: 'shop', text: 'Purchased Reusable Produce Bags', time: '3 days ago', icon: <ShoppingCart className="h-5 w-5 text-amber-500" /> },
                    { type: 'waste', text: 'Recorded 0.8kg of dry waste', time: '5 days ago', icon: <BarChart className="h-5 w-5 text-amber-500" /> }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start p-3 hover:bg-gray-50 rounded-lg">
                      <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                        {activity.icon}
                      </div>
                      <div>
                        <p className="text-gray-800">{activity.text}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
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

export default Profile;
