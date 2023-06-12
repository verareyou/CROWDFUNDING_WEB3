import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";
// import { Colors } from "./constants";
import { useStateContext } from "./context";



const App = () => {
  const { Colors } = useStateContext();
  
  // console.log(Colors);
  
  return (
    <div
      style={{ background: Colors.primary, color: Colors.text }}
      className="relative text-white sm:-8 duration-500 p-4 min-h-screen flex flex-row "
    >
      <div className="sidebar sm:flex hidden relative mr-10 ">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5  ">
        <Navbar />

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="campaign" element={<CreateCampaign />} />
          <Route path="campaign/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
