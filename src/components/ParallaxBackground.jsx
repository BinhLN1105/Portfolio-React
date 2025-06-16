import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  const [meteors, setMeteors] = useState([]); // State để lưu trữ thiên thạch

  useEffect(() => {
    generateMeteors();
  }, []); // Chỉ chạy một lần khi component mount

  const generateMeteors = () => {
    const numberOfMeteors = 4; // Số lượng thiên thạch bạn muốn

    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1, // Kích thước thiên thạch
        x: Math.random() * 100, // Vị trí X ban đầu (0-100% chiều rộng)
        y: Math.random() * 20, // Vị trí Y ban đầu (0-20% chiều cao)
        delay: Math.random() * 15, // Độ trễ animation
        animationDuration: Math.random() * 3 + 3, // Thời lượng animation
      });
    }
    setMeteors(newMeteors);
  };
  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-hidden">
        {/* Back ground Sky */}

        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />

        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-45">
          {" "}
          {/* -z-45 là một z-index giữa -50 và -40, đảm bảo nó nằm trên bầu trời và dưới mountain 3 */}
          {meteors.map(
            (
              meteor // Đổi tên biến lặp từ 'meteors' thành 'meteor' để tránh nhầm lẫn
            ) => (
              <div
                key={meteor.id}
                className="meteor animate-meteor"
                style={{
                  width: meteor.size * 50 + "px",
                  height: meteor.size + "px",
                  left: meteor.x + "%", // Sử dụng % cho vị trí linh hoạt hơn
                  top: meteor.y + "%", // Sử dụng % cho vị trí linh hoạt hơn
                  animationDelay: meteor.delay + "s", // Thêm 's' cho đơn vị giây
                  animationDuration: meteor.animationDuration + "s", // Thêm 's' cho đơn vị giây
                }}
              />
            )
          )}
        </div>

        {/* mountain layer 3 */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(/assets/mountain-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
          }}
        />
        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(/assets/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        />
        {/* mountain layer 2 */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: "url(/assets/mountain-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />
        {/* mountain layer 1 */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/assets/mountain-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
