import React from "react";
import Heading from "../components/pricing/Heading";
import Pricing from "../components/pricing/Pricing";
import Icons from "../components/Icons";
import Footer from "../components/Footer";
import Faq from "../components/pricing/Faq";
import Toggle from "../components/pricing/Toggle";
import Last from "../components/pricing/Last";


const page = () => {
  return (
    <div className="bg-slate-50">
      <Heading />
      <Toggle />
      <Pricing />

      <Icons />

      <Faq />
      <Last/>
    
      <Footer />
    </div>
  );
};

export default page;
