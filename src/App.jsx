import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Explore from "./pages/Explore";
import Track from "./pages/Track";
import WetWaste from "./pages/WetWaste";
import DryWaste from "./pages/DryWaste";
import Shopping from "./pages/Shopping";
import Community from "./pages/Community";
import StartCommunity from "./pages/StartCommunity";
import JoinCommunity from "./pages/JoinCommunity";
import Profile from "./pages/Profile";
import Identify from "./pages/Identify";
import NotFound from "./pages/NotFound";
import IdentifyNavbar from "./components/IdentifyNavbar";
import IdentifyWet from "./pages/IdentifyWet";
import IdentifyDry from "./pages/IdentifyDry";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <IdentifyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/track" element={<Track />} />
          <Route path="/track/wet" element={<WetWaste />} />
          <Route path="/track/dry" element={<DryWaste />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/start" element={<StartCommunity />} />
          <Route path="/community/join" element={<JoinCommunity />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/identify" element={<Identify />} />
          <Route path="/identify/wet" element={<IdentifyWet />} />
          <Route path="/identify/dry" element={<IdentifyDry />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
