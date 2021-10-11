import styled from "styled-components";
import herobg from "../../assets/images/herobg.jpeg";
import Colors from "../../constants/Colors";
// max-width: 1300

export const HeroWrapper = styled.div`
  display: flex;
  background: ${Colors.primaryBlue};
  color: black;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  /* justify-content: center; */
  /* align-items: center; */
  /* height: 100vh; */
  /* display: block; */
  /* position: relative; */
  /* z-index: 1; */
  @media screen and (max-width: 769px) {
    height: 100%;
  }
`;

export const HeroContainer = styled.section`
  margin-left: auto;
  margin-right: auto;
  padding-top: 150px;
  width: 100%;
  max-width: 1400px;
  transition: opacity 1s cubic-bezier(0.17, 0.67, 0.21, 0.95) 0s;
  color: white;
  padding-left: 100px;

  @media screen and (max-width: 768px) {
    padding-left: 0;
    padding-top: 100px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  /* flex-flow: row; */
  flex-direction: row;
  /* margin-left: -10px; */
  /* margin-right: -10px; */
  /* color: ${Colors.primaryBlue}; */
  /* background-color: red; */
  padding-left: 100px;
`;

export const HeroLeft = styled.div`
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
  flex-direction: row;
  /* flex: 0 0 50%; */
  /* max-width: 50%; */
  @media screen and (min-width: 64em) {
    /* flex: 0 0 50%; */
    max-width: 50%;
    margin-left: 8.33333%;
    padding-bottom: 150px;
  }

  /* @media screen and (min-width: 48em) {
    max-width: 58.3333%;
    margin-left: 0%;
    padding-bottom: 0rem;
  }

  @media screen and (min-width: 32em) {
    max-width: 100%;
    margin-left: 0%;
    padding-bottom: 0rem;
  } */
`;

export const HeroRight = styled.div`
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
  background-color: red;
`;

export const HeroContentRow = styled.div`
  align-items: center;
  /* height: 90vh; */

  @media screen and (min-width: 769px) {
    display: grid;
    /* grid-auto-columns: minmax(auto, 1fr); */
    grid-template-columns: 1.4fr 1fr;
    grid-template-areas: "col1 col2";
    /* grid-template-rows: 75%; */
  }
`;

export const Column1 = styled.div`
  align-self: flex-start;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  /* @media screen and (min-width: 769px) {
    width: 110%;
  } */
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  /* width: 60%; */
  padding-left: 20%;
  padding-right: 20%;
  /* @media screen and (min-width: 769px) {
    width: 75%;
    background-color: red;
    justify-self: flex-end;
  } */
`;

export const HeroH1 = styled.p`
  line-height: 1.05;
  font-weight: 500;
  letter-spacing: -0.04em;
  /* font-size: 60px; */
  font-size: 3rem;
  text-align: left;
  margin: 0px;
  @media screen and (max-width: 768px) {
    font-size: 48px;
  }

  @media screen and (max-width: 480px) {
    font-size: 42px;
  }
`;

export const HeroP = styled.p`
  text-align: left;
  font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  font-size: 1.25rem;
  line-height: 1.4;
  font-weight: 400;
  letter-spacing: 0px;
  /* margin-top: 1rem; */
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  padding-bottom: 16px;
`;

export const HeroPBold = styled.p`
  text-align: left;
  line-height: 1.4;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: lowercase;
  font-variant: small-caps;
  /* padding-bottom: 1rem; */
  margin-top: 1rem;
  margin: 0px;
  margin-bottom: 10px;
  display: block;
  /* margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px; */

  @media screen and (max-width: 76px) {
    /* text-align: center; */
    margin-bottom: 5px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  width: fit-content;

  /* @media screen and (max-width: 768px) {
    width: 360px;
  } */

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PhoneWrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

export const PhoneContainer = styled.div`
  position: relative;
  display: flex;
  width: 90%;
`;

export const PhoneDiv = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 216.667%;
  /* height: 0px; */
  overflow: hidden;
  background-size: cover;
  transition: transform 1.5s ease 0.25s, opacity 1s ease 0.25s;
  transform: translateY(0px);
  opacity: 1;
  border-radius: 13% / 6%;
  box-shadow: rgb(26 26 26) 0px 0px 0px 8px;
  background-color: rgb(26, 26, 26);
  margin-top: auto;
  margin-bottom: auto;
  display: block;
`;

export const PhoneVideo = styled.video`
  position: absolute;
  /* height: 100%; */
  width: 100%;
  top: 0px;
  left: 0px;
  object-fit: cover;
`;

export const Whitespace = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 75px;
  padding-right: 75px;
  height: 10rem;
  margin-top: -10rem;
  width: 100%;
  /* max-width: 90rem; */
  background-color: rgb(255, 255, 255);

  @media screen and (max-width: 1023) {
    padding-left: 30px;
    padding-right: 30px;
    height: 0px;
    margin-top: 0rem;
  }

  @media screen and (max-width: 767px) {
    padding-left: 20px;
    padding-right: 20px;
    height: 30vw;
    margin-top: -30vw;
  }

  @media screen and (max-width: 500px) {
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    max-width: 90rem;
    background-color: rgb(255, 255, 255);
    height: 70vw;
    margin-top: -70vw;
  }
`;
