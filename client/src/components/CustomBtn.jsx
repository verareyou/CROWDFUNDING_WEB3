import React from 'react'

const CustomBtn = ({title, styles, btnType}) => {
  return (
    <button
      type={btnType}
      className={`w-[200px] h-[52px] rounded-[10px] px-4 leading-[26px] font-epilogue font-bold text-[16px] duration-200 text-white ${styles} `}
    >
      {title}
    </button>
  )
}

export default CustomBtn