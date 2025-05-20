import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { image1, image2, image3, image4, image5 } from "@/assets";

/**
 * AnimatedImageGallery visually captures key moments from the Kesho Angavu initiative.
 * It highlights how out-of-school youth engage in entrepreneurship, health education, and community outreach.
 */
const AnimatedImageGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const x = useMotionValue(0);
  const scale = useTransform(x, [-100, 0, 100], [0.9, 1, 0.9]);
  const opacity = useTransform(x, [-100, 0, 100], [0.5, 1, 0.5]);

  // Gallery images with mission-aligned descriptions
  const images = [
    {
      src: image1,
      alt: "Entrepreneurship in Action: Youth learning poultry farming for sustainable livelihoods"
    },
    {
      src: image2,
      alt: "Tech for Tomorrow: Digital literacy session on social media and practical IT skills"
    },
    {
      src: image3,
      alt: "Mentorship Circle: Success stories inspiring youth to dream beyond limitations"
    },
    {
      src: image4,
      alt: "Health Education Outreach: Promoting wellness and reproductive health in the community"
    },
    {
      src: image5,
      alt: "Together We Rise: Community clean-up led by youth as part of civic engagement"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (activeIndex + direction + images.length) % images.length;
      if (newIndex === 0 || newIndex === images.length - 1) {
        setDirection(-direction);
      }
      setActiveIndex(newIndex);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex, direction, images.length]);

  const handleDragEnd = (_, info) => {
    if (info.offset.x > 50) {
      setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    } else if (info.offset.x < -50) {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }
  };

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
      {/* Subtle ambient background effect */}
      <motion.div 
        className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-primary/50 opacity-30 blur-xl"
        animate={{ opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Sliding image gallery with drag interaction */}
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
            animate={{
              x: (index - activeIndex) * 100,
              scale: index === activeIndex ? 1 : 0.9,
              opacity: index === activeIndex ? 1 : 0.7
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            whileHover={{ scale: index === activeIndex ? 1.05 : 0.95 }}
          >
            <motion.img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-xl shadow-xl"
              style={{ scale, opacity }}
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

      {/* Dot navigation */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-primary w-6' : 'bg-white/50'}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedImageGallery;
