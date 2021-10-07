import React from "react";
import {
  Buttons,
  ButtonText,
  FooterBottom,
  FooterBottomWrapper,
  FooterContainer,
  FooterTop,
  FooterTopHeaderText,
  FooterTopP,
  FooterTopWrapper,
  FooterBottomLeft,
  FooterBottomRight,
  FooterGrid,
  FooterLogo,
  FooterLinks,
  FooterLinksColumn,
  LinksHeader,
} from "./FooterElements";
// import Button from '../Button'
import Button from "@mui/material/Button";
import GooglePlayIcon from "../Button/GooglePlayIcon";
import { IoLogoApple } from "react-icons/io";
import AppleIcon from "@mui/icons-material/Apple";
import GooglePlay from "./GooglePlay";
import AlrtifyLogo from "./AlrtifyLogo";

import Colors from "../../constants/Colors";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { useMediaQuery } from "@mui/material";

const Footer = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFF",
        // contrastText: "white",
      },
    },
  });

  const matches = useMediaQuery("(max-width: 580px)");

  return (
    <FooterContainer>
      <FooterTop>
        <FooterTopWrapper>
          <FooterTopHeaderText>Protect your world.</FooterTopHeaderText>
          <FooterTopP>Download For Free</FooterTopP>
          <Buttons>
            <ThemeProvider theme={theme}>
              {matches ? (
                <Stack spacing={2}>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<GooglePlay />}
                  >
                    <ButtonText> Google Play</ButtonText>
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<AppleIcon />}
                  >
                    <ButtonText>App Store</ButtonText>
                  </Button>
                </Stack>
              ) : (
                <Stack spacing={5} direction="row">
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<GooglePlay />}
                  >
                    <ButtonText> Google Play</ButtonText>
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<AppleIcon />}
                  >
                    <ButtonText>App Store</ButtonText>
                  </Button>
                </Stack>
              )}
            </ThemeProvider>
          </Buttons>
        </FooterTopWrapper>
      </FooterTop>
      <FooterBottom>
        <FooterBottomWrapper>
          {/* <FooterBottomLeft>
            <h1>CITIZEN</h1>
          </FooterBottomLeft>
          <FooterBottomRight>
            <h1>CITIZEN</h1>
          </FooterBottomRight> */}
          <FooterGrid>
            <FooterLogo>
              <div
                style={{
                  width: "50%",
                  height: "50%",
                  backgroundColor: "transparent",
                }}
              >
                <AlrtifyLogo />
              </div>
            </FooterLogo>
            <FooterLinks>
              <FooterLinksColumn>
                <LinksHeader>Company</LinksHeader>
              </FooterLinksColumn>
            </FooterLinks>
          </FooterGrid>
        </FooterBottomWrapper>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
