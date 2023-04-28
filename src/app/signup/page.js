"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="w-full py-5 bg-gray-200 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:min-h-screen h-full lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image
            src="/Next Lynx.svg"
            alt="logo"
            width={50}
            height={50}
            className="w-44"
          />
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 flex flex-col gap-4 md:gap-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up
            </h1>
            <form
              className="flex flex-col gap-4 md:gap-6"
              // className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="email"
                  className="bg-gray-50 font-semibold border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      for="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-theme
                     hover:bg-theme active:bg-theme-2 duration-100 focus:outline-none
                       rounded-md
                        px-5 py-2 text-center dark:bg-theme
                        dark:hover:bg-theme  text-lg font-semibold"
              >
                Sign up
              </button>
              <div className="text-black flex flex-col gap-5">
                <button
                  type="button"
                  onClick={() =>
                    (window.location.href =
                      "http://localhost:1337/api/connect/google")
                  }
                  className="border-2 group relative w-full flex justify-center py-2 px-4 rounded-md bg-gold hover:bg-gold-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold text-lg dark:text-gray-200 text-gray-700 font-semibold"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <FaGoogle className="h-5 w-5 text-theme group-hover:text-theme" />
                  </span>
                  Sign up with Google
                </button>
                <button
                  type="button"
                  onClick={() =>
                    (window.location.href =
                      "http://localhost:1337/api/connect/github")
                  }
                  className="border-2 group relative w-full flex justify-center py-2 px-4 rounded-md bg-gold hover:bg-gold-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold text-lg dark:text-gray-200 text-gray-700 font-semibold"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <FaGithub className="h-5 w-5 text-theme group-hover:text-theme" />
                  </span>
                  Sign up with Github
                </button>
              </div>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
