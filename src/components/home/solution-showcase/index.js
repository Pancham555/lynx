"use client";
import Image from "next/image";
import React from "react";

const SolutionShowcase = () => {
  return (
    <>
      <div
        id="solutions"
        className="flex flex-col items-center justify-center w-full px-5 md:pb-16 pb-10 py-0 bg-white md:px-10"
      >
        <div className="flex md:flex-nowrap flex-wrap w-full max-w-screen-xl h-full md:pt-20 pt-10 pb-10 md:pb-20">
          <div className="w-full flex flex-col justify-end">
            <div></div>
            <div className="w-full my-auto ">
              <div className="text-5xl font-extrabold leading-tight text-gray-800">
                Strategies for Effective Work in a Business Environment
              </div>
              <div className="my-5 text-xl font-medium text-gray-500">
                As a web developer, I prioritize professionalism, adaptability,
                communication, and teamwork to succeed in a business
                environment. I understand the company culture, communicate
                clearly, collaborate effectively with team members, and remain
                open to change. By utilizing these strategies, I aim to achieve
                positive outcomes and contribute to the overall success of the
                business.
              </div>
            </div>
          </div>
          <div className="w-full m-auto overflow-hidden">
            <Image
              width={1000}
              height={1000}
              src="/statistics-6010.svg"
              className="w-full h-full z-50 my-auto scale-[1.3] md:scale-[1.1]"
              alt="Top image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionShowcase;
