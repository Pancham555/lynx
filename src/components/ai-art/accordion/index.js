import Image from "next/image";
import React from "react";
import './style.css'
const Accordion = () => {
  return (
    <div className="relative mb-10 min-h-[36rem] pt-36 pb-10 md:pt-48 px-5 md:px-10">
      <Image
        src="https://cdn.leonardo.ai/users/3bf5e16f-0677-4834-a7f4-f1b6ef065f57/generations/72d6816b-4f1b-493c-ad88-7a82dc6b98df/Leonardo_Diffusion_a_dead_person_with_a_scythe_in_the_middle_o_0.jpg"
        // src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=100"
        width={10000}
        height={4000}
        quality={100} alt="background image"
        className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full -z-10"
      />
      <div className="">
        <div className="z-40 flex justify-center w-full">
          <div
            className="w-full text-5xl font-bold text-center text-white break-words md:text-7xl md:w-10/12 text-background"
          >
            Revolutionizing the world through innovative collaboration!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
