import styled from "styled-components";
import { Link } from "react-router-dom";
import Colors from "../../constants/Colors";

export const BtnWrapper = styled.div`
  display: flex;
  width: max-content;
  height: max-content;
  align-self: center;
  /* align-self: center; */
  align-items: center;
  justify-content: center;
  /* margin-top: 20px; */
  /* padding: 0px 20px; */
  padding: ${({ header }) => (header ? "0px 10px" : "0px 20px")};
  background-color: ${({ header, investNow }) =>
    header ? (investNow ? "#2D9CDB" : "#2D9CDB") : "transparent"};

  border: 2px solid transparent;
  border-radius: 10px;
  border-color: ${({ header }) =>
    header ? "transparent" : "rgba(0, 0, 0, 0.22)"};
  border-color: ${({ hero }) => {
    if (hero) return "rgba(255,255,255, 0.22)";
  }};
  transition: background-color 500ms, border 500ms, opacity 1s ease;
  position: relative;
  cursor: pointer;

  &:hover {
    /* background-color: ; */
    background-color: ${({ header }) =>
      header ? "#2D9FFF" : "rgba(102, 102, 102, 0.15)"};
    align-items: center;
  }
`;

export const BtnText = styled.p`
  display: flex;
  /* color: white; */
  color: rgb(142, 142, 154);
  color: ${({ login }) => (login ? "rgb(142, 142, 154)" : "white")};
  /* text-decoration: none; */
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0px;
  margin: 0px;
  margin-top: 9px;
  margin-bottom: 9px;

  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 0.04em;

  width: ${({ hero }) => {
    if (hero) return "180px";
  }};
`;

export const HeroBtnWrapper = styled.div`
  display: flex;
  padding-right: 1rem;
  padding-bottom: 0rem;
  background-color: black;

  @media screen and (min-width: 48em) {
    padding-right: 1rem;
    padding-bottom: 0rem;
  }

  @media screen and (min-width: 32rem) {
    padding-right: 0rem;
    padding-bottom: 1rem;
  }
`;

export const HeroBtnLink = styled.a`
  width: 158px;
  /* color: inherit; */
  background-color: black;
  border-color: rgba(255, 255, 255, 0.22);

  font-size: 0.9375rem;
  font-family: Styrene, sans-serif;
  white-space: nowrap;
  letter-spacing: 0.04em;
  text-align: center;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 500;
  user-select: none;
  border-width: 1px;
  border-style: solid;
  border-color: initial;
  border-image: initial;
  border-radius: 0.25rem;
  padding: 0.83334em 1em;
  text-decoration: none;
  transition: color 300ms ease 0s, background-color, border;

  @media screen and (min-width: 48em) {
    width: 180px;
  }

  @media screen and (min-width: 32em) {
    width: 100%;
  }
`;

export const HeroLinkText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: lowercase;
  font-variant: small-caps;
  line-height: 0;
  margin-top: -2px;

  @media screen and (min-width: 32em) {
    font-szie: 1rem;
  }
`;
