import React from "react";
import { MapViewCards } from "./CardData";
import { GridWrapper, GridItem } from "./MapViewElements";
import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import ScrollAnimation from "react-animate-on-scroll";

export const AnimatedGrid = () => {
  return (
    <GridWrapper>
      {MapViewCards.map((card, index) => {
        let delay;
        if (index === 0) delay = 0;
        else if (index === 1) delay = 200;
        else if (index === 2) delay = 600;

        return (
          <ScrollAnimation
            offset={0}
            animateOnce={true}
            animateIn={"fadeInUp"}
            duration={1.5}
            delay={delay}
            key={index}
          >
            <GridItem>
              <div style={{ width: 40, marginRight: 20 }}>
                <div style={{ height: 40 }}>{card.icon}</div>
              </div>
              <div>
                <h2
                  style={{
                    fontSize: 20,
                    textAlign: "left",
                    paddingBottom: 16,
                  }}
                >
                  {card.header}
                </h2>
                <p
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 20,
                    textAlign: "left",
                  }}
                >
                  {card.body}
                  {card.body2 && (
                    <>
                      <br />
                      <br />
                      {card.body2}
                    </>
                  )}
                </p>
              </div>
            </GridItem>
          </ScrollAnimation>
        );
      })}
    </GridWrapper>
  );
};

const Item = styled(Paper)(({ theme }) => ({
  padding: 30,
  textAlign: "center",
  color: "white",
  backgroundColor: "transparent",
  boxShadow: "none",
}));

export const MuiGrid = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {MapViewCards.map((card, index) => {
          let delay;
          if (index === 0) delay = 0;
          else if (index === 1) delay = 200;
          else if (index === 2) delay = 600;

          return (
            <Grid item md={4} xs={12}>
              <ScrollAnimation
                offset={0}
                animateOnce={true}
                animateIn={"fadeInUp"}
                duration={1.5}
                delay={delay}
                key={index}
              >
                <Item
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                  }}
                >
                  <div style={{ minWidth: 40, marginRight: 20 }}>
                    <div style={{ height: 40 }}>{card.icon}</div>
                  </div>
                  <div>
                    <h2
                      style={{
                        fontSize: 20,
                        textAlign: "left",
                        paddingBottom: 16,
                      }}
                    >
                      {card.header}
                    </h2>
                    <p
                      style={{
                        fontFamily: "sans-serif",
                        fontSize: 20,
                        textAlign: "left",
                      }}
                    >
                      {card.body}
                      {card.body2 && (
                        <>
                          <br />
                          <br />
                          {card.body2}
                        </>
                      )}
                    </p>
                  </div>
                </Item>
              </ScrollAnimation>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
