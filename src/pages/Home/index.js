import React from "react";
import HeroSection from "../../components/HeroSection";
import LifeSavingAlerts from "../../components/LifeSavingAlerts";
import MapView from "../../components/MapView";
import Details from "../../components/Details";
import Mission from "../../components/Mission";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LifeSavingAlerts />
      <MapView />
      <Details />
      <Mission />
      <Footer />
    </>
  );
};

export default Home;
