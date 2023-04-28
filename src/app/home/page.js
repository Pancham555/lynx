"use client";
import Accordion from "@/components/home/accordion";
import Footer from "@/components/components/footer";
import InterestedInWork from "@/components/home/interested-in-work";
import Navbar from "@/components/components/navbar";
import SolutionShowcase from "@/components/home/solution-showcase";
import Team from "@/components/home/team";
import WhyChooseUs from "@/components/home/why-choose-us";
import WorkTogether from "@/components/home/work-together";
import { Raleway } from "next/font/google";
import React from "react";
import { useInView } from "react-intersection-observer";

const font = Raleway({
  weight: "variable",
  display: "auto",
  subsets: ["latin"],
  style: "normal",
});
const Home = () => {
  const { ref, inView } = useInView({
    threshold: 0.084,
    triggerOnce: false,
  });
  return (
    <main className={font.className}>
      <Navbar value={inView.valueOf()} />
      <Accordion />
      <div ref={ref} className="w-full h-full">
        <SolutionShowcase />
        <WorkTogether />
        <WhyChooseUs />
        <Team />
        <InterestedInWork />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
