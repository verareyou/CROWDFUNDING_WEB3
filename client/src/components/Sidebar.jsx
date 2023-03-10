import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { logo, sun } from "../assets";
import { navlinks } from "../constants";
import { useStateContext } from "../context";
// const { Colors } = useStateContext();

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => {
  const { Colors } = useStateContext();
  const insec=Colors.insec;
  return (
    <div
      style={{
        background: isActive && isActive === name && `${Colors.selected}`,
      }}
      className={` w-[48px] h-[48px] rounded-full flex justify-center items-center ${
        !disabled && `${ Colors.text === "#fff" ? "hover:bg-[#20282c]" : "hover:bg-[#ccc]" } cursor-pointer duration-150 `
      } ${styles} `}
      onClick={handleClick}
    >
      {!isActive ? (
        <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
      ) : (
        <img
          src={imgUrl}
          alt="fund_logo"
          className={`w-1/2 h-1/2 ${isActive !== name && "grayscale "} `}
        />
      )}
    </div>
  );
};

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");

  const { changeTheme } = useStateContext();
  const { Colors } = useStateContext();

  React.useEffect(() => {
    const url = window.location.href;
    const urlArr = url.split("/");
    const lastUrl = urlArr[urlArr.length - 1];
    const final = lastUrl === "" ? "dashboard" : lastUrl;
    console.log(final);
    setIsActive(final);
  }, [window.location.href]);

  return (
    <div className="flex flex-col justify-center items-center sticky top-5 h-[93vh] ">
      <Link to="/">
        <Icon
          styles={` w-[52px] h-[52px] ${
            Colors.text === "#fff" ? "bg-[#20282c]" : "bg-[#f2f2f2]"
          } duration-200 ${
            Colors.text === "#000" ? "hover:bg-[#000]" : "hover:bg-[#fff]"
          }  `}
          imgUrl={logo}
        />
      </Link>

      <div
        style={{
          background: Colors.secondary,
        }}
        className=" flex-1 relative mt-5 flex flex-col justify-between items-center rounded-[40px] p-3 "
      >
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              styles={`${
                link.disabled &&
                
                "hidden"
              }`}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                  // console.log(link.link);
                }
              }}
            />
          ))}
        </div>
        <Icon
          imgUrl={sun}
          handleClick={() => changeTheme()}
         
        />
      </div>
    </div>
  );
};

export default Sidebar;
