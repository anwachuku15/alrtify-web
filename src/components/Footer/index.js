import React from "react";
import {
  Buttons,
  ButtonText,
  FooterBottom,
  FooterBottomWrapper,
  FooterDiv,
  FooterContainer,
  FooterTop,
  FooterTopHeaderText,
  FooterTopP,
  FooterTopWrapper,
  FooterCallToActionContainer,
  FooterEnd,
} from "./FooterElements";
// import Button from '../Button'
import { Button, Grid, Paper, Box } from "@mui/material";
import GooglePlayIcon from "../Button/GooglePlayIcon";
import { IoLogoApple } from "react-icons/io";
import AppleIcon from "@mui/icons-material/Apple";
import GooglePlay from "./GooglePlay";
import AlrtifyLogo from "./AlrtifyLogo";

import Colors from "../../constants/Colors";

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { useMediaQuery } from "@mui/material";
import { AppStore, PlayStore } from "./DownloadApp";
import SocialLinks from "./FooterIcons";
import ScrollAnimation from "react-animate-on-scroll";

const Footer = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 992,
        lg: 1024,
        xl: 1536,
      },
    },
  });

  const Item = styled(Paper)(({ theme }) => ({
    // padding: 30,
    textAlign: "center",
    color: "white",
    backgroundColor: "transparent",
    boxShadow: "none",
    textTransform: "uppercase",
    fontVariant: "small-caps",
  }));

  const matches = useMediaQuery("(max-width: 700px)");
  const footerQuery = useMediaQuery("(max-width: 992px)");
  const fontQuery = useMediaQuery("(max-width: 768px)");

  return (
    <FooterContainer>
      <FooterTop>
        <div
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "lightgray",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 100,
            marginBottom: 70,
          }}
        />
        <FooterTopWrapper>
          <FooterTopHeaderText>
            Stay in-tune with your world.
          </FooterTopHeaderText>
          <FooterTopP>Download For Free</FooterTopP>
          <div>
            <Buttons>
              {matches ? (
                <div>
                  <Stack
                    spacing={2}
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "30%",
                        minWidth: 135,
                        minHeight: 45,
                      }}
                    >
                      <ScrollAnimation
                        offset={0}
                        animateOnce
                        animateIn="fadeInLeft"
                        duration={1.4}
                      >
                        <a
                          href="https://apps.apple.com/us/app/shelly-news/id1535183478"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AppStore />
                        </a>
                      </ScrollAnimation>
                    </div>
                    <div
                      style={{
                        width: "30%",
                        minWidth: 135,
                        minHeight: 45,
                      }}
                    >
                      <ScrollAnimation
                        offset={0}
                        animateOnce
                        animateIn="fadeInRight"
                        duration={1.4}
                      >
                        <a
                          href="https://play.google.com/store/apps/details?id=com.shellynews"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <PlayStore />
                        </a>
                      </ScrollAnimation>
                    </div>
                  </Stack>
                </div>
              ) : (
                <Stack spacing={5} direction="row">
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                      // backgroundColor: "red",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        // backgroundColor: "blue",
                        // margin: "auto",
                        // width: "75%",
                        width: "fit-content",
                      }}
                    >
                      <div
                        style={{
                          width: "40%",
                          minWidth: 135,
                          minHeight: 45,
                          marginRight: 10,
                        }}
                      >
                        <ScrollAnimation
                          offset={0}
                          animateOnce
                          animateIn="fadeInLeft"
                          duration={1.4}
                        >
                          <a
                            href="https://apps.apple.com/us/app/shelly-news/id1535183478"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <AppStore />
                          </a>
                        </ScrollAnimation>
                      </div>
                      <div
                        style={{
                          width: "40%",
                          minWidth: 135,
                          minHeight: 45,
                          marginLeft: 10,
                        }}
                      >
                        <ScrollAnimation
                          offset={0}
                          animateOnce
                          animateIn="fadeInRight"
                          duration={1.4}
                        >
                          <a
                            href="https://play.google.com/store/apps/details?id=com.shellynews"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <PlayStore />
                          </a>
                        </ScrollAnimation>
                      </div>
                    </div>
                  </div>
                </Stack>
              )}
            </Buttons>
          </div>

          <FooterEnd>
            <ThemeProvider theme={theme}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                  <Grid
                    item
                    lg={3}
                    md={12}
                    sm={12}
                    xs={12}
                    order={{ lg: 1, md: 3, sm: 3, xs: 3 }}
                  >
                    <Item
                      style={{
                        fontSize: footerQuery ? 10 : 13,
                        padding: "0 5",
                        marginTop: footerQuery && 10,
                      }}
                    >
                      © 2021 Shelly News LLC
                    </Item>
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    md={12}
                    sm={12}
                    xs={12}
                    order={{ lg: 2, md: 1, sm: 1, xs: 1 }}
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      marginBottom: footerQuery && 10,
                    }}
                  >
                    <Item
                      style={{
                        alignSelf: "center",
                        // width: "33.3333%",
                        width: "fit-content",
                        fontSize: fontQuery ? 10 : 13,
                        paddingLeft: 10,
                        paddingRight: 10,
                      }}
                    >
                      Terms and Conditions
                    </Item>
                    <Item
                      style={{
                        alignSelf: "center",
                        // width: "33.3333%",
                        width: "fit-content",
                        textAlignt: "center",
                        fontSize: fontQuery ? 10 : 13,
                        paddingLeft: 10,
                        paddingRight: 10,
                      }}
                    >
                      Privacy Policy
                    </Item>
                    <Item
                      style={{
                        alignSelf: "center",
                        // width: "33.3333%",
                        width: "fit-content",
                        fontSize: fontQuery ? 10 : 13,
                        paddingLeft: 10,
                        paddingRight: 10,
                      }}
                    >
                      Contact Us
                    </Item>
                  </Grid>
                  <Grid
                    item
                    lg={3}
                    md={12}
                    sm={12}
                    xs={12}
                    order={{ lg: 3, md: 2, sm: 2, xs: 2 }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {SocialLinks.map((social, index) => {
                        return (
                          <Item
                            key={index}
                            style={{
                              fontSize: 13,
                              padding: "0 5",
                            }}
                          >
                            <a
                              style={{
                                textDecoration: "none",
                              }}
                              href={social.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {
                                <div
                                  style={{
                                    width: 25,
                                    height: 25,
                                    marginLeft: 3,
                                    marginRight: 3,
                                  }}
                                >
                                  {social.icon}
                                </div>
                              }
                            </a>
                          </Item>
                        );
                      })}
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </ThemeProvider>
          </FooterEnd>
        </FooterTopWrapper>
      </FooterTop>
    </FooterContainer>
  );
};

export default Footer;
