import React from "react";

const Btn1 = ({
  onClick,
  children,
  bgcolor = "bg-theme-2",
  textcolor = "text-white",
}) => {
  return (
    <div
      onClick={onClick}
      style={{ textSizeAdjust: "20%" }}
      className={`inline-block cursor-pointer px-3 lg:px-6 py-4 font-semibold
           rounded-md text-lg lg:text-xl w-auto text-center ${bgcolor} ${textcolor}`}
    >
      {children}
    </div>
  );
};

export default Btn1;
