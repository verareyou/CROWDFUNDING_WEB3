import React, { useContext, createContext } from "react";
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from "ethers";
import { EditionMetadataWithOwnerOutputSchema } from "@thirdweb-dev/sdk";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract('0x6239A53Ba290D948CC0d874211F98258504C8c04');
  // console.log( "contract : " + contract)
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
    const campaigns = await contract.call("getCampaigns")

    // console.log(campaigns)
    
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
    // console.log(parsedCampaigns)
    return parsedCampaigns;
  }

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        getCampaigns,
        createCampaign: publishCampaign,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
