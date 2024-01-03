import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutUs from "../../components/AboutUs/AboutUs";
import Service from "../../components/Services/Services";
import Reliability from "../../components/Reliability/Reliability";
import InSight from "../../components/InSight/InSight";
import IssueTracker from "../../components/IssueTracker/IssueTracker";
import IntroducingStreamingApi from "../../components/IntroducingStreamingApi/IntroducingStreamingApi";
import Faq from "../../components/Faq/Faq";
import GetStartedWithPrima from "../../components/GetStartedWithPrima/GetStartedWithPrima";
import Testimoinals from "../../components/Testimoinals/Testimoinals";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Service />
      <InSight />
      <Reliability />
      <IssueTracker />
      <IntroducingStreamingApi />
      <Faq />
      <Testimoinals />
      <GetStartedWithPrima />
    </>
  );
};

export default Home;
