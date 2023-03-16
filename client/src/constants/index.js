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
    link: "/campaign",
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

export const dark = {
  primary: "#101618",
  secondary: "#161d23",
  selected: "#20282c",
  hover: "#F2F2F2",
  white: "white",
  black: "#000",
  gray: "#333",
  lightGray: "#666",
  text: "#fff",
  lighttext: "#777",
  trans: "rgba(0,30,50,0.1)",
  insec: "#ffffff09",
  border: "#333",
  lightBorder: "#444",
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
  border: "#ddd",
  lightBorder: "#ccc",
  mode: true,
};


