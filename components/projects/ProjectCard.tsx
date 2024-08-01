import React from "react";
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
  console.log(href);
  const colors = ["#0D4EF3", "#D70606", "#D70651"];
  const pickRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const randomColor = pickRandomColor();

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
            <button
              style={{ backgroundColor: pickRandomColor() }}
              className="py-2 px-4 rounded-lg text-white font-bold text-2xl"
            >
              React
            </button>
            <button
              style={{ backgroundColor: pickRandomColor() }}
              className="py-2 px-4 rounded-lg text-white font-bold text-2xl"
            >
              React
            </button>
            <button
              style={{ backgroundColor: pickRandomColor() }}
              className="py-2 px-4 rounded-lg text-white font-bold text-2xl"
            >
              React
            </button>
            <button
              style={{ backgroundColor: pickRandomColor() }}
              className="py-2 px-4 rounded-lg text-white font-bold text-2xl"
            >
              React
            </button>
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
