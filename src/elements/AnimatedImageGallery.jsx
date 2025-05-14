import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState, useEffect } from "react";
import { image1, image2, image3, image4, image5 } from "@/assets";

const AnimatedImageGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const x = useMotionValue(0);
  const scale = useTransform(x, [-100, 0, 100], [0.9, 1, 0.9]);
  const opacity = useTransform(x, [-100, 0, 100], [0.5, 1, 0.5]);

  const images = [
    { src: image1, alt: "Youth Center Activity 1" },
    { src: image2, alt: "Youth Center Activity 2" },
    { src: image3, alt: "Youth Center Event 1" },
    { src: image4, alt: "Youth Center Event 2" },
    { src: image5, alt: "Youth Center Gathering" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (activeIndex + direction) % images.length;
      if (newIndex === 0 || newIndex === images.length - 1) {
        setDirection(-direction);
      }
      setActiveIndex(newIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, direction, images.length]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 50) {
      // Swiped right
      setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    } else if (info.offset.x < -50) {
      // Swiped left
      setActiveIndex((prev) => (prev + 1) % images.length);
    }
  };

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
      {/* Background glow */}
      <motion.div 
        className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-primary/50 opacity-30 blur-xl"
        animate={{
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Main sliding images */}
      <motion.div
        className="relative w-full h-full"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        style={{ x }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`absolute w-full h-full rounded-xl overflow-hidden ${index === activeIndex ? 'z-10' : 'z-0'}`}
            initial={{ x: index === 0 ? 0 : 100 * index }}
            animate={{
              x: (index - activeIndex) * 100,
              scale: index === activeIndex ? 1 : 0.9,
              opacity: index === activeIndex ? 1 : 0.7,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            whileHover={{ scale: index === activeIndex ? 1.05 : 0.95 }}
          >
            <motion.img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-xl shadow-xl"
              style={{
                scale,
                opacity,
              }}
            />
            {index === activeIndex && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-white font-medium text-center">{image.alt}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-primary w-6' : 'bg-white/50'}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedImageGallery;