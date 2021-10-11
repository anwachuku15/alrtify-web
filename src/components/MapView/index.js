/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
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
  GridWrapper,
} from "./MapViewElements";
import SvgMask from "./SvgMask";
import "./MapView.css";
import { MuiGrid } from "./AnimatedGrid";

const MapView = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MapViewContainer>
      <BackLayer>
        <BackLayerImage offsetY={offsetY} />
      </BackLayer>
      <MapViewWrapper>
        <MaskContainer>
          <SvgMask backgroundColor="white" />
        </MaskContainer>
        <MapViewContentContainer>
          <MapViewContentWrapper>
            <MapViewContentHeader>
              <h2 style={{ fontSize: 48 }}>
                Your world is <br /> only a click away.{" "}
              </h2>
            </MapViewContentHeader>
            <MapViewContentPopups>
              <div style={{ height: 500 }}></div>
              <div style={{ height: 160 }}></div>
            </MapViewContentPopups>
          </MapViewContentWrapper>
        </MapViewContentContainer>
      </MapViewWrapper>

      <MapViewContentInfo>
        <MuiGrid />
      </MapViewContentInfo>
    </MapViewContainer>
  );
};

export default MapView;
