import React from 'react'

const CustomBtn = ({title, styles, btnType, handleClick}) => {
  // console.log(btnType)
  return (
    <button
      type={btnType}
      onClick={handleClick}
      className={`w-[200px] h-[52px] rounded-[10px] px-4 font-epilogue font-bold text-[16px] duration-200 text-white ${styles} `}
    >
      {title}
    </button>
  )
}

export default CustomBtn