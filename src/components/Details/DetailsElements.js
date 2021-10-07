import styled from "styled-components";
import Colors from "../../constants/Colors";

export const DetailContainer = styled.section`
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
  overflow: hidden;
  color: black;
  transform-style: preserve-3d;
`;

export const DetailWrapper = styled.div`
  position: relative;
  inset: 0px;
  /* overflow: hidden;
  height: 130vh; */
  background-color: white;
  height: fit-content;
  width: 100%;
  max-width: 1440px;

  /* @media screen and (max-width: 768px) {
    max-height: 130vh;
  }

  @media screen and (max-width: 480px) {
    max-height: 100vh;
  } */

  @media screen and (min-width: 768px) {
    min-height: 900px;
  }

  @media screen and (max-width: 480px) {
    min-height: 700px;
  }
`;

export const HeaderContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-left: 75px;
  padding-left: 75px;

  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (min-width: 480px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const LiveIndicatorContainer = styled.div`
  display: flex;
  padding-top: 6rem;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;
export const LivePill = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 14px;
  height: 28px;
  background-color: red;
  position: relative;
  padding: 8px 10px;
  align-items: center;

  /* ::before {
    z-index: 1;
    content: "";
    position: absolute;
    border-radius: 14px;
    min-height: 28px;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: 3s ease 0s infinite normal both running;
    border-color: red;
    border-style: solid;
  } */
`;

export const LivePillCircle = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: white;
  margin-right: 6px;
`;

export const LivePillTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
`;

export const LivePillText = styled.p`
  color: white;
  vertical-align: middle;
  font-size: 0.85rem;
  font-weight: 600;
  margin-right: 2px;
  letter-spacing: 0.5px;
  line-height: 1.5px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const DetailHeader = styled.div`
  display: flex;
  margin: auto;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const DetailHeaderText = styled.p`
  font-size: 48px;
  text-align: center;
  color: black;
`;

export const DetailContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DetailLeft = styled.div``;

export const PhoneWrapper = styled.div`
  position: relative;
  display: flex;
  /* height: 100%; */
  justify-content: center;
  align-items: center;
`;

export const PhoneContainer = styled.div`
  position: relative;
  /* display: flex; */
  width: 80%;
`;

export const PhoneDiv = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 216.667%;
  /* height: 0px; */
  overflow: hidden;
  /* background-size: cover; */
  /* transition: transform 1.5s ease 0.25s, opacity 1s ease 0.25s; */
  /* transform: translateY(0px); */
  /* opacity: 1; */
  border-radius: 13% / 6%;
  box-shadow: rgb(26 26 26) 0px 0px 0px 8px;
  background-color: rgb(26, 26, 26);
  margin-top: auto;
  /* margin-bottom: auto; */
  /* display: block; */
`;

export const PhoneVideo = styled.video`
  position: absolute;
  /* height: 100%; */
  width: 100%;
  top: 0px;
  left: 0px;
  object-fit: cover;
`;

export const MaskContainer = styled.div`
  position: absolute;
  top: -1px;
  width: 100%;
  max-width: 1440px;
  height: 0px;
  padding-bottom: 50%;
  z-index: 6;
`;
