import Image from "next/image";
import React from "react";
import Btn1 from "@/components/components/button/btn-1";

const InterestedInWork = () => {
  return (
    <div className="flex justify-center px-5 py-10 md:py-16 md:px-10">
      <div className="flex flex-wrap items-center justify-between w-full h-full max-w-screen-xl gap-10 p-5 bg-gray-800 rounded-md md:p-10 md:flex-nowrap">
        <div className="md:max-w-[60%] w-full h-72 md:h-96">
          <Image
            src="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="interested in work"
            width={800} height={300}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        <div className="text-white md:max-w-[40%] w-full">
          <div className="mb-12 text-5xl font-bold leading-tight">
            Interested to work with us
          </div>
          <div className="my-5">
            <Btn1 textcolor="text-gray-800" bgcolor="bg-white">
              <a href="mailto:panchamb63@gmail.com">Contact us</a>
            </Btn1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestedInWork;
