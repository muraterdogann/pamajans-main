"use client"
import React from "react";

import Partners from "@/component/partners/partners";
import Hero_6 from "@/component/hero/hero";
import Testimonial from "@/component/testimonial/testimonial";
import Faq from "@/component/faq/faq";
import Cta from "@/component/cta/cta";
import WalletFeature from "@/component/wallet-feature";
import TrustedPartner from "@/component/dao/trustedPartners";


const Home = () => {
  return (
    <>
     
      <Hero_6 />
      <TrustedPartner />
      <WalletFeature />
      <Partners />
       <Testimonial />
      <Faq />
      <Cta />
    </>
  );
};

export default Home;
