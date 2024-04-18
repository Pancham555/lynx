import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Btn1 from "@/components/components/button/btn-1";
import Btn2 from "@/components/components/button/btn-2";
import { useRouter } from "next/navigation";
const Accordion = () => {
  const router = useRouter();
  const ref = useRef(null);
  useEffect(() => {
    // const audio = new Audio(
    //   "/Star Wars_ Across The Stars  CINEMATIC EMOTIONAL VERSION.mp3"
    // );
    // audio.play();
    ref.current.loop = true;
    ref.current.volume = 0.1;
    ref.current.play();
  }, []);
  return (
    <div className="bg-gray-900">
      <video
        src="/portfolio.mp4"
        autoPlay={true}
        ref={ref}
        width="100"
        height="300"
        className="absolute w-full h-full bg-cover z-0 opacity-100"
      ></video>
      <div
        // style={{
        //   clipPath: `polygon(0 0, 100% 0, 100% 32rem, 0 100%)`,
        // }} bg-gray-900
        className="w-full min-h-[40rem] h-full py-10 bg-cover  text-white flex flex-col justify-center items-center"
      >
        <div className="flex flex-wrap items-center justify-between md:flex-nowrap z-20">
          <div className="md:max-w-[50%] px-5 md:px-10 w-full my-auto">
            <div className="mb-2 text-6xl font-bold leading-tight">
              Driven by a{" "}
              <span className="text-theme">Passion for Innovation</span>
            </div>
            <div className="mb-5 text-xl font-medium">
              I&apos;m committed to fostering growth and development through
              collaboration. With my expertise and passion, I&apos;m ready to
              make a positive impact and contribute to a company&apos;s success.
            </div>
            <div className="flex justify-between gap-2 lg:gap-6 mt-10 mb-5 md:justify-start flex-nowrap">
              {/* flex-wrap md: */}
              <a href="#solutions" className="w-auto">
                <Btn1>See projects</Btn1>
              </a>
              <Btn2
                onClick={() =>
                  window.open("https://tail-blogs.vercel.app/", "_blank")
                }
              >
                View my blog
              </Btn2>
            </div>
          </div>
          <div className="md:max-w-[50%] w-full h-full my-auto relative">
            <Image
              width={900}
              height={900}
              src="/innovation-animate.svg"
              className="w-full h-full z-50 md:px-10 px-2.5"
              alt="Top image"
            />
          </div>
        </div>
      </div>
      {/* <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)",
        }}
        className={" bg-gray-900 w-full h-32 -scale-x-100"}
      ></div> */}
    </div>
  );
};

export default Accordion;
