import styled from "styled-components";
// import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Colors from "../../constants/Colors";

export const Nav = styled.nav`
  background: white;
  height: 60px;
  /* margin-top: -60px; */
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
  padding: 0 24px;
  max-width: 1400px;
`;

export const NavLogo = styled(ScrollLink)`
  color: #d82c2c;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  font-family: "Sansita Swashed", cursive;
`;

export const MobileIcon = styled.div`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
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
