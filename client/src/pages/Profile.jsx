import React, {useState, useEffect} from 'react'

import { useStateContext } from '../context'
import { DisplayCampaigns } from '../components';


const Profile = () => {
  const [isLoading, setIsLoading ] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getUserCampaigns } = useStateContext();
  
  const fetchCampaigns = async () => {
    setIsLoading(true);
    const campaigns = await getUserCampaigns();
    setCampaigns(campaigns);
    setIsLoading(false);
  }

  useEffect(() => {
    if(!contract) return;
    fetchCampaigns();
  }, [contract, address])


  return (
    <>
    <head>
        <title>Your Campaigns</title>
      </head>
    <DisplayCampaigns
      title={'Your Campaigns'}
      campaigns={campaigns}
      isLoading={isLoading}
    />
    </>
  )
}

export default Profile