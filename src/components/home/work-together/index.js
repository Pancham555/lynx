import Image from "next/image";
import React from "react";
// import Btn3 from "@/components/components/button/btn-3";

const WorkTogether = () => {
  return (
    <>
      <div className="px-5 py-10 md:py-16 md:px-10 flex justify-center w-full bg-theme">
        <div
          className="max-w-screen-xl h-full w-full flex flex-wrap
       items-center justify-between gap-10 p-5 rounded-md
        bg-theme-2 md:p-10 md:flex-nowrap"
        >
          <div className="md:max-w-[55%] w-full h-64 md:h-96">
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
              As a web developer, I prioritize effective collaboration with
              clear communication, respect, trust, and accountability. I
              actively listen, adapt, and aim for successful outcomes by taking
              accountability, meeting deadlines, and earning trust.
            </div>
            {/* <Btn3>Read More</Btn3> */}
          </div>
        </div>
      </div>
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)",
        }}
        className={" bg-theme w-full h-32 -scale-x-100"}
      ></div>
    </>
  );
};

export default WorkTogether;
