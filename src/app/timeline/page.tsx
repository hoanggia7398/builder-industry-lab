"use client";
import TimeLine from "@/components/Timeline/Timeline";
import React from "react";

const TestPage: React.FC = () => {
  return (
    <div className="dark:bg-gray-300 dark:text-black p-10">
      <div>
        <h1 className="text-4xl font-bold text-center mb-10">
          OJT SPRING 2025 TIMELINE
        </h1>
      </div>
      <TimeLine />
    </div>
  );
};

export default TestPage;
