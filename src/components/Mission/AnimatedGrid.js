import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { MissionCards } from "./CardData";
import ScrollAnimation from "react-animate-on-scroll";

const AnimatedGrid = () => {
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
  const Item = styled(Paper)(({ theme }) => ({
    padding: 30,
    textAlign: "center",
    color: "white",
    backgroundColor: "transparent",
    boxShadow: "none",
  }));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {MissionCards.map((card, index) => {
            let delay;
            if (index === 0) delay = 0;
            else if (index === 1) delay = 100;
            else if (index === 2) delay = 200;

            return (
              <Grid item lg={4} md={12}>
                <ScrollAnimation
                  offset={0}
                  animateOnce={true}
                  animateIn={"fadeInUp"}
                  duration={1}
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
                          fontSize: 18,
                          textAlign: "left",
                          fontFamily: "sans-serif",
                        }}
                      >
                        {card.body}
                      </p>
                    </div>
                  </Item>
                </ScrollAnimation>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default AnimatedGrid;
