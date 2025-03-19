import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Problem } from "@/components/Problem";
import { Interviewers } from "@/components/Interviewers";
import { Demo } from "@/components/Demo";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
const page = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Problem />
      <Features />
      <Interviewers />
      <Demo />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
};

export default page;
