import React from "react";

import { useStateContext } from "../context";

const CountBox = ({ title, value }) => {
  const { Colors } = useStateContext();
  return (
    <div className="flex flex-col items-center w-[150px] ">
      <h4 style={{
        background: Colors.secondary,
        color: Colors.lighttext
      }} className=" font-semibold text-[30px] p-3 rounded-t-[10px] w-full text-center truncate ">{value}</h4>
      <p style={{
        background: Colors.insec,
        color: Colors.text
      }} className="text-center rounded-b-[10px] font-normal text-[16px] ">{title}</p>
    </div>
  );
};

export default CountBox;
