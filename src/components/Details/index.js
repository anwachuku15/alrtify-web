import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Colors from "../../constants/Colors";
import {
  DetailContainer,
  DetailContent,
  DetailHeader,
  DetailHeaderText,
  DetailWrapper,
  HeaderContainer,
  LiveIndicatorContainer,
  LivePill,
  LivePillCircle,
  LivePillText,
  LivePillTextWrapper,
  MaskContainer,
  PhoneWrapper,
  PhoneContainer,
  PhoneDiv,
  PhoneVideo,
} from "./DetailsElements";
import SvgMask from "../MapView/SvgMask";
import { BackLayer, BackLayerImage } from "../MapView/MapViewElements";
import Video from "../../assets/videos/herovideo.mp4";

const Details = () => {
  const Right = styled(Paper)(({ theme }) => ({
    padding: 30,
    textAlign: "center",
    color: "black",
    backgroundColor: "transparent",
    boxShadow: "none",
  }));

  return (
    <DetailContainer>
      <MaskContainer>
        <SvgMask backgroundColor={Colors.primaryBlue} />
      </MaskContainer>
      <DetailWrapper>
        {/* <BackLayer>
          <BackLayerImage />
        </BackLayer> */}

        <HeaderContainer>
          <LiveIndicatorContainer>
            <LivePill>
              <LivePillCircle />
              <LivePillTextWrapper>
                <LivePillText>LIVE</LivePillText>
              </LivePillTextWrapper>
            </LivePill>
          </LiveIndicatorContainer>

          <DetailHeader>
            <DetailHeaderText>Know the real story faster.</DetailHeaderText>
          </DetailHeader>
          <div
            style={{
              width: "70%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 50,
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                  <Right>
                    <PhoneWrapper>
                      <PhoneContainer>
                        <PhoneDiv>
                          <PhoneVideo src={Video} autoPlay muted loop />
                        </PhoneDiv>
                      </PhoneContainer>
                    </PhoneWrapper>
                  </Right>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Right>
                    <div>
                      <div style={{ marginBottom: 20 }}>
                        <h1 style={{ textAlign: "start" }}>
                          See incidents unfold and get the real story from
                          people on the scene.
                        </h1>
                        <p
                          style={{
                            fontFamily: "sans-serif",
                            fontSize: 20,
                            textAlign: "start",
                            marginTop: 20,
                          }}
                        >
                          Live videos show you what's really happening. Watch
                          incidents unfold from different angles and follow
                          along until they get resolved.
                        </p>
                      </div>
                      <div style={{ marginBottom: 20 }}>
                        <h1 style={{ textAlign: "start" }}>
                          Fast, accurate information makes a meaningful
                          difference in emergencies.
                        </h1>
                        <p
                          style={{
                            fontFamily: "sans-serif",
                            fontSize: 20,
                            textAlign: "start",
                            marginTop: 20,
                          }}
                        >
                          Citizen alerts go out instantly — this can be hours
                          before Amber Alerts are even issued for children in
                          danger. This speed has been critical in acting on
                          important events like abductions and missing elderly
                          people.
                        </p>
                      </div>
                      <div style={{ marginBottom: 20 }}>
                        <h1 style={{ textAlign: "start" }}>
                          When you can, contribute to help resolve a situation.
                        </h1>
                        <p
                          style={{
                            fontFamily: "sans-serif",
                            fontSize: 20,
                            textAlign: "start",
                            marginTop: 20,
                          }}
                        >
                          You used to have to call a police tip line to help.
                          Now you can use Citizen to broadcast live video,
                          sharing relevant updates with others. You can also
                          leave comments, which have helped locate missing
                          people and share information about evacuation centers
                          during natural disasters.
                        </p>
                      </div>
                    </div>
                  </Right>
                </Grid>
              </Grid>
            </Box>
          </div>
        </HeaderContainer>
        <div
          style={{
            width: "80%",
            height: 1,
            backgroundColor: "lightgray",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 100,
            marginBottom: 100,
          }}
        />
      </DetailWrapper>

      {/* <MaskContainer>
        <SvgMask backgroundColor="white" />
      </MaskContainer> */}
    </DetailContainer>
  );
};

export default Details;
