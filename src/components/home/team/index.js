"use client";
import React from "react";
// import Slider from "@/components/components/slider";
import Image from "next/image";

const Team = () => {
  const teamPics = [
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=801&q=80",
    "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    "https://images.unsplash.com/photo-1492814580460-1f9a2a463cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1620403724141-2b250fd48f63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1678810377348-242d5270202b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  ];
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "Tailwind.css",
    "Bootstrap",
    "React.js",
    "React Native",
    "Redux.js",
    "Next.js",
    "Three.js",
    "Node.js",
    "MongoDB",
    "SQL",
    "Postgresql",
    "Mongoose.js",
    // "MySQL",
    "PostgresSQL",
    "Express.js",
    "Strapi",
    "Git",
    "Github",
    "Python",
    "Flask",
    "Django",
    "Django Rest",
    "Scikit-Learn",
    "PHP",
  ];
  const links = [
    { name: "Github Profile", link: "https://github.com/Pancham555" },
    {
      name: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/pancham-barman",
    },
    {
      name: "My Resume",
      link: "https://drive.google.com/file/d/1Mii5Q98L2xEMXdQWr3cMyzFtxEdy5q4I/view?usp=drive_link",
    },
    // {
    //   name: "My YouTube Channel (mostly post meme/ai generated videos)",
    //   link: "https://www.youtube.com/@crusader_lynx?sub_confirmation=1",
    // },
  ];
  return (
    <div
      id="developer"
      className="flex justify-center px-5 py-10 md:px-10 md:py-16"
    >
      <div className="w-full h-full max-w-screen-xl">
        <div className="w-full mt-10 mb-10 text-5xl font-bold text-center">
          Meet The <span className="text-theme-2">Developer</span>
        </div>
        <div className="flex flex-wrap justify-center h-auto md:justify-between md:flex-nowrap">
          {/* md:justify-between md:flex-nowrap */}
          <div className="w-full md:min-w-[45%] h-full my-10 relative">
            <Image
              src={"/blob-haikei.svg"}
              width={2000}
              height={2000}
              alt="Blob"
              className="absolute left-0 w-full h-full rotate-180 md:px-2.5 top-10 -z-10"
            />
            <Image
              src={"/oie_jTh5Nfj8Bzvi.png"}
              width="2500"
              height="2500"
              alt="User Image"
              className="z-10 w-full h-full"
              quality={100}
            />
          </div>
          <div className="w-auto my-auto">
            <div className="text-4xl font-semibold">
              Name: <span className="text-theme-2">Pancham</span>{" "}
              <span className="text-theme">Barman</span>
            </div>
            <div className="w-full mt-10">
              <div className="text-3xl font-semibold">
                <span className="font-extrabold text-theme-2">Skills</span> I
                posses:
              </div>
              <div className="flex flex-wrap w-full my-5">
                {skills.map((data, index) => {
                  return (
                    <span
                      key={index}
                      className="inline-flex items-center justify-center px-4 py-2 my-2 mr-2 text-xl font-bold leading-none text-white rounded-full bg-theme-2"
                    >
                      {data}
                    </span>
                  );
                })}
              </div>
              <div className="w-full">
                <div className="text-3xl font-bold">
                  Useful <span className="text-theme">links</span>
                </div>
                <div className="flex flex-wrap justify-between w-full">
                  {links.map((data, index) => {
                    return (
                      <div key={index} className="my-5">
                        <div className="mt-2 mb-1 font-bold">{data.name}</div>
                        <div className="w-48 overflow-hidden truncate">
                          <a
                            target="_"
                            href={data.link}
                            className="w-full font-medium text-theme"
                          >
                            {data.link}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* <Slider array={teamPics} /> */}
        </div>
      </div>
    </div>
  );
};

export default Team;
