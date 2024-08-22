"use client";
import React, { useEffect, useRef } from "react";
import { dictionary } from "../projects/Projects";
import { Locale } from "@/i18n-config";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe({
  dictionary,
  lang,
}: {
  dictionary: dictionary;
  lang: Locale;
}) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      const imgElement = divRef.current.querySelector(".imgOne ");
      const imgElementTwo = divRef.current.querySelector(".imgTwo ");

      gsap.to(imgElement, {
        x: -600,
        y: -80,
        rotate: -40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: divRef.current,
          start: "top 80%",
          end: "bottom 20%",
        },
      });

      gsap.to(imgElementTwo, {
        x: 600,
        y: -80,
        rotate: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: divRef.current,
          start: "top 80%",
          end: "bottom 20%",
        },
      });
    }
  }, []);

  return (
    <div ref={divRef} className="text-center text-white  text-4xl font-bold ">
      {dictionary.aboutMe.title}
      <div className="lg:w-[950px] bg-[#0b0f11] mt-10 rounded-xl p-7">
        <p
          className={`text-sm lg:text-lg  text-[#bdbdbd] ${
            lang === "he" ? "text-right" : "text-left"
          }`}
        >
          {dictionary.aboutMe.text}
        </p>
        <div className="mt-5 cursor-pointer  flex gap-3 lg:gap-7">
          <Link href={"https://github.com/henrix494"} target="_blank">
            <div className="max-lg:w-[75%]">
              <Image
                src={"/social/github.svg"}
                width={50}
                height={50}
                alt="git hub icon"
                className="hover:opacity-80"
              />
            </div>
          </Link>
          <Link
            href={"https://il.linkedin.com/in/natan-minkov-58305a299"}
            target="_blank"
          >
            <div className="max-lg:w-[75%]">
              <Image
                src={"/social/linkedIn.svg"}
                width={50}
                height={50}
                alt="git hub icon"
                className="hover:opacity-80"
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="imgOne absolute  top-1/2 left-1/2 z-[-1] ">
        <Image
          src={"/icons/star.svg"}
          width={100}
          height={100}
          alt="fix icon"
          className=" hover:opacity-85   "
        />
      </div>
      <div className="imgTwo absolute  top-1/2 left-1/2 z-[-1]">
        <Image
          src={"/icons/star.svg"}
          width={100}
          height={100}
          alt="fix icon"
          className="  "
        />
      </div>
    </div>
  );
}
