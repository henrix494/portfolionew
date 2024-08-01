"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Locale } from "@/i18n-config";
import Link from "next/link";

export default function ProjectCard({
  lang,
  title,
  description,
  img,
  href,
}: {
  lang: Locale;
  title: string;
  description: string;
  img: string;
  href: string;
}) {
  const [colors, setColors] = useState<string[]>([]);

  function randomColorUtility(length: number) {
    return Math.floor(Math.random() * length);
  }

  function hexy() {
    const hex = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    return hexColor;
  }

  useEffect(() => {
    const initialColors = Array.from({ length: 4 }, hexy);
    setColors(initialColors);
  }, []);

  return (
    <div>
      <div className="flex justify-around mt-20 gap-10 items-center border-b pb-10 border-2 border-[#ffffff1a] p-5 shadow-2xl">
        <div className={lang === "he" ? "right-0" : "left-0"}>
          <Image src={img} width={400} height={400} alt="pro" />
        </div>
        <div></div>
        <div>
          <div className="text-white flex flex-col gap-4">
            <h2 className="font-bold text-4xl">{title}</h2>
            <h3 className="break-words w-[400px] text-[#ffffffa6]">
              {description}
            </h3>
          </div>
          <div className="flex gap-5 pt-4">
            {colors.map((color, index) => (
              <button
                key={index}
                style={{ backgroundColor: color }}
                className="py-2 px-4 rounded-lg text-white font-bold text-2xl"
              >
                React
              </button>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href={href}
              target="_blank"
              className="px-10 py-4 text-purple-400 border-2 border-purple-400 w-[200px] rounded-xl"
            >
              Go to web site
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
