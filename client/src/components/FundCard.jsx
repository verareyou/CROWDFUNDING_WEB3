import React from "react";
import { tagType, thirdweb, user } from "../assets";
// import { Colors } from "../constants";

import { useStateContext } from "../context";
// const { Colors } = useStateContext();

import { daysLeft } from "../utils";

const FundCard = ({
  owner,
  title,
  description,
  target,
  deadline,
  amountcollected,
  image,
  handleClick,
}) => {
  const remainingDays = daysLeft(deadline);
    const { Colors } = useStateContext();
  return (
    <div
      style={{ 
        // background: Colors.secondary,
        border: `1px solid ${Colors.lightBorder}`,
    }}
      className="sm:w-[258px] z-[1] shadow-sm w-full rounded-[15px] cursor-pointer "
      onClick={handleClick}
    >
      <img
        src={image}
        alt="fund"
        className=" w-full h-[158px] object-cover z-[20] scale-90 mt-1 rounded-[15px] "
      />

      <div className="flex flex-col p-4 ">
        <div className=" flex flex-row items-center mb-[18px] ">
          <img
            src={tagType}
            alt="tag"
            className=" w-[17px] h-[17px] object-contain "
          />
          <p
            style={{ color: Colors.lighttext }}
            className=" text-[12px] ml-[12px] mt-[2px] "
          >
            Education
          </p>
        </div>

        <div className="block">
          <h3 className=" truncate leading-[26px] text-[16px] font-semibold text-left ">
            {title}
          </h3>
          <p
            style={{ color: Colors.lighttext }}
            className=" mt-[5px] font-normal truncate leading-[18px] text-left "
          >
            {description}
          </p>
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2 ">
          <div className="flex flex-col">
            <h4
              style={{ color: Colors.lighttext }}
              className=" font-semibold text-[14px] leading-[22px] "
            >
              {amountcollected}
            </h4>
            <p className=" text-[12px] leading-[18px] sm:max-w-[120px] truncate ">
              Raised of {target}
            </p>
          </div>
          <div className="flex flex-col">
            <h4
              style={{ color: Colors.lighttext }}
              className=" font-black text-[14px] leading-[22px] "
            >
              {remainingDays}
            </h4>
            <p className=" text-[12px] leading-[18px] sm:max-w-[120px] truncate ">
              Days Left
            </p>
          </div>
        </div>

        <div className=" flex items-center mt-[20px] gap-[12px] ">
          <div style={{
            filter: 'invert(1)',
            
            background: Colors.text === '#fff' ? '#fff' : '#fff',
          }} className=" w-[30px] h-[30px] rounded-full flex justify-center items-center ">
            {/* <img src={user} alt="user" className=" object-cover " /> */}
            <svg className=" scale-125 " focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AccountCircleIcon"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"></path></svg>
          </div>
          <p
          style={{ color: Colors.lighttext }}
            className=" flex-1 font-normal text-[12px] truncate "
          >
            <span>{owner}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FundCard;
