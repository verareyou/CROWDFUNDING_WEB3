import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CustomBtn } from "./";
import { logo, menu, search, thirdweb } from "../assets";
import { Colors, navlinks } from "../constants";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [toogleDrawer, setToogleDrawer] = useState(false);
  const [address, setAddress] = useState("");

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6 ">
      <div
        style={{ background: Colors.secondary }}
        className={` lg:flex-1 flex flex-row max-w-[458px] h-[52px] rounded-[100px] pl-6 pr-3 py-2 `}
      >
        <input
          type="text"
          placeholder="Search for campaigns"
          className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#575a61] text-white bg-transparent outline-none"
        />
        <div className="h-full px-2.5 bg-[#4acd78] flex justify-center items-center rounded-full cursor-pointer duration-200 ease-in-out hover:bg-[#2ce16b] ">
          <img src={search} alt="search" className="w-[18px] h-[18px] " />
        </div>
      </div>
      <div className="sm:flex hidden flex-row justify-end gap-4 ">
        <CustomBtn
          btnType="button"
          title={address ? "Create a campaign" : "Connect Wallet"}
          styles={
            address
              ? "bg-[#4acd78] hover:bg-[#2ce16b] "
              : "bg-[#4acd78] hover:bg-[#2ce16b] "
          }
          handleClick={() => {
            if (address) {
              navigate("create-campaign");
            } else {
              ("connectWallet()");
            }
          }}
        />
        <Link>
          <div
            style={{ background: Colors.secondary }}
            className=" h-[52px] w-[52px] rounded-full flex justify-center items-center cursor-pointer "
          >
            <img
              src={thirdweb}
              alt="user"
              className=" w-[60%] h-[60%] object-contain "
            />
          </div>
        </Link>
      </div>
      {/* small screen navigation */}
    </div>
  );
};

export default Navbar;
