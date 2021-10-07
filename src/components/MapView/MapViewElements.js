import styled from "styled-components";
import City from "../../assets/images/city.jpeg";
import Colors from "../../constants/Colors";

export const MapViewContainer = styled.section`
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
  color: rgb(255, 255, 255);
  overflow: hidden;
  transform-style: preserve-3d;
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
  background-image: url(${City});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  mask-image: linear-gradient(to bottom, white, transparent);
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
  color: white;
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
  /* background-color: black; */
`;

export const ContentInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeate(12, 1fr);
  gap: 20px;
`;

export const GridItem = styled.div`
  grid-column: span 4 / auto;

  @media screen and (max-width: 768px) {
    grid-column: span 12 / auto;
  }
`;
