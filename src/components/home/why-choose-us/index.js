import React from "react";
import Btn1 from "@/components/components/button/btn-1";
import SimpleCards from "@/components/components/cards/simple-cards";
import StepCard from "@/components/components/cards/step-card";

const WhyChooseUs = () => {
  const array = [
    { heading: "Innovative ideas", desc: "We cultivate a culture of creativity and innovation that enables us to produce unique and innovative ideas for our clients." },
    { heading: "Honest pricing", desc: "We provide transparent and honest pricing for our services, ensuring that our clients receive fair value for their investment." },
    { heading: "Dedicated support", desc: "We provide dedicated support to exceed our clients' expectations and achieve their goals." }
  ]
  const cardArray = [{ heading: "14+", desc: "Freelancers" },
  { heading: "20+", desc: "Meetings per week" },
  { heading: "24×7", desc: "Customer Service" }]
  return (
    <div className="w-full px-5 py-10 md:py-16 md:px-10 flex justify-center">
      <div className="max-w-screen-xl h-full w-full flex flex-wrap 
      items-center justify-between gap-8 md:flex-nowrap">
        <div className="md:max-w-[45%] w-full text-gray-800">
          <div className="mb-2 text-5xl font-bold leading-tight">
            Why choose us
          </div>
          <div className="my-5 text-lg font-medium text-gray-500">
            Our skilled team of freelancers delivers exceptional results
            that meet or exceed our clients&apos; goals and expectations.
            We offer personalized and reliable services across various
            industries and niches, including creative services, content
            creation, and technical solutions.
          </div>
          <div className="flex justify-center w-full gap-4 my-10 md:gap-5">
            {cardArray.map(({ heading, desc }, index) => {
              return <SimpleCards
                heading={heading}
                desc={desc}
                key={index} />
            })}
          </div>
          <div className="mb-5">
            <Btn1>More about us</Btn1>
          </div>
        </div>
        <div className="md:max-w-[55%] w-full flex-col flex gap-8">
          {array.map(({ heading, desc }, index) => {
            if (index % 2 === 0) {
              return (
                <div key={index} className="flex justify-end w-full">
                  <div className="w-[90%]">
                    <StepCard
                      heading={heading}
                      desc={desc}
                      number={index + 1} />
                  </div>
                </div>
              );
            } else {
              return (
                <div key={index} className="flex justify-start w-full">
                  <div className="w-[90%]">
                    <StepCard
                      heading={heading}
                      desc={desc}
                      number={index + 1} />
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
