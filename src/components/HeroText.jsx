import { FlipWords } from "./FlipWords";
import TypingEffect from "./TypingEffect";
import { motion } from "motion/react";
const HeroText = () => {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  const myTexts = [
    "An IT Student.",
    "A Developer.",
    // Text on screen
  ];
  const words = ["Frontend", "Backend", "Designer"];
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space md:-translate-x-30">
        <motion.h1
          className="text-4xl font medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Nhat Binh
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            <TypingEffect
              texts={myTexts}
              typingSpeed={100} // Điều chỉnh tốc độ gõ
              deletingSpeed={60} // Điều chỉnh tốc độ xóa (nếu bạn muốn nó xóa đi)
              pauseTime={3000} // Thời gian tạm dừng sau khi gõ xong
              // Bạn có thể thêm các lớp Tailwind vào đây nếu cần để khớp với kiểu của thẻ p cũ
              className="text-4xl font-medium text-neutral-300 min-w-[500px]"
            />
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-6xl"
            />
          </motion.div>
          <motion.p
            className="text-3xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Studying at Ho Chi Minh City
            <br />
            University of Transport
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col space-y-2 md:hidden">
        <motion.p
          className="text-3xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Nhat Binh
        </motion.p>
        <div className="flex flex-col items-center">
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            <TypingEffect
              texts={myTexts}
              typingSpeed={100} // Điều chỉnh tốc độ gõ
              deletingSpeed={60} // Điều chỉnh tốc độ xóa (nếu bạn muốn nó xóa đi)
              pauseTime={3000} // Thời gian tạm dừng sau khi gõ xong
              // Bạn có thể thêm các lớp Tailwind vào đây nếu cần để khớp với kiểu của thẻ p cũ
              className="text-3xl font-medium text-neutral-300"
            />
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-4xl"
            />
          </motion.div>
          <motion.p
            className="text-2xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Studying at Ho Chi Minh City University of Transport
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
