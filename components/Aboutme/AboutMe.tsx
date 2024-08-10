"use client";
import React from "react";
import { dictionary } from "../projects/Projects";

export default function AboutMe({ dictionary }: { dictionary: dictionary }) {
  return (
    <div className="text-center text-white h-[400px] text-4xl font-bold">
      {dictionary.aboutMe.title}
    </div>
  );
}
