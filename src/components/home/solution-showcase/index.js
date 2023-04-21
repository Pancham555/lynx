"use client";
import React from "react";
import Slider from "@/components/components/slider";

const SolutionShowcase = () => {
  return (
    <div id="solutions" className="flex flex-col items-center justify-center w-full px-5 py-10 bg-white md:py-16 md:px-10">
      <div className="flex flex-col w-full max-w-screen-xl h-full">
        <div className="md:max-w-[60%] w-full md:pt-20 pt-10 pb-10 md:pb-20">
          <div className="text-5xl font-extrabold leading-tight text-gray-800">
            We Provide The Best For Your Business Development
          </div>
          <div className="my-5 text-lg font-medium text-gray-500">
            We believe that providing the best services requires a deep understanding of our clients&apos; needs and goals.Through clear communication, we work collaboratively to ensure that our team of talented freelancers delivers high-quality work that meets or exceeds our clients&apos; expectations.
          </div>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default SolutionShowcase;
