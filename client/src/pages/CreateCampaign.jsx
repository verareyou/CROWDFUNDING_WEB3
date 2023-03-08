import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { money } from "../assets";
import { CustomBtn, FormField, Loader } from "../components";
import { Colors } from "../constants";
import { checkIfImage } from "../utils";
import { useStateContext } from "../context";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  const handleFormChange = (fieldname, e) => {
    setForm({ ...form, [fieldname]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists) => {
      if (exists) {
        setIsLoading(true);
        await createCampaign({
          ...form,
          target: ethers.utils.parseUnits(form.target, 18),
        });
        setIsLoading(false);
        navigate("/");
      } else {
        alert("Please enter a valid image url");
        setForm({ ...form, image: "" });
      }
    });
  };

  return (
    <div
      style={{ background: Colors.secondary }}
      className=" flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4 "
    >
      {isLoading && <Loader />}
      <div
        style={{ background: Colors.insec }}
        className="flex flex-col justify-center items-center p-[16px] sm:min-w-[380px] w-[100%] lg:w-[80%] rounded-[10px] "
      >
        <h1
          style={{ color: Colors.text }}
          className=" font-bold sm:text-[25px] text-[18px] leading-[38px] "
        >
          Start a Campaign{" "}
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-[100%] lg:w-[80%] mt-[65px] flex flex-col gap-[30px]  "
      >
        <div className=" flex flex-wrap gap-[40px] max-sm:gap-[20px] ">
          <FormField
            labelName="Your Name *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormChange("name", e)}
          />
          <FormField
            labelName="Campaign Title *"
            placeholder="Write a catchy title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormChange("title", e)}
          />
        </div>
        <FormField
          labelName="Story *"
          placeholder="Write your story"
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormChange("description", e)}
        />
        <div
          style={{
            background:
              "linear-gradient(143deg, #68ff71 15%, rgba(184,207,255,1) 100%)",
          }}
          className=" w-full flex justify-center items-center p-4 h-[120px] rounded-[10px] "
        >
          <img
            src={money}
            alt="money"
            className="w-[40px] h-[40px] invert object-contain "
          />
          <h4 className="font-bold text-[25px] text-[#222] ml-[20px] ">
            You will get 100% of raised amount
          </h4>
        </div>

        <div className=" flex flex-wrap gap-[40px] max-sm:gap-[20px] ">
          <FormField
            labelName="Goal *"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormChange("target", e)}
          />
          <FormField
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormChange("deadline", e)}
          />
        </div>
        <FormField
          labelName="Campaign image *"
          placeholder="Place image URL of your campaign"
          inputType="url"
          value={form.image}
          handleChange={(e) => handleFormChange("image", e)}
        />
        <div className="flex justify-center items-center mt-[40px]">
          <CustomBtn
            btnType="submit"
            title={"Create Campaign"}
            styles={`w-[100%] sm:w-[300px] bg-[#68ff71] text-[#222] font-bold text-[18px] rounded-[10px] py-[15px]`}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;
