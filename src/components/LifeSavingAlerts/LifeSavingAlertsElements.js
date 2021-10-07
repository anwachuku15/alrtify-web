import styled from "styled-components";
import Colors from "../../constants/Colors";

export const LifeSavingAlertsWrapper = styled.section`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1440px;
  color: black;
  background-color: white;
  padding-left: 75px;
  padding-right: 75px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 150px;
  padding-bottom: 100px;
  @media screen and (max-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (max-width: 480px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const LifeSavingAlertsContainer = styled.div``;

export const LifeSavingAlertsHeader = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 95%;
  background-color: transparent;
  color: black;
`;

export const LifeSavingAlertsHeaderTextContainer = styled.div`
  padding-bottom: 32px;
  text-align: center;
  background-color: transparent;
`;

export const LifeSavingAlertsHeaderH2 = styled.div`
  font-size: 16px;
  color: rgb(142, 142, 156);
  color: black;
  text-transform: lowercase;
  font-variant: small-caps;
  padding-bottom: 16px;
  margin: 0px;
  font-weight: 500;
  letter-spacing: 0.04em;
`;

export const LifeSavingAlertsHeaderH1 = styled.h2`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 400;
  letter-spacing: -0.04em;
  margin: 0px;
`;
