import React from "react";
import { ImArrowRight2 } from "react-icons/im";
import "./style.css";
const Btn2 = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="inline-block px-6 py-4 w-auto text-xl font-semibold text-white bg-transparent rounded-md cursor-pointer element"
    >
      <div className="flex items-center justify-between w-full gap-5">
        {/* justify-center */}
        <div style={{ textSizeAdjust: "20%" }}>{children}</div>
        <div>
          <ImArrowRight2 className="duration-100 arrow" />
        </div>
      </div>
    </div>
  );
};

export default Btn2;
