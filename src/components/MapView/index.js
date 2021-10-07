import React, { useState } from "react";
import {
  MapViewContainer,
  MapViewWrapper,
  MaskContainer,
  BackLayer,
  BackLayerImage,
  MapViewContentContainer,
  MapViewContentWrapper,
  MapViewContentHeader,
  MapViewContentPopups,
  MapViewContentInfo,
  ContentInfoGrid,
  GridItem,
  BackImage,
} from "./MapViewElements";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import SvgMask from "./SvgMask";
import Colors from "../../constants/Colors";

const MapView = () => {
  const [offsetY, setOffsetY] = useState(0);

  const Item = styled(Paper)(({ theme }) => ({
    padding: 30,
    textAlign: "center",
    color: "white",
    backgroundColor: "transparent",
    boxShadow: "none",
  }));

  return (
    <MapViewContainer>
      <MapViewWrapper>
        <BackLayer>
          <BackLayerImage />
          {/* <BackImage /> */}
        </BackLayer>
        <MapViewContentContainer>
          <MapViewContentWrapper>
            <MapViewContentHeader>
              <h2 style={{ fontSize: 48 }}>
                Your world is <br /> safer with Citizen.{" "}
              </h2>
            </MapViewContentHeader>
            <MapViewContentPopups>
              <div style={{ height: 500 }}></div>
              <div style={{ height: 160 }}></div>
            </MapViewContentPopups>
          </MapViewContentWrapper>
        </MapViewContentContainer>
      </MapViewWrapper>

      <MaskContainer>
        <SvgMask backgroundColor={"white"} />
      </MaskContainer>

      <MapViewContentInfo>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item md={4} xs={12}>
              <Item
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <div style={{ marginRight: 20 }}>
                  <h2 style={{ fontSize: 20 }}>ICON</h2>
                </div>
                <div>
                  <h2
                    style={{
                      fontSize: 20,
                      textAlign: "left",
                      paddingBottom: 16,
                    }}
                  >
                    Get safety alerts when they matter to you - in real time.
                  </h2>
                  <p style={{ fontSize: 20, textAlign: "left" }}>
                    Be situationally aware. Citizen alerts go out within seconds
                    of a 911 or user report. If there's an incident, like a
                    robery, nearby, you'll know to avoid that area.
                  </p>
                </div>
              </Item>
            </Grid>
            <Grid item md={4} xs={12}>
              <Item
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <div style={{ marginRight: 20 }}>
                  <h2 style={{ fontSize: 20 }}>ICON</h2>
                </div>
                <div>
                  <h2
                    style={{
                      fontSize: 20,
                      textAlign: "left",
                      paddingBottom: 16,
                    }}
                  >
                    Know what’s happening so you and your loved ones can stay
                    safe.
                  </h2>
                  <p style={{ fontSize: 20, textAlign: "left" }}>
                    Connect with your family, friends, and neighbors on Citizen
                    and find out when something important is happening around
                    them.
                  </p>
                </div>
              </Item>
            </Grid>
            <Grid item md={4} xs={12}>
              <Item
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <div style={{ marginRight: 20 }}>
                  <h2 style={{ fontSize: 20 }}>ICON</h2>
                </div>
                <div>
                  <h2
                    style={{
                      fontSize: 20,
                      textAlign: "left",
                      paddingBottom: 16,
                    }}
                  >
                    Always know why the helicopter is overhead.
                  </h2>
                  <p style={{ fontSize: 20, textAlign: "left" }}>
                    If there’s commotion like police activity, helicopters
                    overhead, or road closures, pull up the app and know why
                    instantly.
                  </p>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </MapViewContentInfo>
    </MapViewContainer>
  );
};

export default MapView;
