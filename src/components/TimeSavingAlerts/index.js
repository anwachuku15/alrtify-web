import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./TimeSavingAlerts.css";
import {
  CircleRow,
  TimeSavingAlertsContainer,
  TimeSavingAlertsHeader,
  TimeSavingAlertsHeaderH1,
  TimeSavingAlertsHeaderH2,
  TimeSavingAlertsHeaderTextContainer,
  TimeSavingAlertsWrapper,
} from "./TimeSavingAlertsElements";

const TimeSavingAlerts = () => {
  const { height, width } = useWindowDimensions();

  const Circle = ({ title }) => (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: 140,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
          width: 100,
          height: 100,
          backgroundColor: "white",
          borderRadius: "50%",
          border: "1px solid rgb(204, 204, 204)",
        }}
      >
        <div
          style={{
            backgroundColor: "blue",
            width: "96%",
            height: "96%",
            borderRadius: 48,
          }}
        ></div>
      </div>
      <div
        style={{
          textAlign: "center",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <p style={{ fontSize: 12, color: "black" }}>{title}</p>
      </div>
    </div>
  );

  return (
    <TimeSavingAlertsWrapper>
      <TimeSavingAlertsContainer>
        <TimeSavingAlertsHeader>
          <TimeSavingAlertsHeaderTextContainer>
            <TimeSavingAlertsHeaderH2>
              Time-Saving Alerts
            </TimeSavingAlertsHeaderH2>
            <TimeSavingAlertsHeaderH1>
              Stay alert on what is important in your world.
            </TimeSavingAlertsHeaderH1>
          </TimeSavingAlertsHeaderTextContainer>
        </TimeSavingAlertsHeader>
      </TimeSavingAlertsContainer>
      {/* <CircleRow width={width}>
        <Circle title={"Man Rescued from Chinatown Fire"} />
        <Circle title={"Lost Dog Returned To Owner"} />
        <Circle title={"Family Escapes Burning Building"} />
        <Circle title={"Missing 10-Year-Old Girl Found"} />
        <Circle title={"Uber Driver Saved from Shootout"} />
      </CircleRow> */}
    </TimeSavingAlertsWrapper>
  );
};

export default TimeSavingAlerts;
