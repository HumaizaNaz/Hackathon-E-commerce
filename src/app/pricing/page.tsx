import React from "react";
import Heading from "../components/pricing/Heading";
import Pricing from "../components/pricing/Subscription";
import Icons from "../components/Icons";

import Faq from "../components/pricing/Faq";
import Toggle from "../components/pricing/Toggle";
import Last from "../components/pricing/Last";


const page = () => {
  return (
    <div className="bg-slate-50">
      <Heading />
      <Toggle initialPlan={""} />
      <Pricing />

      <Icons />

      <Faq />
      <Last/>
    
    </div>
  );
};

export default page;
