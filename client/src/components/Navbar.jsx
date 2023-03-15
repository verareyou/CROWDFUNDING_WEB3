import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { CustomBtn } from "./";
import { logo, menu, 
  search,
   thirdweb } from "../assets";
import { navlinks } from "../constants";
import { useStateContext } from "../context";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  // const [address, setAddress] = useState("");
  const { connect, address, Colors,
     setSearch
  } = useStateContext();
  // console.log("address : " + search); 

  React.useEffect(() => {
    const url = window.location.href;
    const urlArr = url.split("/");
    const lastUrl = urlArr[urlArr.length - 1];
    const final = lastUrl === "" ? "dashboard" : lastUrl;
    setIsActive(final);
  }, [window.location.href]);
  const bc = Colors.text === "#fff" ? "#353535" : "#ddd";

  return (
    <div
      className={
        "flex sm:flex-row flex-col-reverse mb-[35px] gap-6 justify-between"
      }
    >
      <div
        style={{ background: Colors.secondary }}
        className={` lg:flex-1 flex flex-row max-w-[458px] h-[52px] rounded-[100px] pl-6 pr-3 py-2 `}
      >
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for campaigns"
          className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#575a61] bg-transparent outline-none"
        />
        <div className="h-full px-2.5 bg-[#78fda7] flex justify-center items-center rounded-full cursor-pointer duration-200 ease-in-out hover:bg-[#69df92] ">
          <img src={search} alt="search" className="w-[18px] h-[18px] " />
        </div>
      </div>
      <div className="sm:flex hidden flex-row justify-end items-center gap-4 ">
        <CustomBtn
          btnType="button"
          textColor={Colors.text=== "#fff" ? "#fff" : "#555"}
          title={address ? "Create a campaign" : "Connect Wallet"}
          css={` border: '1px solid  ${Colors.lightBorder}' `}
          styles={`
            ${address
              ? `bg-[#4acd7800] hover:bg-[#2ce16b] `
              : `bg-[#4acd7800] hover:bg-[#2ce16b] `}
          ` + 'rounded-full'}
          handleClick={() => {
            if (address) {
              navigate("campaign");
            } else {
              // console.log("hello")
              connect();
            }
          }}
        />

          <div
          style={{ background: Colors.secondary }}
          className=" h-[52px] w-[52px] rounded-full flex justify-center items-center cursor-pointer "
        >
          <img
            src={thirdweb}
            onClick={() => {
              navigate("profile");
              setIsActive("profile");
            }}
            alt="user"
            className=" w-[60%] h-[60%] object-contain "
          />
        </div>
        
      </div>
      {/* small screen navigation */}

      <div className=" sm:hidden flex justify-between items-center relative ">
        <div
          style={{ background: Colors.secondary }}
          className=" h-[52px] w-[52px] rounded-full flex justify-center items-center cursor-pointer "
        >
          <img
            src={thirdweb}
            onClick={() => {
              navigate("Profile");
              setIsActive("Profile");
            }}
            alt="user"
            className=" w-[60%] h-[60%] object-contain "
          />
        </div>
        <img
          src={menu}
          alt="menu"
          className="w-[34px] h-[34px] object-contain cursor-pointer"
          onClick={() => {
            setToggleDrawer((prev) => !prev);
          }}
        />
        <div
          style={{ background: Colors.trans, backdropFilter: "blur(8px)" }}
          className={`fixed top-[60px] right-0 left-0 shadow-sm mt-6 bottom-0 py-4 ${
            toggleDrawer
              ? "translate-y-0 "
              : `translate-y-[110vh] 
             `
          } duration-300 ease-in-out z-10 `}
        >
          <ul className="mb-4">
            {navlinks.map((link) => (
              <li
                key={link.name}
                style={{
                  background: isActive === link.name && Colors.selected + "80%",
                }}
                className={` flex p-4  `}
                onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  navigate(link.link);
                }}
              >
                <img
                  src={link.imgUrl}
                  alt={link.name}
                  className={`w-[24px] h-[24px] object-contain ${
                    isActive === link.name ? "grayscale-0" : "grayscale"
                  }`}
                />
                <p
                  className={`ml-[20px] font-epilogue font-semibold text-[14px] ${
                    isActive === link.name ? "text-[#1dc071]" : "text-[#808191]"
                  }`}
                >
                  {link.name}
                </p>
              </li>
            ))}
          </ul>

          <CustomBtn
            btnType="button"
            title={address ? "Create a campaign" : "Connect Wallet"}
            styles={`font-epilogue font-semibold text-[14px] rounded-full relative left-1/2 transform -translate-x-1/2
            ${address ? "bg-[#4acd78] " : "bg-[#4acd78] "}
          `}
            handleClick={() => {
              if (address) {
                navigate("campaign");
              } else {
                connect();
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
