import {
  createCampaign,
  dashboard,
  logout,
  payment,
  profile,
  withdraw,
} from "../assets";

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: dashboard,
    link: "/",
  },
  {
    name: "campaign",
    imgUrl: createCampaign,
    link: "/create-campaign",
  },
  {
    name: "payment",
    imgUrl: payment,
    link: "/",
    disabled: true,
  },
  {
    name: "withdraw",
    imgUrl: withdraw,
    link: "/",
    disabled: true,
  },
  {
    name: "profile",
    imgUrl: profile,
    link: "/profile",
  },
  {
    name: "logout",
    imgUrl: logout,
    link: "/",
    disabled: true,
  },
];

const Color = {
  primary: "#131313",
  secondary: "#191919",
  selected: "#28282a",
  hover: "#F2F2F2",
  white: "white",
  black: "#000",
  gray: "#333",
  lightGray: "#666",
  text: "#fff",
};
const Colord = {
  primary: "#fff",
  secondary: "#e5e5e5",
  selected: "#28282",
  hover: "#F2F2F2",
  white: "#fff",
  black: "#000",
  gray: "#a5a5a5",
  lightGray: "#373737",
  text: "#000",
};

export const Colors = Color;
