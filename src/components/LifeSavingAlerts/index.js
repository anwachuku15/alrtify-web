import React from "react";
import "./LifeSavingAlerts.css";
import {
  LifeSavingAlertsContainer,
  LifeSavingAlertsHeader,
  LifeSavingAlertsHeaderH1,
  LifeSavingAlertsHeaderH2,
  LifeSavingAlertsHeaderTextContainer,
  LifeSavingAlertsWrapper,
} from "./LifeSavingAlertsElements";

const LifeSavingAlerts = () => {
  return (
    <LifeSavingAlertsWrapper>
      <LifeSavingAlertsContainer>
        <LifeSavingAlertsHeader>
          <LifeSavingAlertsHeaderTextContainer>
            <LifeSavingAlertsHeaderH2>
              Life-Saving Alerts
            </LifeSavingAlertsHeaderH2>
            <LifeSavingAlertsHeaderH1>
              Citizen is a force for good in the world.
            </LifeSavingAlertsHeaderH1>
          </LifeSavingAlertsHeaderTextContainer>
        </LifeSavingAlertsHeader>
      </LifeSavingAlertsContainer>
      <div className="circleRow">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: 750,
            minWidth: 750,
            margin: "auto",
            justifyContent: "center",
          }}
        >
          <div style={{ alignItems: "center", justifyContent: "space-evenly" }}>
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
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <p style={{ fontSize: 13, color: "black" }}>
                Man Rescued from Chinatown Fire
              </p>
            </div>
          </div>
          <div style={{ alignItems: "center", justifyContent: "center" }}>
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
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <p style={{ fontSize: 13, color: "black" }}>
                Lost Dog Returned To Owner
              </p>
            </div>
          </div>
          <div style={{ alignItems: "center", justifyContent: "center" }}>
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
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <p style={{ fontSize: 13, color: "black" }}>
                Family Escapes Burning Building
              </p>
            </div>
          </div>
          <div style={{ alignItems: "center", justifyContent: "center" }}>
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
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <p style={{ fontSize: 13, color: "black" }}>
                Missing 10-Year-Old Girl Found
              </p>
            </div>
          </div>
          <div style={{ alignItems: "center", justifyContent: "center" }}>
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
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <p style={{ fontSize: 13, color: "black" }}>
                Uber Driver Saved from Shootout
              </p>
            </div>
          </div>
        </div>
      </div>
    </LifeSavingAlertsWrapper>
  );
};

export default LifeSavingAlerts;
