import React from 'react'
import { loader } from '../assets'
import { useStateContext } from '../context'

function Loader({styles}) {
  const { Colors } = useStateContext();
  return (
    <div className={'fixed right-0 left-0 top-0 bottom-0 flex items-center justify-center bg-[#1818189b] duration-100 backdrop-blur-[10px] z-[999] '+`${styles}`}>
      <div className='flex flex-col justify-center items-center'>
        <img src={loader} alt="loader" className=' h-[100px] rounded-full backdrop-blur-xl ' />
        <h1 style={{
          color: Colors.text
        }} className=' bg-[#2a2a2a7c] mt-[12px] px-6 rounded-xl py-1 text-[18px] text-center leading-8 '>Loadin...</h1>
      </div>
    </div>
  )
}

export default Loader