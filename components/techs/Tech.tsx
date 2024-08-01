"use client";
import { dictionary } from "../projects/Projects";
import React, { useLayoutEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Locale } from "@/i18n-config";
gsap.registerPlugin(ScrollTrigger);

const techItems = [
  { tech_name: "React", tech_color: "#61DAFB" },
  { tech_name: "Next Js", tech_color: "#42b883" },
  { tech_name: "Node js", tech_color: "#DD0031" },
  { tech_name: "gsap", tech_color: "#3F00F2" },
  { tech_name: "prisma", tech_color: "#F200DA" },

  // Add more tech items as needed
];

const TechList = ({
  dictionary,
  lang,
}: {
  dictionary: dictionary;
  lang: Locale;
}): JSX.Element => {
  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true, // pin the trigger element while active
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        }
      );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

  return (
    <section className="wrapper overflow-hidden " ref={component}>
      <div
        className={`pt-10 text-4xl    mb-7 text-white  font-bold text-center`}
      >
        {dictionary.techs.what}
      </div>

      {techItems.map(({ tech_color, tech_name }, index) => (
        <div
          key={index}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700 whitespace-nowrap"
          aria-label={tech_name || ""}
        >
          {Array.from({ length: 15 }, (_, index) => (
            <React.Fragment key={index}>
              <span
                className={
                  "tech-item text-xl lg:text-4xl font-extrabold uppercase tracking-tighter"
                }
                style={{
                  color: index === 7 && tech_color ? tech_color : "inherit",
                }}
              >
                {tech_name}
              </span>
              <span className="text-3xl">
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default TechList;
