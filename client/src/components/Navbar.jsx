import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CustomBtn } from "./";
import { logo, menu, search, thirdweb } from "../assets";
import { navlinks } from "../constants";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [toogleDrawer, setToogleDrawer] = useState(false);

  return <div className="flex md:flex-row flex-col-reverse  ">Navbar</div>;
};

export default Navbar;
