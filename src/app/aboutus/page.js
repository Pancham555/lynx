"use client";
import Image from "next/image";
import React from "react";
import AboutusLayout from "./layout";

const Aboutus = () => {
  return (
    <AboutusLayout>
      <div className="bg-white pt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto text-center pb-8">
              <Image
                src="/logo.svg"
                width={500}
                height={500}
                className="h-36 mx-auto mb-4"
                alt="Logo"
              />
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Us
              </h2>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="mt-2 text-lg text-gray-600">
                We are a team of passionate individuals committed to driving
                positive change in the world through innovative solutions and
                collaboration. Our diverse backgrounds and expertise allow us to
                approach problems from multiple perspectives, leading to
                creative and effective solutions.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Our mission is to make a difference in the world by leveraging
                technology and human ingenuity. We believe that by working
                together, we can overcome any challenge and create a better
                future for all.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                We are dedicated to our values of integrity, excellence, and
                inclusivity. We hold ourselves to the highest standards of
                ethical conduct, constantly striving to improve and innovate. We
                believe that diversity and inclusivity are essential to our
                success, and we are committed to creating a welcoming and
                supportive environment for all team members and partners.
              </p>
              <p className="mt-4 text-lg text-gray-600 font-bold">
                This page is built with ChatGPT
              </p>
            </div>
          </div>
        </div>
      </div>
    </AboutusLayout>
  );
};

export default Aboutus;
