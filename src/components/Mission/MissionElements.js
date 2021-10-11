import styled from "styled-components";
import Woman from "../../assets/images/womanyellow.jpeg";
import Colors from "../../constants/Colors";

export const MaskContainer = styled.div`
  position: absolute;
  top: -1px;
  width: 100%;
  max-width: 1440px;
  height: 0px;
  padding-bottom: 50%;
  z-index: -1;
`;

export const BackLayer = styled.div`
  position: absolute;
  inset: 0px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    min-height: 900px;
  }

  @media screen and (min-width: 480px) {
    min-height: 700px;
  }
`;

export const BackLayerImage = styled.div`
  position: absolute;
  inset: 0px 0px 0px;
  mask-image: linear-gradient(to bottom, white, transparent);
  background-image: url(${Woman});
  background-position: 40% center;
  background-repeat: no-repeat;
  background-size: cover;
  transform: ${({ offsetY }) => `translateY(${offsetY * -0.05}px)`};
  /* transform: scaleX(-1); */
`;
export const MissionContainer = styled.section`
  overflow-x: hidden;
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
  color: rgb(255, 255, 255);
  /* overflow: hidden; */
  transform-style: preserve-3d;
  background-color: ${Colors.primaryBlue};
  padding-bottom: 90px;
  /* z-index: 10; */
`;

export const MissionWrapper = styled.div`
  position: relative;
  inset: 0px;

  @media screen and (min-width: 768px) {
    min-height: 900px;
  }

  @media screen and (max-width: 480px) {
    min-height: 700px;
  }
`;

export const MissionContentHeader = styled.div`
  position: relative;
  /* padding: 10rem 10px 0.5rem; */
  padding: 320px 0 10% 10%;
  /* margin-left: auto;
  margin-right: auto; */
  text-align: center;
  color: white;
  width: 100%;
  /* background-color: blue; */
  /* margin-top: 40%; */
`;

export const MissionContentInfo = styled.div`
  width: 100%;
  z-index: 9;
  background-image: linear-gradient(transparent);
  /* background-color: ${Colors.primaryBlue}; */
`;
