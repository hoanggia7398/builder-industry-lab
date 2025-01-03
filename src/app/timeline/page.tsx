"use client";
import TimeLine from "@/components/Timeline/Timeline";
import React from "react";
import { fakeData } from "./timeline";

const TestPage: React.FC = () => {
  return (
    <div className="bg-[#F0F5F9] dark:bg-gray-700 p-2 md:p-10">
      <div>
        <h1 className="text-4xl font-bold text-center mb-10 dark:text-gray-200">
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
