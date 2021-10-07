import React from "react";
import { MobileIcon } from "./NavbarElements";
import { motion } from "framer-motion";
import styled from "styled-components";
import Colors from "../../constants/Colors";

const MenuToggle = ({ toggleMenu, isSidebarOpen }) => {
  const Path = (props) => (
    <motion.path
      animate={isSidebarOpen ? "open" : "closed"}
      initial={false}
      fill="transparent"
      strokeLinecap="round"
      strokeWidth="3"
      transition={{ duration: 0.3, ease: "easeInOut" }}
      {...props}
    />
  );

  return (
    <MobileIcon onClick={toggleMenu}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5", stroke: Colors.primaryBlue },
            open: { d: "M 3 16.5 L 17 2.5", stroke: Colors.primaryBlue },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke={Colors.primaryBlue}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <Path
          variants={{
            closed: {
              d: "M 2 16.346 L 20 16.346",
              stroke: Colors.primaryBlue,
            },
            open: { d: "M 3 2.5 L 17 16.346", stroke: Colors.primaryBlue },
          }}
        />
      </svg>
    </MobileIcon>
  );
};

export default MenuToggle;
