import React, {useState, useEffect} from 'react'

import { useStateContext } from '../context'
import { DisplayCampaigns } from '../components';


const Home = () => {
  const [isLoading, setIsLoading ] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns, search } = useStateContext();
  
  const FilterCampaigns = () => {
    if (search === "") {
      return campaigns;
    }
    return campaigns.filter((campaign) => {
      return campaign.title.toLowerCase().includes(search.toLowerCase()) + campaign.description.toLowerCase().includes(search.toLowerCase());
    });
  };
  
  const fetchCampaigns = async () => {
    setIsLoading(true);
    const campaigns = await getCampaigns();
    setCampaigns(campaigns);
    setIsLoading(false);
    console.log("hi")
  }

  useEffect(() => {
    if(!contract) return;
    fetchCampaigns();
  }, [contract, address])

  // console.log(campaigns)

  return (
    <DisplayCampaigns
      title={'All Campaigns'}
      campaigns={FilterCampaigns()}
      isLoading={isLoading}
    />
  )
}

export default Home