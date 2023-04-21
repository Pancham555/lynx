import Image from "next/image";
import React from "react";
import Btn1 from "@/components/components/button/btn-1";
import Btn2 from "@/components/components/button/btn-2";
import { useRouter } from "next/navigation";

const Accordion = () => {
  const router = useRouter();
  return (
    <div className="w-full min-h-[36rem] pt-20 pb-10 bg-gray-800 text-white flex flex-col justify-center items-center">
      <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
        <div className="md:max-w-[50%] px-5 md:px-10 w-full">
          <div className="mb-2 text-6xl font-bold leading-tight">
            Grow your business with{" "}
            <span className="text-theme">our solution</span>
          </div>
          <div className="my-5 text-xl font-medium">
            We believe in growing others by sharing our knowledge, expertise,
            and resources to help our clients and fellow freelancers achieve
            their goals.
          </div>
          <div className="flex justify-between gap-6 my-5 md:justify-start">
            <a href="#solutions">
              <Btn1>Get Started</Btn1>
            </a>
            <Btn2 onClick={() => router.push("/ai-art")}>Explore AI Art</Btn2>
          </div>
        </div>
        <div className="md:max-w-[50%] w-full h-full">
          <Image
            width={1000}
            height={1000}
            src="/training-6010.svg"
            className="w-full h-full"
            alt="Top image"
          />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
