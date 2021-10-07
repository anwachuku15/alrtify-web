import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroLeft,
  HeroRight,
  HeroWrapper,
  HeroP,
  HeroPBold,
  PhoneWrapper,
  PhoneContainer,
  PhoneDiv,
  PhoneVideo,
  HeroContentRow,
  Column1,
  Column2,
} from "./HeroElements";
import Video from "../../assets/videos/herovideo.mp4";
import Button from "../Button";

const HeroSection = () => {
  return (
    <HeroWrapper className="HeroWrapper" id="hero">
      <HeroContainer>
        <HeroContentRow>
          <Column1>
            <HeroH1>Where people protect each other.</HeroH1>
            <HeroP>
              Connect and live more safely. Citizen is a personal safety network
              that empowers you to protect yourself and the people and places
              you care about. Download for access to real-time 911 alerts,
              instant help from crisis responders, and safety tracking for
              friends and families.
            </HeroP>
            <HeroPBold>Download Citizen</HeroPBold>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 20,
              }}
            >
              <div style={{ marginRight: 15 }}>
                <Button title="APP STORE" apple />
              </div>
              <Button title="GOOGLE PLAY" google />
            </div>
          </Column1>
          <Column2>
            <PhoneWrapper>
              <PhoneContainer>
                <PhoneDiv>
                  <PhoneVideo
                    src={Video}
                    autoPlay
                    loop
                    muted
                    type="video/mp4"
                  />
                </PhoneDiv>
              </PhoneContainer>
            </PhoneWrapper>
          </Column2>
        </HeroContentRow>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default HeroSection;
