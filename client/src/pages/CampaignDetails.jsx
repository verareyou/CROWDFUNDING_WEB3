import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useStateContext } from "../context";
import { CountBox, CustomBtn, Loader } from "../components";
import { ethers } from "ethers";
import { calculateBarPercentage, daysLeft } from "../utils";
import { thirdweb, user } from "../assets";

const CampaignDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { address, contract, getDonations, donate, Colors } = useStateContext();
  // console.log(state)
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(true);

  const [amount, setAmount] = useState(0);
  const [donators, setDonators] = useState([]);

  const fetchDonations = async () => {
    const donations = await getDonations(state.pId);
    setDonators(donations);
    setIsLoading(false);
    setTimeout(() => {
      setIsLoaded(false);
    }, 100);
  };

  useEffect(() => {
    if (contract) {
      fetchDonations();
    }
  }, [contract, address]);

  const handleDonate = async () => {
    setIsLoading(true);
    setIsLoaded(true);
    if (amount > 0) {
      await donate(state.pId, amount);
      fetchDonations();
      navigate("/");
      setIsLoading(false);
      setIsLoaded(false);
    } else {
      alert("Please enter a valid amount");
      setIsLoaded(false);
      setIsLoading(false);
    }
  };

  const remainingDays = daysLeft(state.deadline);

  // smooth scroll button to top

  const [showScroll, setShowScroll] = useState(true);
  const [isMobile, setIsMobile] = useState({
    tap: 0,
    scroll: 0,
  });

  useEffect(() => {
    console.log("window.innerWidth", window.innerWidth);
    if (window.innerWidth < 768) {
      setIsMobile({ tap: 900, scroll: 800 });
    } else {
      setIsMobile({ tap: 768, scroll: 210 });
    }
  }, []);

  const checkScrollTop = () => {
    if (window.pageYOffset < isMobile.scroll) {
      setShowScroll(true);
    } else if (window.pageYOffset >= isMobile.scroll) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    console.log("scrolling");
  }, [window.pageYOffset]);

  const scrollToTop = () => {
    window.scrollTo({
      top: isMobile.tap,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div
        onClick={scrollToTop}
        className={
          "fixed right-5 bottom-5  bg-[#8c6dfd] duration-150 hover:bottom-10  hover:bg-[#6a41ff] sm:bottom-8 p-2 px-5 rounded-full leading-[26px] pt-3 cursor-pointer sm:flex font-bold " +
          `${!showScroll && "translate-y-44 blur-[100px] opacity-0"}`
        }
      >
        FUND
      </div>

      {isLoaded && (
        <Loader
          styles={`
        ${isLoading ? "opacity-[1] flex" : "opacity-[0] "} duration-100
      `}
        />
      )}

      <div className=" w-full flex md:flex-row flex-col mt-10 gap-[30px] ">
        <div className="flex-1 flex-col">
          <img
            src={state.image}
            alt="campaign"
            className="w-full h-[410px] max-md:h-[220px] object-cover rounded-t-2xl "
          />
          <div
            style={{
              // backgroundColor: `#222`,
              backgroundColor: Colors.text === "#fff" ? "#22282a" : "#eef2f5",
            }}
            className=" w-full p-1 rounded-full relative translate-y-[-49%] "
          >
            <div
              className="h-1 p-2 px-3  rounded-full"
              style={{
                width: `${calculateBarPercentage(
                  state.target,
                  state.amountcollected
                )}%`,
                backgroundColor: Colors.text === "#fff" ? "#fff" : "#333",
              }}
            ></div>
          </div>
        </div>
        <div className="flex md:w-[150px] w-full flex-wrap gap-[15px] sm:gap-[30px] ">
          <CountBox title="Days Left" value={remainingDays} />
          <CountBox
            title={`Raised of ${state.target}`}
            value={state.amountcollected}
          />
          <CountBox title="Total Backers" value={donators.length} />
        </div>
      </div>

      <div className=" mt-[60px] flex lg:flex-row flex-col gap-5 ">
        <div className=" flex-[2] flex flex-col gap-[40px]  ">
          <div>
            <h4 className=" font-semibold text-[18px] uppercase ">Creator</h4>

            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px] ">
              <div
                style={{
                  backgroundColor: Colors.text === "#fff" ? "#22282a" : "#fff",
                }}
                className=" w-[48px] h-[48px] flex items-center justify-center rounded-full cursorpoint "
              >
                <img
                  style={{
                    filter: Colors.text === "#fff" ? "invert(1)" : "invert(0)",
                  }}
                  src={user}
                  alt=""
                  className="rounded-full object-contain "
                />
              </div>
              <div>
                <h4 className=" text-[18px] break-all font-semibold max-sm:text-[14px] ">
                  {state.owner}
                </h4>
                <p
                  style={{ color: Colors.lighttext }}
                  className=" mt-[4px] text-[12px] font-normal "
                >
                  10 campaigns
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className=" font-semibold text-[18px] uppercase ">Story</h4>
            <div className=" mt-[20px] ">
              <p className=" font-normal text-[16px] leading-[26px] text-justify ">
                {state.description}
              </p>
            </div>
          </div>

          <div>
            <h4 className=" font-semibold text-[18px] uppercase ">Donators</h4>

            <div className="mt-[20px] flex flex-col gap-4 ">
              
              {donators.length > 0 ? (
                donators.map((donator, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor:
                        Colors.text === "#fff" ? "#22282a" : "#fff",
                    }}
                    className=" flex sm:w-[500px] justify-between px-2 pt-[1px] rounded-lg gap-4 "
                  >
                    <p
                      style={{
                        color: Colors.text === "#fff" ? "#fff" : "#333",
                      }}
                      className=" flex-1 overflow-clip font-normal text-[16px] leading-[26px] break-11 "
                    >
                      {donator.donator}
                    </p>
                    <p
                      style={{
                        color: Colors.lighttext,
                      }}
                      className=" font-normal text-[16px] leading-[26px] break-11 "
                    >
                      {donator.donation}
                    </p>
                  </div>
                ))
              ) : (
                <p
                  style={{ color: Colors.lighttext }}
                  className=" font-normal text-[16px] leading-[26px] text-justify "
                >
                  No donators yet. Be the first one!
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1 ">
          <h4 className=" font-semibold text-[18px] uppercase ">Fund</h4>

          <div
            style={{
              backgroundColor: Colors.secondary,
            }}
            className=" mt-[20px] flex flex-col p-4 rounded-[10px] "
          >
            <p
              style={{ color: Colors.lighttext }}
              className=" font-normal text-[20px] leading-[30px] text-center "
            >
              Fund the campaign
            </p>

            <div>
              <input
                type="number"
                required
                placeholder="ETH 0.1"
                step="0.1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className=" w-full mt-[20px] h-[52px] p-3 bg-transparent rounded-xl outline-none border-[1px] border-[#404649] duration-150 focus:border-[#c0c6c9] "
              />

              <div
                style={{ background: Colors.insec }}
                className=" mt-[20px] p-4 rounded-xl "
              >
                <h4 className=" font-semibold text-[14px] leading-[22px] ">
                  Back it because you believe in it.
                </h4>
                <p
                  style={{ color: Colors.lighttext }}
                  className=" mt-[12px] leading-[22px] font-normal "
                >
                  Support the project for no reward, just because it speaks to
                  you.
                </p>
              </div>

              <CustomBtn
                btnText="submit"
                title="Fund campaign"
                styles="w-full bg-[#8c6dfd] mt-[12px] "
                handleClick={handleDonate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
