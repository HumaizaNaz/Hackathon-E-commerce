import React, { Suspense } from "react";
import Filter from "@/app/components/Filter";  // Assuming Filter is your component

const CategoryPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Filter />
    </Suspense>
  );
};

export default CategoryPage;
