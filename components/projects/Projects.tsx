import React from "react";
import ProjectCard from "./ProjectCard";
import { Locale } from "@/i18n-config";
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
    <>
      {dictionary.projects.projecDetails.map((project, index) => {
        console.log(project);
        return (
          <div key={index}>
            <ProjectCard
              lang={lang}
              title={project.ProjcetName}
              description={project.description}
              img={project.img}
              href={project.href}
            />
          </div>
        );
      })}
    </>
  );
}
