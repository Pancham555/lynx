import Slider from "@/components/components/slider";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SwiperSlide } from "swiper/react";
const WorkTogether = ({ height }) => {
  const array = [
    {
      head: "My Blog",
      desc: "This is a website I built with Next.js, Tailwind CSS, and uses MDX to write down the blogs. Here, I give updates about my current learnings in the tech field. It's is my way of public learning..",
      img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      link: "https://tail-blogs.vercel.app",
    },
    {
      head: "MERN TODO Application",
      desc: "This is a web based Todo application built with MERN Stack (MongoDB, Express, React, Node.js).To run this application, make sure to have mongodb, node.js and npm installed on your local machine. Then follow the Readme guide provided with the code..",
      img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      link: "https://github.com/Pancham555/Mern-todo",
    },
    {
      head: "My Portfolio",
      desc: "This is simplistic web page, built with Nextjs and tailwind css. Here I showcased my projects and the skills I possess.",
      img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      link: "https://nextgreen.vercel.app",
    },
    {
      head: "React Native base app",
      desc: "A foundational onboarding app using React Native. Designed the onboarding UI, login screen, search functionality, result display, and user profile screen. This app can be easily extended for building various applications.",
      img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      link: "https://github.com/Pancham555/react-native-base-app",
    },
    {
      head: "Simple flask machine learning app",
      desc: "Build a simple chatbot web chat interface, with Flask, scikit-learn, numpy, pandas, that uses AI to chat with users. The data comes from a data.csv file inside the working directory.",
      img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      link: "https://github.com/Pancham555/flask-ml",
    },
  ];
  return (
    <>
      <div id="projects" className="bg-theme px-5 py-10 md:py-16 md:px-10">
        <h2 className="mb-12 text-3xl text-white font-bold text-center">
          Below are some of my projects
        </h2>
        <div className="flex justify-center w-full">
          <div className="flex justify-center w-full max-w-screen-xl">
            <Slider className="max-w-screen-xl">
              {array.map((data, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className={`h-${height} w-96 cursor-grab active:cursor-grabbing`}
                  >
                    <div
                      className="h-full w-full flex flex-wrap
       items-center  gap-2 md:gap-10 p-5 rounded-md bg-theme-2 md:p-10 md:flex-nowrap"
                      // justify-between md:items-center items-start
                    >
                      {/* <div className="md:max-w-[55%] w-full h-48 md:h-96">
                        <Image
                          src={data.img}
                          width={800}
                          height={300}
                          className="object-cover w-full h-full rounded-md"
                        />
                      </div> */}
                      <div className="text-white md:max-w-[65%]  w-full">
                        {/* md:max-w-[45%] */}
                        <div className="mb-2 text-4xl font-semibold leading-tight">
                          {data.head}
                        </div>
                        <div className="my-5 text-xl font-medium">
                          {data.desc}
                        </div>
                        <a
                          href={data.link}
                          target="_blank"
                          referrerPolicy="no-referrer"
                          className="my-5 text-xl text-theme font-medium md:w-full flex-wrap break-all"
                        >
                          {data.link}
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Slider>
          </div>
        </div>
        <div
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)",
          }}
          className={" bg-theme w-full h-32 -scale-x-100"}
        ></div>
      </div>
    </>
  );
};

export default WorkTogether;
