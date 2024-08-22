"use client";
import React from "react";
import { dictionary } from "../projects/Projects";
import { Locale } from "@/i18n-config";

export default function AboutMe({
  dictionary,
  lang,
}: {
  dictionary: dictionary;
  lang: Locale;
}) {
  return (
    <div className="text-center text-white h-[400px] text-4xl font-bold">
      {dictionary.aboutMe.title}
      <div className="lg:w-[950px]  bg-[#0b0f11] mt-10 rounded-xl">
        <p
          className={` text-left text-sm lg:text-lg p-7 text-[#bdbdbd] ${
            lang === "he" ? "text-right" : "text-left"
          }`}
        >
          {dictionary.aboutMe.text}
        </p>
      </div>
    </div>
  );
}
