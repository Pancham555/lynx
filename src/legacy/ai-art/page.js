"use client";
import Accordion from "@/components/ai-art/accordion";
import ShowCaseWork from "@/components/ai-art/showcase-art";
import React from "react";
import WorkLayout from "./layout";

const Work = () => {
  return (
    <WorkLayout topLayout={<Accordion />}>
      <ShowCaseWork />
      {/* //{" "} */}
      {/* <div className="py-24 text-5xl font-bold text-center">Our Work Page</div> */}
    </WorkLayout>
  );
};

export default Work;
