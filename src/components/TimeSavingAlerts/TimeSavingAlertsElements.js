import styled from "styled-components";
import Colors from "../../constants/Colors";

export const TimeSavingAlertsWrapper = styled.section`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1440px;
  color: ${Colors.primaryBlue};
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  padding-top: 80px;
  padding-bottom: 80px;
  /* padding-left: 75px;
  padding-right: 75px;
  @media screen and (max-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (max-width: 480px) {
    padding-left: 20px;
    padding-right: 20px;
  } */
`;

export const TimeSavingAlertsContainer = styled.div``;

export const TimeSavingAlertsHeader = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 95%;
  background-color: transparent;
`;

export const TimeSavingAlertsHeaderTextContainer = styled.div`
  padding-bottom: 32px;
  text-align: center;
  background-color: transparent;
`;

export const TimeSavingAlertsHeaderH2 = styled.div`
  font-size: 20px;
  /* color: rgb(142, 142, 156); */
  text-transform: lowercase;
  font-variant: small-caps;
  padding-bottom: 16px;
  margin: 0px;
  font-weight: 500;
  letter-spacing: 0.04em;
`;

export const TimeSavingAlertsHeaderH1 = styled.h2`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 400;
  letter-spacing: -0.04em;
  margin: 0px;

  @media screen and (max-width: 768px) {
    font-size: 38px;
  }
`;

export const CircleRow = styled.div`
  display: flex;

  justify-content: center;
  /* margin-left: auto;
  margin-right: auto; */
  overflow: hidden;
  overflow-x: scroll;

  @media screen and (max-width: 768px) {
    /* padding-left: 20px;
    width: calc(100% + 40px);
    margin-left: -20px; */
    justify-content: flex-start;
  }

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    background-color: transparent;
  }
`;

{
  /* <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: width,
            margin: "auto",
            justifyContent: "center",
          }}
        ></div> */
}
