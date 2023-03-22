import React from "react";
import { loader } from "../assets";
import { useNavigate } from "react-router-dom";
import FundCard from "./FundCard";
import { daysLeft } from "../utils";

const DisplayCampaigns = ({ isLoading, title, campaigns }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    // navigate(`/campaign`);
    navigate(`/campaign/${campaign.title}`, { state: campaign });
  };
  return (
    <div>
      <h1 className="text-[18px] text-left ">
        {title} ({campaigns.length})
      </h1>
      <div className=" flex flex-wrap mt-[20px] gap-[26px] ">
        {(
          <div className={" absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 h-1/3 w-1/3 flex items-center justify-center "
          +`${isLoading ? "opacity-[1] flex" :( "opacity-[0] " + `${setTimeout(() => "hidden" , 400)}`) } duration-300`
        }
          >
            <img
              src={loader}
              alt="loader"
              className=" w-[100px] h-[100px] object-contain "
            />
          </div>
        )}

        {!isLoading && campaigns.length === 0 && (
          <h1 className="text-[18px] text-left ">No Campaigns</h1>
        )}

        {!isLoading &&
          campaigns.length > 0 &&
          campaigns.map((campaign) => (
            // daysLeft(campaign.deadline) > 0 &&
             (
            <FundCard
              key={campaign.pId}
              {...campaign}
              handleClick={() => {
                handleNavigate(campaign);
              }}
            />
            )
          ))}
      </div>
    </div>
  );
};

export default DisplayCampaigns;
