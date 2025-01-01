"use client";
import { builder, Builder } from "@builder.io/react";

import dynamic from "next/dynamic";
const Counter = dynamic(() => import("./components/Counter/Counter"), {
  ssr: false,
});
const Timeline = dynamic(() => import("./components/Timeline/Timeline"), {
  ssr: false,
});

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Timeline, {
  name: "Timeline",
});
