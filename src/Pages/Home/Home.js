import React from "react";
import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import Testimonials from "../../Components/Testimonials/Testimonials";
import VissionMission from "../../Components/VissionMission/VissionMission";

const Home = () => {
  return (
    <>
      <Banner />
      <VissionMission />
      <Services />
      <Testimonials />
    </>
  );
};

export default Home;
