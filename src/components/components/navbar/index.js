"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = ({ value = false }) => {
  const routes = [
    { name: "Home", link: "/home" },
    { name: "About us", link: "/aboutus" },
    // { name: "AI Art", link: "/ai-art" },
    { name: "Login", link: "/login" },
    { name: "Sign up", link: "/signup" },
  ];
  const [openState, setOpenState] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full">
      <div className="flex flex-col items-center w-full h-full">
        <div
          className={`flex justify-between items-center py-1.5 backdrop-blur-sm w-full px-5
        ${
          value
            ? "bg-white text-gray-800 opacity-90"
            : "bg-transparent text-white opacity-100"
        }  duration-150`}
        >
          {/* py-3  */}
          <div className="my-auto text-2xl font-bold cursor-pointer md:ml-2">
            <Link href="/">
              {/* <div
                className={`my-2.5 md:mx-2 text-3xl text-theme ${youMurderer.className}`}
              >
                Next Lynx
              </div> */}
              <Image
                src="/Next Lynx.svg"
                alt="logo"
                width={50}
                height={50}
                className="w-24 md:ml-3 my-3"
              />
            </Link>
          </div>
          <div className="flex justify-between my-auto md:ml-20">
            {routes.map(({ name, link }, index) => {
              return (
                <Link href={link} key={index} aria-label={name}>
                  <div className="hidden mx-8 text-xl font-semibold cursor-pointer md:block">
                    {name}
                  </div>
                </Link>
              );
            })}
            {/* Navbar button */}
            <div
              className="block my-auto cursor-pointer md:hidden w-7"
              onClick={() => setOpenState(!openState)}
            >
              <div
                className={`w-full h-0.5  ${
                  value ? "bg-gray-800 " : "bg-white"
                } my-2.5 duration-200
          ${
            openState
              ? "translate-y-[0.375rem] -rotate-45"
              : "translate-y-0 rotate-0"
          }`}
              ></div>
              <div
                className={`w-full h-0.5 ${
                  value ? "bg-gray-800 " : "bg-white"
                } my-2.5 duration-200
          ${
            openState
              ? "-translate-y-[0.375rem] rotate-45"
              : "translate-y-0 rotate-0"
          }`}
              ></div>
            </div>
            {/* Navbar button */}
          </div>
        </div>
        {/* Navbar components */}
        <div className="w-full px-5">
          <div
            className={`${
              openState ? "h-56" : "h-0"
            } duration-200 w-full md:hidden block bg-white z-50 overflow-hidden`}
          >
            <div className="flex flex-col justify-evenly w-full h-full">
              {routes.map(({ name, link }, index) => {
                return (
                  <Link href={link} key={index} aria-label={name}>
                    <div className="block w-full mx-5 text-lg font-medium text-gray-800 cursor-pointer">
                      {name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        {/* Navbar components */}
      </div>
    </div>
  );
};

export default Navbar;
