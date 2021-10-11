import React from "react";
import "./HeroSection.css";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroLeft,
  HeroRight,
  HeroWrapper,
  HeroP,
  HeroPBold,
  ButtonsWrapper,
  ButtonsDiv,
  PhoneWrapper,
  PhoneContainer,
  PhoneDiv,
  PhoneVideo,
  HeroContentRow,
  Column1,
  Column2,
  Whitespace,
} from "./HeroElements";
import Video from "../../assets/videos/herovideo.mp4";
import Button from "../Button";
import { Button as MuiButton, Stack, useMediaQuery } from "@mui/material/";
import { Buttons, ButtonText } from "../Footer/FooterElements";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GooglePlay from "../Footer/GooglePlay";
import AppleIcon from "@mui/icons-material/Apple";
import Colors from "../../constants/Colors";
import ScrollAnimation from "react-animate-on-scroll";

const HeroSection = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFF",
        // contrastText: "white",
      },
    },
  });

  const matches = useMediaQuery("(max-width: 768px)");

  return (
    <HeroWrapper className="HeroWrapper" id="hero">
      <HeroContainer>
        <HeroContentRow>
          <Column1>
            <HeroH1>Where people get actionable news.</HeroH1>
            <HeroP>
              Cut the noise and get straight to the news that is most important
              to you. Alirtify is an intelligence-gathering platform that uses
              data from news events such as sentiments (positive, neutral,
              negative), location, and key words to glean real-time insights. We
              don’t create the news. We just make it relevant and actionable.
              Download the app to enjoy the modern news experience.
            </HeroP>
            <HeroPBold>Download Alirtify</HeroPBold>
            <ButtonsWrapper>
              <ButtonsDiv>
                <Button title="APP STORE" apple hero />
                <Button title="GOOGLE PLAY" google hero />
              </ButtonsDiv>
            </ButtonsWrapper>
            {/* <Buttons>
              <ThemeProvider theme={theme}>
                {matches ? (
                  <Stack spacing={2}>
                    <MuiButton
                      variant="outlined"
                      // fullWidth
                      startIcon={<AppleIcon />}
                    >
                      <ButtonText>App Store</ButtonText>
                    </MuiButton>
                    <MuiButton
                      variant="outlined"
                      // fullWidth
                      startIcon={<GooglePlay />}
                    >
                      <ButtonText> Google Play</ButtonText>
                    </MuiButton>
                  </Stack>
                ) : (
                  <Stack spacing={2} direction="row">
                    <MuiButton
                      variant="outlined"
                      // fullWidth
                      startIcon={<AppleIcon />}
                    >
                      <ButtonText>App Store</ButtonText>
                    </MuiButton>
                    <MuiButton
                      variant="outlined"
                      // fullWidth
                      startIcon={<GooglePlay />}
                    >
                      <ButtonText> Google Play</ButtonText>
                    </MuiButton>
                  </Stack>
                )}
              </ThemeProvider>
            </Buttons> */}
          </Column1>
          <Column2>
            <ScrollAnimation
              offset={0}
              animateOnce
              animateIn="fadeInUpSlow"
              duration={2}
              delay={500}
            >
              <PhoneWrapper>
                <PhoneContainer>
                  <PhoneDiv>
                    <PhoneVideo
                      src={Video}
                      autoPlay={true}
                      loop
                      muted
                      type="video/mp4"
                    />
                  </PhoneDiv>
                </PhoneContainer>
              </PhoneWrapper>
            </ScrollAnimation>
          </Column2>
        </HeroContentRow>
        {/* <Whitespace /> */}
      </HeroContainer>
    </HeroWrapper>
  );
};

export default HeroSection;
