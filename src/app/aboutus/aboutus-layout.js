"use client";
import Footer from "@/components/components/footer";
import Navbar from "@/components/components/navbar";
import { Raleway } from "next/font/google";
import React from "react";
import { useInView } from "react-intersection-observer";

const font = Raleway({
    weight: "variable",
    display: "auto",
    subsets: ["latin"],
    style: "normal",
});
export default function AboutusLayout({ children, topLayout }) {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });
    return (
        <main className={font.className}>
            <Navbar value={inView.valueOf()} />
            {topLayout}
            <div ref={ref}>
                {children}
                <Footer />
            </div>
        </main>
    );
};

