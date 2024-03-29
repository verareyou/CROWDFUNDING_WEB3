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
    onClick: false,

  },
  {
    name: "campaign",
    imgUrl: createCampaign,
    link: "/campaign",
    onClick: false,

  },
  {
    name: "payment",
    imgUrl: payment,
    link: "/",
    disabled: true,
    onClick: false,

  },
  {
    name: "withdraw",
    imgUrl: withdraw,
    link: "/",
    disabled: true,
    onClick: false,

  },
  {
    name: "profile",
    imgUrl: profile,
    link: "/profile",
    onClick: false,

  },
  {
    name: "logout",
    imgUrl: logout,
    link: "/",
    onClick: true,
    // disabled: true,
  },
];

export const dark = {
  primary: "#101010",
  secondary: "#1a1a1a",
  selected: "#242424",
  hover: "#F2F2F2",
  white: "white",
  black: "#000",
  gray: "#333",
  lightGray: "#666",
  text: "#fff",
  lighttext: "#777",
  trans: "rgba(0,30,50,0.1)",
  insec: "#ffffff09",
  border: "#4d4d4d",
  lightBorder: "#3a3a3a",
  mode: false,
};
export const light = {
  primary: "#fff",
  secondary: "#eee",
  selected: "#dfdfdf",
  hover: "#F2F2F2",
  white: "#fff",
  black: "#000",
  gray: "#a5a5a5",
  lightGray: "#373737",
  text: "#000",
  lighttext: "#666",
  trans: "rgba(0,60,80,0.1)",
  insec: "#d8d8d8",
  border: "#ccc",
  lightBorder: "#b5b5b5",
  mode: true,
};


