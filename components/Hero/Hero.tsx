import React from "react";
import Image from "next/image";
import myImg from "@/public/MyPhoto/my.png";
import { dictionary } from "../projects/Projects";
const Hero = ({ dictionary }: { dictionary: dictionary }) => {
  return (
    <div className="mt-20 flex gap-10 mainHero flex-col lg:flex-row border-2 border-[#0000001f] shadow-2xl px-10 py-5 ">
      <div className="max-lg:hidden rectangle  "></div>
      <div className=" flex justify-center items-center   ">
        <Image src={myImg} width={170} height={150} alt="asc" />
      </div>
      <div className="flex flex-col justify-center text-white text-xl gap-5 font-semibold">
        <div>
          <h2 className=" text-center lg:text-start">
            {dictionary.Hero.fullName}
          </h2>
        </div>
        <div>
          <h2 className=" text-center lg:text-start">
            {dictionary.Hero.Proff}
          </h2>
        </div>
        <div className="lg:w-[250px]">
          <h2 className=" text-base text-center lg:text-start text-[#b9b9b9]">
            {dictionary.Hero.description}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
