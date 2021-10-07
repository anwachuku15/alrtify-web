import styled from "styled-components";
// import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Colors from "../../constants/Colors";

export const Nav = styled.nav`
  background: white;
  height: 60px;
  margin-top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  /* transition: background 0.5s ease;

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  } */
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 20px;
  max-width: 1400px;
`;

export const NavLogo = styled(ScrollLink)`
  cursor: pointer;
  width: 145px;
`;

export const MobileIcon = styled.div`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    cursor: pointer;
    display: flex;
    font-size: 1.8rem;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;

    /* position: absolute; */
    /* top: 0;
    right: 0;
    transform: translate(-100%, 60%); */
  }
`;

export const MenuIconContainer = styled.div`
  width: 60px;
  height: 60px;
  z-index: 2;
  border-radius: 50%;
  margin: 10px;
  /* position: absolute; */
  cursor: pointer;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.2);
  -webkit-transition-duration: 0.66s;
  transition-duration: 0.66s;
  -webkit-transition-timing-function: swing;
  transition-timing-function: swing;

  ::before {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    /*   background-color: #1ee8b6; */
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    -webkit-transition-duration: 0.66s;
    transition-duration: 0.66s;
    -webkit-transition-timing-function: swing;
    transition-timing-function: swing;
  }
`;

export const MenuIcon = styled.div`
  width: 30px;
  height: 4px;
  background-color: black;
  position: absolute;
  top: 28px;
  left: 15px;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  transition-timing-function: swing;

  :before,
  :after {
    width: 30px;
    height: 4px;
    background-color: black;
    content: "";
    position: absolute;
    left: 0;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    transition-timing-function: swing;
  }

  :before {
    top: -9px;
  }

  :after {
    top: 9px;
  }
`;

export const NavMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: right;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavButtons = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(ScrollLink)`
  color: rgb(142, 142, 154);
  font-weight: 600;
  font-size: 18px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-bottom-color: transparent;
  transition: all 0.2s ease;
  text-transform: lowercase;
  font-variant: small-caps;

  &.active {
    border-bottom-color: ${Colors.primaryBlue};
    transition: border-bottom-color 0.2s ease;
  }

  &:hover {
    color: ${Colors.primaryBlue};
  }
`;
