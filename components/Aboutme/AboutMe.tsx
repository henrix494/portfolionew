"use client";
import React from "react";
import { dictionary } from "../projects/Projects";

export default function AboutMe({ dictionary }: { dictionary: dictionary }) {
  return (
    <div className="text-center text-white h-[400px] text-4xl font-bold">
      {dictionary.aboutMe.title}
      <div className="lg:w-[950px]  bg-[#0b0f11] mt-10 rounded-xl">
        <p className=" text-left text-sm lg:text-lg p-5 text-[#bdbdbd]">
          I&apos;m a dedicated Full-Stack Developer with a passion for creating
          reliable and scalable web applications using Python, Django,
          JavaScript, and React. I enjoy solving problems and have a passion for
          taking on challenging projects. I&apos;m skilled in both back-end and
          front-end development, ensuring smooth user experiences. I value
          writing clean, maintainable code and am always eager to learn and grow
          in the ever-evolving world of web development. Plus, I love being part
          of a team where collaboration is key!
        </p>
      </div>
    </div>
  );
}
