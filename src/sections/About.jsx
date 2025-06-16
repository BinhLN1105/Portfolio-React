import { useRef } from "react";
import Card from "../components/Card";
// import { Globe } from "../components/globe";
import RealtimeClock3D from "../components/RealtimeClock3D";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import {
  Aceternity3DCard,
  Aceternity3DCardItem,
  Aceternity3DCardBody,
} from "../components/Aceternity3DCard";
const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div
        className="grid grid-cols-1 gap-4 md:grid-cols-6
        md:auto-rows-[18rem] mt-12"
      >
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1 relative overflow-hidden">
          <img
            src="assets/picture/My-picture.png"
            className="absolute object-cover z-0 w-[45rem] h-[45rem] left-1/2 -translate-x-1/2 top-[-5rem] sm:top-[-3rem] md:top-[0rem]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Luu Nhat Binh</p>
            <p className="subtext">
              A Second-year IT student with foundational Python and Java skills,
              actively learning ReactJS.
              <br /> Eager to intern and gain hands-on experience in a
              professional environment.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
        </div>
        {/* Grid 2 */}
        <div className="flex grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex imtems-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", top: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="flex bg-gradient-to-br from-gray-900 via-indigo-900 to-black grid-3 relative overflow-hidden items-center justify-center">
          {" "}
          <Aceternity3DCard className="flex flex-col items-center justify-center">
            <Aceternity3DCardBody className="bg-cyan-200 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[90vw] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-xl p-3 border">
              <Aceternity3DCardItem
                translateZ="50"
                className="text-base font-bold text-neutral-600 dark:text-white"
              >
                Portfolio
              </Aceternity3DCardItem>
              <Aceternity3DCardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-xs max-w-xs mt-1 dark:text-neutral-300"
              >
                WelCome To My Portfolio.
              </Aceternity3DCardItem>
              <Aceternity3DCardItem
                translateZ="100"
                className="w-full mt-1 flex justify-center items-center"
              >
                <img
                  src="/assets/picture/My-picture.png"
                  className="h-40 w-45 object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Time Zone Map"
                />
              </Aceternity3DCardItem>
              <div className="flex justify-between items-center mt-4">
                <Aceternity3DCardItem></Aceternity3DCardItem>
                <Aceternity3DCardItem
                  href="#contact"
                  translateZ={20}
                  as="a"
                  className="px-2 py-1 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold inline-block"
                >
                  Contact Me
                </Aceternity3DCardItem>
              </div>
            </Aceternity3DCardBody>
          </Aceternity3DCard>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="flex grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125"></div>
          <Frameworks />
        </div>
      </div>
    </section>
  );
};

export default About;
