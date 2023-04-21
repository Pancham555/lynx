import Image from "next/image";
import React from "react";
import Btn3 from "@/components/components/button/btn-3";

const WorkTogether = () => {
  return (
    <div className="px-5 py-10 md:py-16 md:px-10 flex justify-center w-full">
      <div className="max-w-screen-xl h-full w-full flex flex-wrap
       items-center justify-between gap-10 p-5 rounded-md
        bg-theme-2 md:p-10 md:flex-nowrap">
        <div className="md:max-w-[55%] w-full h-72 md:h-96">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="work together"
            width={800}
            height={300}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        <div className="text-white md:max-w-[45%] w-full">
          <div className="mb-2 text-3xl font-bold leading-tight">
            How We Work Together to Deliver Exceptional Results
          </div>
          <div className="my-5 text-base font-semibold">
            We understand the importance of teamwork and collaboration
            in delivering exceptional results. We foster a culture of
            open communication, mutual respect, and shared goals, which
            enables our team of talented freelancers to work together
            seamlessly.
          </div>
          <Btn3>Read More</Btn3>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
