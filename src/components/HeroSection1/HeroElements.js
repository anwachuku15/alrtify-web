import styled from "styled-components";
import herobg from "../../assets/images/herobg.jpeg";

export const HeroContainer = styled.div`
  background-color: white;
  color: black;
  background-image: url(${herobg});
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
`;

export const HeroWrapper = styled.section`
  color: white;
  background-color: transparent;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;

  @media screen and (min-width: 64em) {
    padding: 6rem 75px 4rem;
  }

  @media screen and (min-width: 48em) {
    padding: 4rem 30px;
  }

  @media screen and (min-width: 32em) {
    padding: 2rem 20px;
  }
`;

export const HeroBottomDiv = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 90rem;
  background-color: white;

  @media screen and (min-width: 64em) {
    padding-left: 75px;
    padding-right: 75px;
    height: 10rem;
    margin-top: -10rem;
  }

  @media screen and (min-width: 48em) {
    padding-left: 30px;
    padding-right: 30px;
    height: 0px;
    margin-top: 0rem;
  }

  @media screen and (min-width: 32em) {
    padding-left: 20px;
    padding-right: 20px;
    height: 30vw;
    margin-top: -30vw;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  /* width: auto; */
  flex-flow: row wrap;
  /* flex-direction: row;
  flex-wrap: wrap; */
  margin-left: -10px;
  margin-right: -10px;
`;

export const HeroLeft1 = styled.div`
  max-width: 100%;
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 0%;
  padding-bottom: 4rem;
  flex: 100%;
  flex-direction: column;

  @media screen and (min-width: 64em) {
    flex: 0 0 50%;
    max-width: 50%;
    margin-left: 8.33333%;
    padding-bottom: 150px;
  }

  @media screen and (min-width: 48em) {
    flex: 0 0 58.333%;
    max-width: 58.3333%;
    margin-left: 0%;
    padding-bottom: 0rem;
  }

  @media screen and (min-width: 32em) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-left: 0%;
    padding-bottom: 0rem;
  }
`;

export const HeroLeft = styled.div`
  max-width: 100%;
  flex: 1;
  padding: 0 10px 4rem 10px;

  @media screen and (min-width: 768px) {
    flex: 0.58333;
  }
`;

export const HeroRight = styled.div`
  max-width: 100%;
  flex: 1;
  padding: 0 10px 0 10px;
  margin-left: 8.3333%;

  @media screen and (min-width: 768px) {
    flex: 0 0 41.6667%;
    max-width: 41.6667%;
    margin-left: 50%;
    margin-top: -14rem;
    min-width: 0px;
  }
`;
export const HeroRight1 = styled.div`
  max-width: 83.3333%;
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 8.3333%;
  margin-top: 0rem;
  min-width: 0px;

  @media screen and (min-width: 64em) {
    flex: 0 0 25%;
    max-width: 25%;
    margin-left: 8.33333%;
    margin-top: 0rem;
  }

  @media screen and (min-width: 48em) {
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
    margin-left: 8.33333%;
    margin-top: 0rem;
    min-width: 340px;
  }

  @media screen and (min-width: 32em) {
    flex: 0 0 41.6667%;
    max-width: 41.6667%;
    margin-left: 50%;
    margin-top: -14rem;
    min-width: 0px;
  }
`;

export const HeroLeftHeader = styled.p`
  font-size: 2.625rem;
  line-height: 1.05;
  font-weight: 400;
  letter-spacing: -0.04em;
  padding-bottom: 1rem;

  @media screen and (min-width: 64em) {
    font-size: 3.75rem;
  }

  @media screen and (min-width: 48em) {
    font-size: 3rem;
  }

  @media screen and (min-width: 32em) {
    font-size: 2.625rem;
  }
`;

export const HeroLeftP = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.25rem;
  line-height: 1.4;
  font-weight: 400;
  letter-spacing: 0px;
  padding-bottom: 2rem;
  margin-top: 1rem;

  @media screen and (min-width: 64em) {
    padding-bottom: 2rem;
  }

  @media screen and (min-width: 48em) {
    padding-bottom: 2rem;
  }

  @media screen and (min-width: 32em) {
    padding-bottom: 6rem;
  }
`;

export const HeroLeftP2 = styled.p`
  font-size: 0.875rem;
  line-height: 1.4;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: lowercase;
  font-variant: small-caps;
  padding-bottom: 1rem;
  margin-top: 1rem;

  @media screen and (min-width: 32em) {
    font-size: 1rem;
  }
`;

export const HeroLeftButtons = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 50%;
  padding-right: 20px;

  @media screen and (min-width: 48em) {
    flex-direction: row;
  }

  @media screen and (min-width: 32em) {
    flex-direction: column;
  }
`;

export const HeroPhoneContainer = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

export const HeroPhoneWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

export const HeroPhoneVideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 216.667%;
  height: 0px;
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
`;

export const HeroPhoneVideo = styled.video`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  object-fit: cover;
`;
