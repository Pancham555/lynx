import React from "react";
import Btn1 from "@/components/components/button/btn-1";
import SimpleCards from "@/components/components/cards/simple-cards";
import StepCard from "@/components/components/cards/step-card";

const WhyChooseUs = () => {
  const array = [
    {
      heading: "Technical Skills",
      desc: " Deep understanding of programming languages, web development frameworks, and technologies to create custom solutions the requirements.",
    },
    {
      heading: "Attention to Detail",
      desc: "Highly detail-oriented and committed to delivering high-quality work that meets or exceeds expectations.",
    },
    {
      heading: "Effective Communication",
      desc: " Excellent communication skills to effectively collaborate with clients, stakeholders, and team members to achieve project goals.",
    },
  ];
  const cardArray = [
    { heading: "14+", desc: "Freelancers" },
    { heading: "20+", desc: "Meetings per week" },
    { heading: "24×7", desc: "Customer Service" },
  ];
  return (
    <div className="w-full px-5 py-10 md:py-16 md:px-10 flex justify-center">
      <div
        className="max-w-screen-xl h-full w-full flex flex-wrap 
      items-center justify-between gap-8 md:flex-nowrap"
      >
        <div className="md:max-w-[55%] w-full text-gray-800">
          <div className="mb-2 text-6xl text-center md:text-left font-bold leading-tight">
            Why choose me?
          </div>
          <div className="my-5 text-2xl md:font-medium text-gray-500">
            With a strong technical background in web technologies, creativity,
            and meticulous attention to detail, I am a passionate web developer
            who keeps up with the latest trends and technologies. My excellent
            communication skills and dedication to producing the best results
            make me an ideal candidate for any web development position.
          </div>
          {/* <div className="flex justify-center w-full gap-4 my-10 md:gap-5">
            {cardArray.map(({ heading, desc }, index) => {
              return <SimpleCards heading={heading} desc={desc} key={index} />;
            })}
          </div> */}
          {/* <div className="mb-5">
            <Btn1>More about us</Btn1>
          </div> */}
        </div>
        <div className="md:max-w-[45%] w-full flex-col flex gap-6">
          {array.map(({ heading, desc }, index) => {
            if (index % 2 === 0) {
              return (
                <div key={index} className="flex justify-end w-full">
                  <div className="md:w-[90%] w-full">
                    <StepCard
                      heading={heading}
                      desc={desc}
                      number={index + 1}
                    />
                  </div>
                </div>
              );
            } else {
              return (
                <div key={index} className="flex justify-start w-full">
                  <div className="md:w-[90%] w-full">
                    <StepCard
                      heading={heading}
                      desc={desc}
                      number={index + 1}
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
