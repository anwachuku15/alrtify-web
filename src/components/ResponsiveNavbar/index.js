import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("TOGGLE");
  };
  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} /> */}
      <Navbar isSidebarOpen={false} toggleMenu={toggleMenu} />
    </>
  );
};

export default ResponsiveNavbar;
