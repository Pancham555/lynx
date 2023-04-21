import React from "react";

const SimpleCards = ({ heading = "20+", desc = "Instructors" }) => {
  return (
    <div className="inline-block font-bold text-center">
      <div className=" text-[2rem] mb-2">{heading}</div>
      <div className="text-[1.2rem] font-semibold">{desc}</div>
    </div>
  );
};

export default SimpleCards;
