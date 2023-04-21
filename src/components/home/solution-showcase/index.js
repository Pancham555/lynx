"use client";
import React from "react";
import Slider from "@/components/components/slider";

const SolutionShowcase = () => {
  return (
    <div
      id="solutions"
      className="flex flex-col items-center justify-center w-full px-5 py-10 bg-white md:py-16 md:px-10"
    >
      <div className="flex flex-col w-full max-w-screen-xl h-full">
        <div className="md:max-w-[60%] w-full md:pt-20 pt-10 pb-10 md:pb-20">
          <div className="text-5xl font-extrabold leading-tight text-gray-800">
            Strategies for Effective Work in a Business Environment
          </div>
          <div className="my-5 text-lg font-medium text-gray-500">
            As a web developer, I prioritize professionalism, adaptability,
            communication, and teamwork to succeed in a business environment. I
            understand the company culture, communicate clearly, collaborate
            effectively with team members, and remain open to change. By
            utilizing these strategies, I aim to achieve positive outcomes and
            contribute to the overall success of the business.
          </div>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default SolutionShowcase;
