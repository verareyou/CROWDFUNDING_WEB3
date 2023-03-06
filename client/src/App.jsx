import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";
import { Colors } from "./constants";

const App = () => {
  return (
    <div style={{background: Colors.primary}} className="relative text-white sm:-8 p-4 min-h-screen flex flex-row ">
      <div className="sidebar sm:flex hidden relative mr-10 ">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5  ">
        <Navbar />

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="create-campaign" element={<CreateCampaign />} />
          <Route path="campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
