"use client";
import TimeLine from "@/components/Timeline/Timeline";
import React from "react";
import { fakeData } from "./timeline";

const TestPage: React.FC = () => {
  return (
    <div className="dark:bg-gray-300 dark:text-black p-2 md:p-10">
      <div>
        <h1 className="text-4xl font-bold text-center mb-10">
          OJT SPRING 2025 TIMELINE
        </h1>
      </div>
      <div className="md:max-w-5xl mx-auto">
        <TimeLine items={fakeData} />
      </div>
    </div>
  );
};

export default TestPage;
