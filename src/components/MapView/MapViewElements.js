import styled from "styled-components";
import Globe from "../../assets/images/globe-new.jpeg";
import Colors from "../../constants/Colors";

export const MapViewContainer = styled.section`
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
  /* color: rgb(255, 255, 255); */
  overflow: hidden;
  transform-style: preserve-3d;
  /* background-image: linear-gradient(white, white); */
  background-color: ${Colors.primaryBlue};
`;

export const MapViewWrapper = styled.div`
  position: relative;
  inset: 0px;

  @media screen and (min-width: 768px) {
    min-height: 900px;
  }

  @media screen and (max-width: 480px) {
    min-height: 700px;
  }
`;

export const BackLayer = styled.div`
  /* position: absolute;
  inset: 0px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    min-height: 900px;
  }

  @media screen and (min-width: 480px) {
    min-height: 700px;
  } */
`;
export const BackLayerImage = styled.div`
  position: absolute;
  inset: 0px 0px 0px;
  mask-image: linear-gradient(to bottom, white, transparent);
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${Globe});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transform: ${({ offsetY }) => `translateY(${offsetY * -0.1}px)`};
  z-index: -1;
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

export const MapViewContentContainer = styled.div`
  position: relative;
  z-index: 10;
  /* color: white; */
`;

export const MapViewContentWrapper = styled.div`
  padding-left: 75px;
  padding-right: 75px;
  margin-left: auto;
  margin-right: auto;
  /* width: 100%; */

  @media screen and (max-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (max-width: 480px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const MapViewContentHeader = styled.div`
  position: relative;
  padding: 10rem 10px 0.5rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: white;
`;

export const MapViewContentPopups = styled.div`
  width: 100%;
`;

export const MapViewContentInfo = styled.div`
  width: 100%;
  z-index: 9;
  background-image: linear-gradient(
    transparent,
    ${Colors.primaryBlue},
    ${Colors.primaryBlue},
    ${Colors.primaryBlue}
  );
  /* background-color: ${Colors.primaryBlue}; */
`;

export const GridWrapper = styled.div`
  /* max-width: 100%; */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: flex-start;
  grid-gap: 16px;
  /* padding: 0 50px; */

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 30px;
  text-align: center;
  color: white;
  background-color: transparent;
`;
