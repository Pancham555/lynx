import Image from "next/image";
import React from "react";
import Btn3 from "@/components/components/button/btn-3";

const WorkTogether = () => {
  return (
    <div className="px-5 py-10 md:py-16 md:px-10 flex justify-center w-full">
      <div
        className="max-w-screen-xl h-full w-full flex flex-wrap
       items-center justify-between gap-10 p-5 rounded-md
        bg-theme-2 md:p-10 md:flex-nowrap"
      >
        <div className="md:max-w-[55%] w-full h-80 md:h-[28rem]">
          <Image
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="work together"
            width={800}
            height={300}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        <div className="text-white md:max-w-[45%] w-full">
          <div className="mb-2 text-4xl font-semibold leading-tight">
            Collaborating for Success with Team Members
          </div>
          <div className="my-5 text-xl font-medium">
            As a web developer, I prioritize effective collaboration with team
            members. My approach involves clear communication, respectful
            feedback, adaptability, trust, and accountability. I actively
            listen, provide updates, and focus on solutions. I'm open to
            learning and can pivot quickly. By taking full accountability,
            meeting deadlines, and earning trust, I aim to achieve successful
            outcomes for all.
          </div>
          {/* <Btn3>Read More</Btn3> */}
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
