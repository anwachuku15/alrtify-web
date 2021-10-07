import styled from "styled-components";
import Doctor from "../../assets/images/doctor.jpeg";
import Colors from "../../constants/Colors";

export const MaskContainer = styled.div`
  position: absolute;
  top: -1px;
  width: 100%;
  max-width: 1440px;
  height: 0px;
  padding-bottom: 50%;
  z-index: 6;
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
  background-image: url(${Doctor});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  mask-image: linear-gradient(to bottom, white, transparent);
`;
export const MissionContainer = styled.section`
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
  color: rgb(255, 255, 255);
  /* overflow: hidden; */
  transform-style: preserve-3d;
  background-color: ${Colors.primaryBlue};
  padding-bottom: 90px;
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
  padding: 25% 0 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: white;
  /* background: blue; */
  width: 75%;
  /* margin-top: 40%; */
`;
