
import { Link } from "react-router-dom";
import { Search, User } from "lucide-react";

const Navbar = () => (
  <nav className="w-full bg-green-300 border-b border-green-400 px-4 py-2 flex items-center justify-between">
    <div className="flex flex-col">
      <div className="text-lg font-bold text-black tracking-tight">Ecotrack</div>
      <span className="text-xs text-gray-800 font-medium leading-none">
        Empowering You to Track<br />and Protect <span className="text-green-700 font-bold">Nature</span>
      </span>
    </div>
    <ul className="flex-1 flex items-center justify-center gap-4 mx-10">
      <li><Link to="/" className="font-bold text-green-900 border-b-2 border-green-900 pb-1">HOME</Link></li>
      <li><Link to="/explore" className="font-bold text-green-900 hover:underline">EXPLORE</Link></li>
      <li><Link to="/track" className="font-bold text-green-900 hover:underline">TRACK</Link></li>
      <li><Link to="/identify" className="font-bold text-green-900 hover:underline">IDENTIFY</Link></li>
      <li><Link to="/shopping" className="font-bold text-green-900 hover:underline">Shopping</Link></li>
      <li><Link to="/community" className="font-bold text-green-900 hover:underline">COMMUNITY</Link></li>
      <li><Link to="/profile" className="font-bold text-green-900 hover:underline">PROFILE</Link></li>
    </ul>
    <div className="flex items-center gap-3">
      <div className="bg-white px-2 py-1 rounded flex items-center gap-1">
        <Search className="h-4 w-4 text-gray-600" />
        <input className="outline-none border-none bg-transparent text-sm" placeholder="SEARCH" />
      </div>
      <Link to="/profile" title="Profile">
        <img 
          src="/lovable-uploads/67076f3c-666f-486c-8723-73cc2662db4f.png"
          className="w-8 h-8 rounded-full border-2 border-yellow-300 object-cover"
          alt="Profile"
        />
      </Link>
      <Link to="/login" className="ml-2 text-green-900 font-medium hover:underline">Signin</Link>
      <Link to="/signup" className="ml-1 text-green-900 font-medium hover:underline">Signup</Link>
    </div>
  </nav>
);

const HomeCard = ({ children, className }) => (
  <div className={`rounded-2xl bg-gray-100 border border-gray-300 p-4 shadow-sm ${className}`}>
    {children}
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      {/* User greeting and events section */}
      <div className="container mx-auto py-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {/* Profile and greeting */}
          <HomeCard className="md:col-span-2 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-2">
              <img
                src="/lovable-uploads/67076f3c-666f-486c-8723-73cc2662db4f.png"
                className="w-10 h-10 rounded-full border-2 border-yellow-300 object-cover"
                alt="User"
              />
              <span className="font-bold text-lg">Hi Vijay Good Morning</span>
            </div>
            <div className="text-gray-700 text-sm">
              Today you are the Coordinator for the beach clean-up drive.
              <div className="flex items-center gap-1 mt-1">
                <span>🌤️</span>
                <span className="font-medium">Today is a good climate for cleaning</span>
              </div>
            </div>
          </HomeCard>
          {/* Events */}
          <HomeCard className="md:col-span-2 flex flex-col justify-center items-center">
            <div className="text-lg font-semibold mb-2">Events</div>
            <div className="w-full bg-gray-200 rounded-xl py-2 px-3 mb-1 font-medium">
              Today: Beach Cleaning
            </div>
            <div className="w-full bg-gray-200 rounded-xl py-2 px-3 font-medium">
              Next: Forest Cleaning
            </div>
          </HomeCard>
        </div>

        {/* Middle section for scheduling, time, notifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          {/* Schedule event */}
          <HomeCard className="flex flex-col md:items-center">
            <div className="font-semibold mb-2">Schedule an events for the community</div>
            <input placeholder="Name" className="rounded px-2 py-1 border mb-2 w-full md:w-3/4" />
            <input placeholder="Location" className="rounded px-2 py-1 border mb-3 w-full md:w-3/4" />
            <button className="px-4 py-1 rounded-full bg-green-300 text-green-800 font-semibold border border-green-500 hover:bg-green-500 hover:text-white transition w-fit mx-auto">
              Add
            </button>
          </HomeCard>
          {/* Time schedule */}
          <HomeCard className="flex flex-col items-center">
            <div className="font-semibold mb-2">Time Schedule</div>
            <div className="flex items-end space-x-1">
              <span className="block text-5xl font-mono font-semibold">10</span>
              <span className="block text-xl">:</span>
              <span className="block text-5xl font-mono font-semibold">10</span>
              <span className="block mb-2 ml-2 text-xs font-bold">AM</span>
              <span className="block mb-2 text-xs font-bold text-gray-400">PM</span>
            </div>
            <div className="my-1 flex items-center gap-2">
              <span className="py-1 px-2 bg-gray-200 rounded text-sm font-mono tracking-wide">25/05/2024</span>
              <span className="inline-flex rounded bg-gray-100 px-2 py-1 border">
                <Search className="w-4 h-4 text-gray-400" />
              </span>
            </div>
            <button className="bg-black hover:bg-gray-900 text-white px-4 py-1 rounded-full font-semibold mt-2">Schedule</button>
          </HomeCard>
          {/* Notifications */}
          <HomeCard className="">
            <div className="font-semibold mb-2 flex items-center justify-between">
              <span>Notifications from the community and personal</span>
              <span className="bg-white border rounded-full p-1">
                <User size={16} className="text-gray-600" />
              </span>
            </div>
            <ul className="text-xs font-mono text-gray-700 mt-2">
              <li>
                <b>Asrfsfs</b><br />
                Today beach cleaning day come fast
              </li>
              <li className="mt-2">
                <b>vsus Bank</b><br />
                You received 200 from fsd waste center
              </li>
            </ul>
          </HomeCard>
        </div>

        {/* News and cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <HomeCard>
            <div className="font-semibold mb-2">News from community</div>
            <img
              src="/lovable-uploads/dfd80be3-5ceb-4dbb-b3da-2120d366f69d.png"
              alt="News"
              className="w-full h-28 object-cover rounded mb-2"
            />
            <div className="text-xs text-gray-700">Latest update on community waste efforts.</div>
          </HomeCard>
          <HomeCard>
            <div className="font-semibold mb-2">Contributions on waste disposal</div>
            <img
              src="/lovable-uploads/99a25e4e-000a-44d9-a0b3-365417d1240f.png"
              alt="Contribution"
              className="w-full h-28 object-cover rounded mb-2"
            />
            <div className="text-xs text-gray-700">Find out how to contribute and participate in campaigns!</div>
          </HomeCard>
          <HomeCard>
            <div className="font-semibold mb-2">Shoppings from Wealth from Waste</div>
            <img
              src="/lovable-uploads/24093505-5cec-4c77-ac5f-c0fc9fc4a0f9.png"
              alt="Shopping"
              className="w-full h-28 object-cover rounded mb-2"
            />
            <div className="text-xs text-gray-700">Buy eco-products made from waste material.</div>
          </HomeCard>
          <HomeCard>
            <div className="font-semibold mb-2">Nearby recycle centers</div>
            <img
              src="/lovable-uploads/c5e03f53-84bf-45b9-8008-7e2def08131a.png"
              alt="Recycle Center"
              className="w-full h-28 object-cover rounded mb-2"
            />
            <div className="text-xs text-gray-700">Locate facilities and drop-off points easily.</div>
          </HomeCard>
        </div>
      </div>
    </div>
  );
};

export default Index;
