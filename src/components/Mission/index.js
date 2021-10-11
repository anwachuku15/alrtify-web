import React, { useState, useEffect } from "react";
import { styled, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  MissionContainer,
  MissionContentHeader,
  BackLayer,
  BackLayerImage,
  MissionContentInfo,
} from "./MissionElements";
import SvgMask from "../MapView/SvgMask";
import {
  MaskContainer,
  MapViewContentContainer,
  MapViewContentWrapper,
  MapViewContentPopups,
} from "../MapView/MapViewElements";
import AnimatedGrid from "./AnimatedGrid";

const Mission = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const HeaderText = styled(Paper)(({ theme }) => ({
    paddingTop: 30,
    paddingLeft: 30,
    // paddingRight: 30,
    paddingBottom: 0,
    color: "white",
    backgroundColor: "transparent",
    boxShadow: "none",
    textAlign: "start",
  }));

  return (
    <MissionContainer>
      <BackLayer>
        <BackLayerImage offsetY={offsetY} />
      </BackLayer>
      <MaskContainer>
        <SvgMask backgroundColor={"white"} />
      </MaskContainer>

      <MapViewContentContainer>
        <MapViewContentWrapper>
          <MapViewContentPopups>
            {/* <div style={{ height: 500 }}></div> */}
            <div style={{ height: 100 }}></div>
          </MapViewContentPopups>

          <MissionContentHeader>
            <HeaderText style={{}}>
              <h2 style={{ fontSize: 48 }}>Knowledge is power.</h2>
            </HeaderText>
          </MissionContentHeader>

          <MissionContentInfo>
            <AnimatedGrid />
          </MissionContentInfo>
        </MapViewContentWrapper>
      </MapViewContentContainer>
    </MissionContainer>
  );
};

export default Mission;
