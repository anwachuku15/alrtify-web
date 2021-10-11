import styled from "styled-components";
import Colors from "../../constants/Colors";

export const FooterContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  background-color: ${Colors.primaryBlue};
  color: white;
  /* height: 100vh; */
`;

export const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 100%;
  padding: 96px 75px 96px;
  /* background-color: red; */
  justify-content: center;
  /* border-bottom-width: thin;
  border-bottom-color: white;
  border-bottom-style: solid; */

  @media screen and (max-width: 992px) {
    padding: 96px 30px 10px;
  }
`;

export const FooterTopWrapper = styled.div`
  /* margin-left: auto;
  margin-right: auto; */
  /* background-color: blue; */
`;

export const FooterTopHeaderText = styled.h1`
  font-size: 48px;
  padding-bottom: 30px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 38px;
  }
`;

export const FooterTopP = styled.p`
  font-size: 16px;
  text-transform: uppercase;
  font-variant: small-caps;
  text-align: center;
  font-weight: 700;
  padding-bottom: 30px;
`;

export const Buttons = styled.div`
  /* display: flex; */
  width: 50%;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    /* width: 200px; */
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ButtonText = styled.div`
  font-variant: small-caps;
  font-size: 0.8em;
  /* font-weight: 700; */
  /* font-size: 0.5rem; */
`;

export const FooterEnd = styled.div`
  width: 100%;
  margin-top: 70px;
`;

export const FooterBottom = styled.div``;

export const FooterCallToActionContainer = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1200px) {
    max-width: 1140px;
  }
  @media screen and (max-width: 992px) {
    max-width: 960px;
  }
  @media screen and (max-width: 768px) {
    max-width: 720px;
  }
  @media screen and (max-width: 576px) {
    max-width: 540px;
  }
`;

export const FooterCallToAction = styled.div``;

// export const CallToActionGrid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `
