"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";
import { Locale } from "@/i18n-config";

gsap.registerPlugin(ScrollTrigger);

export interface dictionary {
  Hero: {
    fullName: string;
    Proff: string;
    description: string;
  };
  techs: {
    what: string;
  };
  projects: {
    title: string;
    projecDetails: {
      ProjcetName: string;
      description: string;
      img: string;
      href: string;
      goToWebSite: string;
      techStack: string[];
    }[];
  };
}

export default function Projects({
  lang,
  dictionary,
}: {
  lang: Locale;
  dictionary: dictionary;
}) {
  return (
    <div className="flex flex-col">
      {dictionary.projects.projecDetails.map((project, index) => (
        <div key={index}>
          {" "}
          {/* Ensure this class is applied */}
          <ProjectCard
            lang={lang}
            title={project.ProjcetName}
            description={project.description}
            img={project.img}
            href={project.href}
            goTowebSite={project.goToWebSite}
            techStack={project.techStack}
          />
        </div>
      ))}
    </div>
  );
}
