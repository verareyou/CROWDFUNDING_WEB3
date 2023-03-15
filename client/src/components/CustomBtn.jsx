import React from 'react'
import { useStateContext } from '../context'

const CustomBtn = ({title, styles, btnType, handleClick, textColor}) => {
  const { Colors } = useStateContext()

  return (
    <button
      type={btnType}
      style={{ border: `1px solid  ${Colors.lightBorder}`, color: `${textColor}`}}
      onClick={handleClick}
      className={`w-[200px] h-[52px] rounded-[10px] px-4 border font-bold text-[16px] duration-200  ${styles} `}
    >
      {title}
    </button>
  )
}

export default CustomBtn