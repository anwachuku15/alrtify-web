import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Colors from "../../constants/Colors";
import {
  MissionContainer,
  MaskContainer,
  MissionContentHeader,
  BackLayer,
  BackLayerImage,
} from "./MissionElements";
import SvgMask from "../MapView/SvgMask";
import {
  MapViewContentContainer,
  MapViewContentWrapper,
  MapViewContentPopups,
  MapViewContentInfo,
} from "../MapView/MapViewElements";

const Mission = () => {
  const Item = styled(Paper)(({ theme }) => ({
    padding: 30,
    textAlign: "center",
    color: "white",
    backgroundColor: "transparent",
    boxShadow: "none",
  }));

  const HeaderText = styled(Paper)(({ theme }) => ({
    padding: 30,
    color: "white",
    backgroundColor: "transparent",
    boxShadow: "none",
    textAlign: "start",
  }));

  return (
    <MissionContainer>
      <MaskContainer>
        <SvgMask backgroundColor={"white"} />
      </MaskContainer>

      <BackLayer>
        <BackLayerImage />
      </BackLayer>

      <MapViewContentContainer>
        <MapViewContentWrapper>
          <MissionContentHeader>
            <Box sx={{ flexGrow: 1 }}>
              <Grid item md={6} xs={12}>
                <HeaderText style={{}}>
                  <h2 style={{ fontSize: 48 }}>For the greater good.</h2>
                </HeaderText>
              </Grid>
              <Grid item md={6} xs={12}>
                <HeaderText>
                  {/* <h2 style={{ fontSize: 48, color: "transparent" }}>
                    For the greater good.
                  </h2> */}
                </HeaderText>
              </Grid>
            </Box>
          </MissionContentHeader>
          <MapViewContentPopups>
            {/* <div style={{ height: 500 }}></div> */}
            <div style={{ height: 100 }}></div>
          </MapViewContentPopups>

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
                        Get safety alerts when they matter to you - in real
                        time.
                      </h2>
                      <p style={{ fontSize: 20, textAlign: "left" }}>
                        Be situationally aware. Citizen alerts go out within
                        seconds of a 911 or user report. If there's an incident,
                        like a robery, nearby, you'll know to avoid that area.
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
                        Know what’s happening so you and your loved ones can
                        stay safe.
                      </h2>
                      <p style={{ fontSize: 20, textAlign: "left" }}>
                        Connect with your family, friends, and neighbors on
                        Citizen and find out when something important is
                        happening around them.
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
        </MapViewContentWrapper>
      </MapViewContentContainer>
    </MissionContainer>
  );
};

export default Mission;
