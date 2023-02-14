import { FC } from "react";
import { allDataType } from "../shared/types";

interface SkillsProps {
  skills: allDataType["skills"];
}

const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="lg:min-h-[70vh] px-[5vw] py-[80px] flex flex-col items-center justify-center z-[4]">
      <h1
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-1"
        className="text-center text-3xl lg:text-4xl"
      >
        Mis Skills
      </h1>
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
        className="description text-lg text-center my-[30px]"
      >
        Technología que uso a diario con mis clientes
      </p>
      <div className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[50vh] items-center justify-center flex-col md:flex-row">
      <p data-scroll className="title text-[40px]">  
          {" "}
          <a
            className="underline underline-offset-2"
            href="https://www.google.com/search?rlz=1C1CHBF_esES1026ES1026&sxsrf=ALiCzsbBOKmbEjD2jst3AvzAplyAjI8wZA:1672246388936&q=Que+es+mylift?&nfpr=1&sa=X&ved=2ahUKEwiX7PSf45z8AhU8gP0HHfL6Dv4QvgUoAXoECAgQAg&biw=1517&bih=736&dpr=0.9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
            data-scroll
            data-scroll-speed="2"
            className="w-[150px] h-[150px] squared"
            src="/mylift.png"
            alt=""
          />
          <p data-scroll className="text-lg text-gray-200 flex flex-col lg:min-h-[10vh] items-center justify-center z-[4]" id="story">
          My Lift
          </p>
          </a>
        </p>
        <p data-scroll className="title text-[40px]">  
          {" "}
          <a
            className="underline underline-offset-2"
            href="https://www.google.com/search?q=Que+es+myjump%3F&rlz=1C1CHBF_esES1026ES1026&biw=1517&bih=736&sxsrf=ALiCzsbJVlX7iGqwKI6fxtMw0-odDBW9FA%3A1672246394004&ei=eXSsY77pPK_d7_UP1Kei0AQ&ved=0ahUKEwj-iaqi45z8AhWv7rsIHdSTCEoQ4dUDCA8&uact=5&oq=Que+es+myjump%3F&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIGCAAQHhANOgoIABBHENYEELADOgYIABAHEB46DQgAEAgQBxAeEA8Q8QQ6CAgAEAgQBxAeOggIABAHEB4QCjoGCAAQCBAeOggIIRDDBBCgAToICAAQHhANEAo6CggAEAgQHhANEAo6CAgAEAgQHhANSgQIQRgASgQIRhgAUOoFWJ4wYNkzaAJwAXgAgAF6iAHVBpIBAzcuMpgBAKABAcgBCMABAQ&sclient=gws-wiz-serp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
            data-scroll
            data-scroll-speed="2"
            className="w-[150px] h-[150px] squared"
            src="/myjump.png"
            alt=""
          />
          <p data-scroll className="text-lg text-gray-200 flex flex-col lg:min-h-[10vh] items-center justify-center z-[4]" id="story">
          My Jump
          </p>
          </a>
        </p>
        <p data-scroll className="title text-[40px]">  
          {" "}
          <a
            className="underline underline-offset-2"
          >
            <img
            data-scroll
            data-scroll-speed="2"
            className="w-[160px] h-[160px] squared"
            src="/excell.png"
            alt=""
          />
          <p data-scroll className="text-lg text-gray-200 flex flex-col lg:min-h-[10vh] items-center justify-center z-[4]" id="story">
          Excel
          </p>
          </a>
        </p>
      </div>


    </div>
  );
};

export default Skills;
