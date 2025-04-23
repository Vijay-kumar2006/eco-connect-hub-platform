
import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import IdentifyNavbar from "../components/IdentifyNavbar";

const NAV = [
  { to: "/", label: "HOME" },
  { to: "/explore", label: "EXPLORE", active: true },
  { to: "/track", label: "TRACK" },
  { to: "/identify", label: "IDENTIFY" },
  { to: "/shopping", label: "Shopping" },
  { to: "/community", label: "COMMUNITY" },
  { to: "/profile", label: "PROFILE" },
];

const Explore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100 pb-16">
      {/* Use consistent navbar */}
      <IdentifyNavbar />

      {/* Main Explore Content */}
      <main className="max-w-6xl mx-auto mt-10">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-green-900 mb-4 text-center tracking-tight">Explore</h1>
        <p className="text-center text-gray-700 text-lg mb-10">
          Stay up-to-date with the latest eco news, educational resources, and real-life success stories curated for our community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Left column */}
          <div>
            {/* Latest Eco News */}
            <div className="rounded-3xl bg-gradient-to-tr from-green-100 via-white to-green-200 shadow-xl p-6 mb-8 hover:scale-105 transition-transform duration-200">
              <h2 className="text-xl font-bold mb-3 text-green-900">Latest Eco-Friendly News & Trends</h2>
              <div className="flex flex-wrap gap-4 justify-start items-center">
                <div>
                  <div className="text-gray-800 font-medium mb-1">The Impact of Recycling on the Environment</div>
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/013/743/964/small/recycle-sign-symbol-icon-illustration-free-vector.jpg"
                    alt="Impact of Recycling"
                    className="rounded-md h-20 w-auto shadow"
                  />
                </div>
                <div>
                  <div className="text-gray-800 font-medium mb-1">10 Easy Ways to Live a More Sustainable Lifestyle</div>
                  <img
                    src="https://img.freepik.com/free-vector/environmental-impact-recycling-infographics_23-2148825053.jpg"
                    alt="Sustainable Lifestyle"
                    className="rounded-md h-20 w-auto shadow"
                  />
                </div>
                <div>
                  <img
                    src="https://www.gpminstitute.com/uploads/recycle%20tips.jpg"
                    alt="10 Reasons to Recycle"
                    className="rounded-md h-20 w-auto shadow"
                  />
                </div>
              </div>
            </div>
            {/* Success Stories */}
            <div className="rounded-3xl bg-gradient-to-tr from-green-100 via-green-50 to-yellow-50 shadow-xl p-6 hover:scale-105 transition-transform duration-200">
              <h2 className="text-xl font-bold mb-2 text-green-900">Success Stories & Community Highlights</h2>
              <p className="text-gray-800 mb-3">
                A person from India has created an idea: fuel from waste and old cooking oils and earned lakhs.
              </p>
              <img
                src="https://media.istockphoto.com/id/957346498/photo/project-teambuilding-wealth-from-waste.jpg?s=612x612&w=0&k=20&c=qBbX3WRXNKOWwD8p6jHLKmOqD47_PsvNhacZT84ZwWs="
                alt="Wealth from Waste"
                className="rounded-md h-24 w-auto mx-auto shadow"
              />
            </div>
          </div>

          {/* Right column */}
          <div>
            <div className="rounded-3xl bg-gradient-to-tr from-yellow-100 via-white to-green-100 shadow-xl p-6 hover:scale-105 transition-transform duration-200">
              <h2 className="text-xl font-bold mb-3 text-green-900">Educational Resources & Guides</h2>
              <div className="flex flex-wrap gap-4">
                <div>
                  <div className="text-gray-800 font-medium mb-1">Gold from old mobile and electronic devices</div>
                  <img
                    src="/lovable-uploads/d1224fed-7269-4a07-bb0f-28613c7cbeb7.png"
                    alt="Gold from electronics"
                    className="rounded-md h-16 w-auto shadow"
                  />
                </div>
                <div>
                  <div className="text-gray-800 font-medium mb-1">Tips for reducing waste at home</div>
                  <img
                    src="https://i.ytimg.com/vi/mDa38Jk1JFc/maxresdefault.jpg"
                    alt="Tips for reducing waste"
                    className="rounded-md h-16 w-auto shadow"
                  />
                </div>
                <div>
                  <div className="text-gray-800 font-medium mb-1">Ways to Reduce Waste at Home</div>
                  <img
                    src="https://earth911.com/wp-content/uploads/2017/12/ways-to-reduce-waste-earth911.jpg"
                    alt="Ways to Reduce Waste"
                    className="rounded-md h-16 w-auto shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Links section */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link
            to="/track"
            className="px-6 py-3 bg-gradient-to-r from-lime-300 via-green-300 to-teal-300 text-green-900 font-bold rounded-full shadow hover:scale-105 transition-transform"
          >
            Go to Track Page
          </Link>
          <Link
            to="/community"
            className="px-6 py-3 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 text-yellow-900 font-bold rounded-full shadow hover:scale-105 transition-transform"
          >
            Join the Community
          </Link>
          <Link
            to="/shopping"
            className="px-6 py-3 bg-gradient-to-r from-pink-100 via-red-200 to-yellow-100 text-pink-800 font-bold rounded-full shadow hover:scale-105 transition-transform"
          >
            Eco Shopping
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Explore;
