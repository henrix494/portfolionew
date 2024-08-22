import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import Hero from "@/components/Hero/Hero";
import Tech from "@/components/techs/Tech";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import AboutMe from "@/components/Aboutme/AboutMe";
export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="">
      <div className="flex justify-center relative overflow-x-clip ">
        <div className="  ">
          <Hero dictionary={dictionary} />
        </div>
      </div>
      <div className={` mt-20 test `}>
        <Tech dictionary={dictionary} lang={lang} />
      </div>
      <div
        className={` mt-20 test relative overflow-hidden flex justify-center `}
      >
        <div>
          <div className="lg:w-[950px] relative">
            <h1 className="text-center text-4xl font-bold text-white">
              {dictionary.projects.title}
            </h1>
            <Projects lang={lang} dictionary={dictionary} />
          </div>
        </div>
        <div className="rectangleTwo  "></div>
      </div>
      <div className=" relative overflow-hidden  flex justify-center mt-10">
        <AboutMe dictionary={dictionary} lang={lang} />
      </div>
    </main>
  );
}
