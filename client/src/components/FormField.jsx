import React from "react";
import { useStateContext } from "../context";


function FormField({
  labelName,
  placeholder,
  inputType,
  isTextArea,
  value,
  handleChange,
}) {
  const { Colors } = useStateContext();
  return (
    <label className="flex flex-col w-full flex-1">
      {labelName && (
        <span className="font-medium text-[14px] leading-[22px] text-[#8f8f95] mb-[10px] ">
          {labelName}
        </span>
      )}
      {isTextArea ? (
        <textarea
          required
          value={value}
          onChange={handleChange}
          rows="10"
          placeholder={placeholder}
          style={{ border: `1px solid  ${Colors.lightBorder}` }}
          className=" py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] bg-transparent rounded-[10px] text-[14px] sm:min-w-[300px] placeholder:text-[#929292]  "
        />
      ) : (
        <input
          required
          type={inputType}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          style={{ border: `1px solid  ${Colors.lightBorder}` }}
          className=" py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#4d4d4d] bg-transparent rounded-[10px] text-[14px] sm:min-w-[300px] placeholder:text-[#929292] "
        />
      )}
    </label>
  );
}

export default FormField;
