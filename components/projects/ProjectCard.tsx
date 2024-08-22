"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Locale } from "@/i18n-config";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard({
  lang,
  title,
  description,
  img,
  href,
  goTowebSite,
  techStack,
}: {
  lang: Locale;
  title: string;
  description: string;
  img: string;
  href: string;
  goTowebSite: string;
  techStack: string[];
}) {
  const [colors, setColors] = useState<
    { backgroundColor: string; textColor: string }[]
  >([]);
  const cardRef = useRef<HTMLDivElement>(null);

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

  function calculateTextColor(hexColor: string) {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? "#000000" : "#FFFFFF";
  }

  useEffect(() => {
    const initialColors = Array.from({ length: techStack.length }, () => {
      const backgroundColor = hexy();
      const textColor = calculateTextColor(backgroundColor);
      return { backgroundColor, textColor };
    });
    setColors(initialColors);
  }, [techStack.length]);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 40%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div ref={cardRef}>
      <div className="flex flex-col lg:flex-row justify-around mt-10 gap-10 items-center border-b pb-10 border-2 border-[#ffffff1a] shadow-2xl">
        <div
          className={`${
            lang === "he" ? "order-last lg:order-first" : ""
          } flex items-center justify-center mt-10 px-10`}
        >
          <Image
            src={img}
            width={300}
            height={300}
            alt="pro"
            className="w-full max-w-[400px] h-auto"
          />
        </div>

        <div className="w-full max-w-lg flex flex-col lg:items-start text-center lg:text-left py-10 gap-7">
          <div className="text-white flex flex-col gap-4">
            <h2
              className={`font-bold text-3xl md:text-4xl max-lg:text-center  ${
                lang === "he" ? "text-right" : ""
              }`}
            >
              {title}
            </h2>
            <h3
              className={`break-words text-base md:text-lg lg:text-sm text-[#ffffffa6] max-lg:text-center lg:w-[350px] max-lg:px-5  ${
                lang === "he" ? "text-right" : ""
              }`}
            >
              {description}
            </h3>
          </div>

          <div className="flex flex-wrap gap-5 pt-3 justify-center lg:justify-start">
            {techStack.map((tech, index) => (
              <button
                key={index}
                style={{
                  backgroundColor: colors[index]?.backgroundColor,
                  color: colors[index]?.textColor,
                }}
                className="py-1 px-4 rounded-lg font-bold text-lg cursor-auto"
              >
                {tech}
              </button>
            ))}
          </div>

          <div className="mt-5 flex justify-center lg:justify-start w-full">
            <Link
              href={href}
              target="_blank"
              className="px-6 py-3 md:px-10  text-purple-400 border-2 border-purple-400 rounded-xl hover:bg-white hover:text-black transition-all"
            >
              {goTowebSite}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
