import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarHome,
  SideBtnWrap,
  SidebarBtnLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggleMenu }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleMenu}>
      {/* <Icon onClick={toggleMenu}>
        <CloseIcon />
      </Icon> */}
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggleMenu}>
            Home
          </SidebarLink>
          {/* <SidebarLink to="about">About</SidebarLink> */}
          <SidebarLink to="whatIdo" onClick={toggleMenu}>
            Skills
          </SidebarLink>
          <SidebarLink to="portfolio" onClick={toggleMenu}>
            Portfolio
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggleMenu}>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
