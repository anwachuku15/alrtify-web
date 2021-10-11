import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavButtons,
  NavMenuContainer,
  MenuIconContainer,
  MenuIcon,
} from "./NavbarElements";
// import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import Button from "../Button";
import { AlrtifyHeader, AlirtifyHeader } from "./AlrtifyHeader";
import Colors from "../../constants/Colors";
import { motion } from "framer-motion";
import styled from "styled-components";
import MenuToggle from "./MenuToggle";
import { Fade as Hamburger } from "hamburger-react";

const Navbar = ({ toggleMenu, isSidebarOpen }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/" onClick={toggleHome}>
          <AlirtifyHeader />
        </NavLogo>

        {/* <MobileIcon onClick={toggleMenu}>
          <FaBars color={Colors.primaryBlue} />
        </MobileIcon> */}

        {/* <MenuIconContainer>
          <MenuIcon />
        </MenuIconContainer> */}

        {/* <MenuToggle toggleMenu={toggleMenu} isSidebarOpen={isSidebarOpen} /> */}

        <MobileIcon>
          <Hamburger
            toggle={toggleMenu}
            toggled={isSidebarOpen}
            size={30}
            color={Colors.primaryBlue}
            rounded
          />
        </MobileIcon>

        <NavMenuContainer>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="hero"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Home
              </NavLinks>
            </NavItem>
          </NavMenu>

          <NavButtons>
            <Button title="Invest Now!" header investNow />
          </NavButtons>
        </NavMenuContainer>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
