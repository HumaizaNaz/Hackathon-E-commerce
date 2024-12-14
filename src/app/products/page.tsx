import React from "react";
import PagesProduts from "../components/productpage/PagesProduts";
import Description from "../components/productpage/Description";
import Icons from "../components/Icons";

import Product from "../components/productpage/Product";

const page = () => {
  return (
    <div>
      <PagesProduts />
      <Description />
      <Product />
      <Icons />
     
    </div>
  );
};

export default page;
