import React from "react";
import Image from "next/image";
import myImg from "@/public/MyPhoto/my.png";
import { dictionary } from "../projects/Projects";
const Hero = ({ dictionary }: { dictionary: dictionary }) => {
  return (
    <div className="mt-20 flex gap-10 mainHero flex-col lg:flex-row border-2 border-[#0000001f] shadow-2xl  ">
      <div className="max-lg:hidden rectangle  "></div>
      <div className=" flex justify-center items-center   ">
        <Image src={myImg} width={150} height={150} alt="asc" />
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
        <div>
          <h2 className=" text-xl text-center lg:text-start">
            {dictionary.Hero.description}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
