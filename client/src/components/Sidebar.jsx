import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { logo , sun } from '../assets'
import { navlinks } from '../constants'

const Icon = ({styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div className={` w-[48px] h-[48px] rounded-[20px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && ' cursor-pointer '} ${styles} `} onClick={handleClick} >
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className='w-1/2 h-1/2' />
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive!==name && 'grayscale '} `} />
    )}
  </div>
)

const Sidebar = () => {
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState('dashboard')
  return (
    <div className='flex flex-col justify-center items-center sticky top-5 h-[93vh] '>
      <Link to="/">
        <Icon styles=" w-[52px] h-[52px] bg-[#fff2] duration-100 hover:bg-[#fff]  " imgUrl={logo} />
      </Link>

      <div className=' flex-1 relative mt-5 w-[76px] flex flex-col justify-between items-center bg-[#1b1b23b6] rounded-[30px] p-4 '>
        <div className='flex flex-col justify-center items-center gap-3'>
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              styles={`${!link.disabled && isActive!==link.name && ' duration-75 hover:bg-[#fff2] '}`}
              isActive={isActive}
              handleClick={() => {
                if(!link.disabled){
                  setIsActive(link.name)
                  navigate(link.link)
                }
              }}
            />
          ))}
        </div>
        <Icon imgUrl={sun}  styles="bg-[#2c2c34] mt-2 shadow-secondary" />
      </div>
    </div>
  )
}

export default Sidebar