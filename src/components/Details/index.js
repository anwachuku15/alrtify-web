import React from "react";
import "./Details.css";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
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
  PhoneWrapper,
  PhoneContainer,
  PhoneDiv,
  PhoneVideo,
  MaskContainer,
} from "./DetailsElements";
import SvgMask from "../MapView/SvgMask";
import { BackLayer, BackLayerImage } from "../MapView/MapViewElements";
import Video from "../../assets/videos/herovideo.mp4";
import {
  NewsFeedIcon,
  MyCircleIcon,
  TrendingIcon,
  MicIcon,
  GlobeIcon,
  VideoIcon,
  LockedIcon,
  KeyboardIcon,
  AddPeopleIcon,
} from "../Icons";
import ScrollAnimation from "react-animate-on-scroll";
import { DetailsCards } from "./CardData";

const Details = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 900,
        lg: 1024,
        xl: 1536,
      },
    },
  });
  const Left = styled(Paper)(({ theme }) => ({
    // padding: 100,
    textAlign: "center",
    color: "white",
    backgroundColor: "transparent",
    boxShadow: "none",
  }));
  const Right = styled(Paper)(({ theme }) => ({
    paddingTop: 50,
    paddingRight: 50,
    paddingBottom: 50,
    paddingLeft: 0,
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
        <HeaderContainer>
          <LiveIndicatorContainer>
            <div className="live-icon">
              {/* <LivePill> */}
              <LivePillCircle />
              <LivePillTextWrapper>
                <LivePillText>LIVE</LivePillText>
              </LivePillTextWrapper>
              {/* </LivePill> */}
            </div>
          </LiveIndicatorContainer>

          <DetailHeader>
            <DetailHeaderText>
              Validate the story with real facts from people on the ground.
            </DetailHeaderText>
          </DetailHeader>
          <div
            style={{
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 50,
            }}
          >
            <ThemeProvider theme={theme}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container>
                  <Grid item lg={1} />
                  <Grid item lg={4} md={6} sm={6} xs={12}>
                    <Left>
                      <ScrollAnimation
                        offset={0}
                        animateOnce
                        animateIn="fadeInUp"
                        duration={1.4}
                      >
                        <PhoneWrapper>
                          <PhoneContainer>
                            <PhoneDiv>
                              <PhoneVideo src={Video} autoPlay muted loop />
                            </PhoneDiv>
                          </PhoneContainer>
                        </PhoneWrapper>
                      </ScrollAnimation>
                    </Left>
                  </Grid>
                  <Grid item lg={1} />
                  <Grid item md={6} sm={6} xs={12}>
                    <Right>
                      <div>
                        {DetailsCards.map((card, index) => {
                          let delay;
                          if (index === 0) delay = 0;
                          else if (index === 1) delay = 200;
                          else if (index === 2) delay = 400;

                          return (
                            <ScrollAnimation
                              offset={0}
                              animateOnce
                              animateIn="fadeInRight"
                              duration={1.5}
                              delay={delay}
                            >
                              <div
                                style={{ marginBottom: 50, display: "flex" }}
                              >
                                <div style={{ minWidth: 40, marginRight: 20 }}>
                                  <div style={{ height: 40 }}>{card.icon}</div>
                                </div>

                                <div>
                                  <h1 style={{ textAlign: "start" }}>
                                    {card.header}
                                  </h1>
                                  <p
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: 20,
                                      textAlign: "start",
                                      marginTop: 20,
                                      lineHeight: 1.4,
                                    }}
                                  >
                                    {card.body}
                                  </p>
                                </div>
                              </div>
                            </ScrollAnimation>
                          );
                        })}
                      </div>
                    </Right>
                  </Grid>
                </Grid>
              </Box>
            </ThemeProvider>
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
    </DetailContainer>
  );
};

export default Details;
