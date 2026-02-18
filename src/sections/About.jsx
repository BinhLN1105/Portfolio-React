import { useRef, useState } from "react";
import Card from "../components/Card";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import { AuroraBackground } from "../components/AuroraBackground";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "../components/CanvasRevealEffect";
import {
  Aceternity3DCard,
  Aceternity3DCardItem,
  Aceternity3DCardBody,
} from "../components/Aceternity3DCard";
import LazyLoadComponent from "../components/LazyLoadComponent";

import "../index.css";
const About = () => {
  const [hovered, setHovered] = useState(false);
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div
        className="grid grid-cols-1 gap-4 md:grid-cols-6
        md:auto-rows-[18rem] mt-12 items-stretch"
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
              A Developer with foundational Python and Java skills,
              actively learning ReactJS.
              <br /> Eager to intern and gain hands-on experience in a
              professional environment.
            </p>

          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
        </div>
        {/* Grid 2 */}
        <LazyLoadComponent
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flex grid-default-color grid-2 relative overflow-hidden" // Thêm relative và overflow-hidden cho div chính của grid2
        >
          {/* Đây là lớp chứa nội dung, nằm ở trên (z-index cao hơn) */}
          <div
            ref={grid2Container} // ref vẫn ở đây nếu các Card cần nó
            className="relative z-20 flex items-center justify-center w-full h-full" // Nội dung cần z-index cao hơn
          >
            <p className="flex imtems-end text-center text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            {/* Các Card component của bạn */}
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
              image="assets/logos/java-2.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/python-2.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
          </div>

          {/* Đây là lớp hiệu ứng CanvasRevealEffect, nằm ở dưới (z-index thấp hơn) */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                // Đặt z-index THẤP HƠN so với nội dung chính
                className="h-full w-full absolute inset-0 z-10" // <-- Thay đổi z-index thành 10
              >
                <CanvasRevealEffect
                  animationSpeed={5}
                  containerClassName="bg-transparent" // Quan trọng để nền của CanvasRevealEffect không che mất các hiệu ứng
                  colors={[
                    [59, 130, 246], // Blue-500
                    [139, 92, 246], // Violet-500 (or Indigo-500 depending on exact hue)
                  ]}
                  opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                  dotSize={2}
                />
              </motion.div>
            )}
          </AnimatePresence>
          {/* Radial gradient for the cute fade */}
        </LazyLoadComponent>
        {/* Grid 3 */}
        <LazyLoadComponent className="flex rounded-2xl bg-gradient-to-br from-gray-900 via-indigo-900 to-black grid-3 relative overflow-hidden items-center justify-center">
          {" "}
          <Aceternity3DCard className="flex flex-col items-center justify-center">
            <Aceternity3DCardBody className="bg-gradient-to-br from-gray-400 to-cyan-800 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[90vw] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-xl p-3 border">
              <Aceternity3DCardItem
                translateZ="50"
                className="text-base font-bold text-neutral-100 dark:text-white portfolio-text-shadow"
              >
                Portfolio
              </Aceternity3DCardItem>
              <Aceternity3DCardItem
                as="p"
                translateZ="60"
                className="text-neutral-600 text-xs max-w-xs mt-1 dark:text-neutral-300 "
              >
                WelCome To My Portfolio.
              </Aceternity3DCardItem>
              <Aceternity3DCardItem
                translateZ="100"
                className="w-full mt-1 flex justify-center items-center"
              >
                <img
                  src="/assets/picture/My-picture.png"
                  className="h-40 w-45 object-cover rounded-xl group-hover/card:shadow-2xl group-hover/card:shadow-cyan-500/90"
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
        </LazyLoadComponent>

        {/* Grid 4 */}
        <LazyLoadComponent className="bg-gradient-to-tl from-cyan-200 border-e-amber-500 to-black grid-4 rounded-2xl relative h-full">
          <AuroraBackground className="z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="relative flex flex-col gap-4 items-center justify-center px-4 z-20"
            >
              {/* <div className="flex flex-col items-center justify-center gap-4 size-full"> */}
              <p className="text-center headtext text-white portfolio-text-shadow ">
                Do you want to start project together?
              </p>
              <CopyEmailButton />
              {/* </div> */}
            </motion.div>
          </AuroraBackground>
        </LazyLoadComponent>
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
