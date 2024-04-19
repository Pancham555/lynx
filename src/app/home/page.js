"use client";
import Accordion from "@/components/home/accordion";
import Footer from "@/components/components/footer";
import InterestedInWork from "@/components/home/interested-in-work";
import Navbar from "@/components/components/navbar";
import SolutionShowcase from "@/components/home/solution-showcase";
import Team from "@/components/home/team";
import WhyChooseUs from "@/components/home/why-choose-us";
import WorkTogether from "@/components/home/work-together";
import React from "react";
import { useInView } from "react-intersection-observer";
import GoToTopButton from "@/components/components/goToTop/goToTop";
import SpaceShip from "@/components/home/model";

const Home = () => {
  const { ref, inView } = useInView({
    threshold: 0.084,
    triggerOnce: false,
  });
  return (
    <main>
      <Navbar value={inView.valueOf()} />
      <Accordion />
      <div ref={ref} className="w-full h-full">
        <GoToTopButton />
        <SolutionShowcase />
        <SpaceShip />
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
