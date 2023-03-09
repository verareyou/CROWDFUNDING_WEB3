import React, { useContext, createContext } from "react";
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from "ethers";
import { EditionMetadataWithOwnerOutputSchema } from "@thirdweb-dev/sdk";

import { light, dark } from "../constants";



const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  
  // theme state
  let [theme, setTheme] = React.useState(dark);

  let changeTheme = () => {
    theme === dark ? setTheme(light) : setTheme(dark);
  };

  let Colors = {
    primary: theme.primary,
    secondary: theme.secondary,
    selected: theme.selected,
    hover: theme.hover,
    white: theme.white,
    black: theme.black,
    gray: theme.gray,
    lightGray: theme.lightGray,
    text: theme.text,
    lighttext: theme.lighttext,
    insec: theme.insec,
  };

  const { contract } = useContract('0x6239A53Ba290D948CC0d874211F98258504C8c04');

  if (!contract) {
    console.log("no contract")
  }

  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );

  const connect =  useMetamask();
  const address = useAddress();

  const publishCampaign = async (form) => {
    try {
      const data = await createCampaign([
        address,
        form.title,
        form.description,
        form.target,
        new Date(form.deadline).getTime(),
        form.image,
      ]);
      console.log("successfully called contract" + data);
    } catch (error) {
      console.log("failed to call contract here" + error);
    }
  };

  const getCampaigns = async () => {
    try {
      console.log( "getting campaigns")
      const campaigns = await contract.call("getCampaigns")
  
      // console.log("cam"+campaigns)
      
      const parsedCampaigns = campaigns.map((campaign, i) =>({
        owner: campaign.owner,
        title: campaign.title,
        description: campaign.description,
        target: ethers.utils.formatEther(campaign.target.toString()),
        deadline: campaign.deadline.toNumber(),
        amountcollected: ethers.utils.formatEther(campaign.amountcollected.toString()),
        image: campaign.image,
        pId: i,
      }))
      return parsedCampaigns;
      
    } catch (error) {
      console.log("failed to call contract here" + error);
    }
  }

  const getUserCampaigns = async () => {
    const allCampaigns = await getCampaigns();
    const userCampaigns = allCampaigns.filter((campaign) => campaign.owner === address);
    return userCampaigns;
  }

  return (
    <StateContext.Provider
      value={{
        Colors,
        changeTheme,
        address,
        contract,
        connect,
        getCampaigns,
        getUserCampaigns,
        createCampaign: publishCampaign,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
