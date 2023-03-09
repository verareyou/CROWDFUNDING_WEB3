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
        background: Colors.secondary,
    }}
      className="sm:w-[258px] z-[1] shadow-sm w-full rounded-[15px] cursor-pointer "
      onClick={handleClick}
    >
      <img
        src={image}
        alt="fund"
        className=" w-full h-[158px] object-cover z-[20] rounded-[15px] "
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
          <div className=" w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#ffffff] ">
            <img src={user} alt="" className=" object-cover " />
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
