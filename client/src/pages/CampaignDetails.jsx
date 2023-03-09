import React, { useState, useEffect } from 'react'
import {
  useLocation,
  useNavigate
} from 'react-router-dom'
import { useStateContext } from '../context'
import { CountBox, CustomBtn, Loader } from '../components'
import { ethers } from 'ethers'
import {calculateBarPercentage} from '../utils'
import { thirdweb } from '../assets'

const CampaignDetails = () => {
  return (
    <div>CampaignDetails</div>
  )
}

export default CampaignDetails