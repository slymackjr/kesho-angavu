import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { image1, image2, image3, image4, image5 } from "@/assets";

const HeroImageSphere = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue("40%");
  const images = [image1, image2, image3, image4, image5];
  const titles = [
    "Strength Training",
    "Cardio Blast",
    "Yoga Flow",
    "CrossFit Session",
    "Youth Program"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
    animate(radius, "30%", { duration: 0.4 });
  };

  const handleMouseLeave = () => {
    animate(radius, "40%", { duration: 0.4 });
  };

  const backgroundImage = useMotionTemplate`url(${images[activeIndex]})`;

  return (
    <div className="flex justify-center mt-6 lg:mt-0">
      <motion.div
        className="relative w-full max-w-[90%] sm:max-w-[500px] aspect-[1/1]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 opacity-70 blur-3xl"
          animate={{
            x: [0, 10, -10, 0],
            y: [0, -15, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
          style={{
            backgroundImage,
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="w-full h-full"
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
            whileHover={{
              rotateY: [0, 5, -5, 0],
              rotateX: [0, -5, 3, 0],
              transition: { duration: 1.5, repeat: Infinity },
            }}
          >
            <motion.img
              src={images[activeIndex]}
              alt={titles[activeIndex]}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              style={{ transform: "translateZ(20px)" }}
            />
          </motion.div>

          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/60"
              initial={{
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                width: Math.random() * 8 + 2,
                height: Math.random() * 8 + 2,
              }}
              animate={{
                x: [null, Math.random() * 100 - 50],
                y: [null, Math.random() * 100 - 50],
                opacity: [0.7, 0.3, 0.7],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </motion.div>

        {/* Image Title */}
        <div className="absolute bottom-14 w-full text-center z-10">
          <h3 className="text-white text-lg font-semibold drop-shadow-md">
            {titles[activeIndex]}
          </h3>
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
          {images.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-white/30'}`}
              whileHover={{ scale: 1.5 }}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroImageSphere;
