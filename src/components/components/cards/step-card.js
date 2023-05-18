import React from "react";

const StepCard = ({
  number = 1,
  heading = `Innovative ideas`,
  desc = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facere nostrum ad.`,
}) => {
  return (
    <div className={`rounded-md bg-theme-2 flex text-white`}>
      <div className="md:max-w-[10%] flex justify-center items-center">
        <div className="text-5xl font-bold md:p-5 p-2.5">{number}</div>
      </div>
      <div className="md:max-w-[90%] py-4 pr-2.5 md:pr-5">
        <div className="text-3xl font-medium leading-tight mb-2">{heading}</div>
        <div className="text-lg font-normal">{desc}</div>
      </div>
    </div>
  );
};

export default StepCard;
