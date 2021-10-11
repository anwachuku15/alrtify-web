import React from "react";
import HeroSection from "../../components/HeroSection";
import HeroSection1 from "../../components/HeroSection1";
import TimeSavingAlerts from "../../components/TimeSavingAlerts";
import MapView from "../../components/MapView";
import Details from "../../components/Details";
import Mission from "../../components/Mission";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TimeSavingAlerts />
      <MapView />
      <Details />
      <Mission />
      <Footer />
    </>
  );
};

export default Home;
