import React from "react";
import {
  HeroBottomDiv,
  HeroContainer,
  HeroContent,
  HeroLeft,
  HeroLeftButtons,
  HeroLeftHeader,
  HeroLeftP,
  HeroLeftP2,
  HeroPhoneContainer,
  HeroPhoneVideo,
  HeroPhoneVideoWrapper,
  HeroPhoneWrapper,
  HeroRight,
  HeroWrapper,
} from "./HeroElements";
import Button from "../Button";
import Video from "../../assets/videos/herovideo.mp4";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroContent>
          <HeroLeft>
            <HeroLeftHeader>Where people protect each other.</HeroLeftHeader>
            <HeroLeftP>
              Connect and live more safely. Citizen is a personal safety network
              that empowers you to protect yourself and the people and places
              you care about. Download for access to real-time 911 alerts,
              instant help from crisis responders, and safety tracking for
              friends and families.
            </HeroLeftP>
            <HeroLeftP2>Download Citizen</HeroLeftP2>
            <HeroLeftButtons>
              <Button title="APP STORE" apple hero />
              <Button title="GOOGLE PLAY" google hero />
            </HeroLeftButtons>
          </HeroLeft>
          <HeroRight>
            <HeroPhoneContainer>
              <HeroPhoneWrapper>
                <HeroPhoneVideoWrapper>
                  <HeroPhoneVideo
                    src={Video}
                    autoPlay
                    loop
                    muted
                    type="video/mp4"
                  />
                </HeroPhoneVideoWrapper>
              </HeroPhoneWrapper>
            </HeroPhoneContainer>
          </HeroRight>
        </HeroContent>
      </HeroWrapper>
      {/* <HeroBottomDiv /> */}
    </HeroContainer>
  );
};

export default HeroSection;
