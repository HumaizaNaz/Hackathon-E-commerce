import React from "react";

import CardAbout from '../components/about/Cardabout'
import Home from "../components/about/Home";
import BlueCard from "../components/about/BlueCard";
import Icons from "../components/Icons";
import Big from "../components/about/Big";
import Status from "../components/about/Status";
import Video from "../components/about/Video";

const page = () => {
  return (
    <div>
      <Home />
      <Status />
      <Big />
      <Video />
   <CardAbout/>
      <Icons />
      <BlueCard />
 
    </div>
  );
};

export default page;
