import React, { useState, useEffect } from "react";
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useToggle } from "../ToggleContext";

// Default items
const DEFAULT_ITEMS = [
  { id: 1, title: "Web Development", description: "Building responsive and performant web applications.", icon: <FiFileText /> },
  { id: 2, title: "Mobile Development", description: "Creating native and cross-platform mobile applications.", icon: <FiCircle /> },
  { id: 3, title: "UI/UX Design", description: "Designing intuitive and beautiful interfaces.", icon: <FiLayers /> },
  { id: 4, title: "Backend Development", description: "Developing robust server-side solutions.", icon: <FiLayout /> },
  { id: 5, title: "Performance Optimization", description: "Enhancing application speed and efficiency.", icon: <FiCode /> },
];

// Animation variants
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
  exit: (direction) => ({
    x: direction < 0 ? 200 : -200,
    opacity: 0,
    transition: { duration: 0.4 },
  }),
};

const swipeThreshold = 100; // Minimum drag+velocity to count as swipe

export default function Carousel({
  items = DEFAULT_ITEMS,
  autoPlay = true,
  autoPlayDelay = 4000,
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const { isToggled } = useToggle();

  // Autoplay
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      paginate(1);
    }, autoPlayDelay);

    return () => clearInterval(interval);
  }, [index, autoPlay, autoPlayDelay]);

  // Slide navigation
  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + items.length) % items.length);
  };

  const currentItem = items[index];

  return (
    <div
      className={`w-full max-w-md mx-auto p-4 rounded-xl border overflow-hidden ${
        isToggled ? "bg-white border-gray-200" : "bg-gray-900 border-gray-700"
      }`}
    >
      <div className="relative w-full h-[220px] sm:h-[200px] flex items-center justify-center">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentItem.id}
            className="absolute w-full"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={(e, { offset, velocity }) => {
              const swipePower = Math.abs(offset.x) * velocity.x;

              if (swipePower < -swipeThreshold) {
                paginate(1);
              } else if (swipePower > swipeThreshold) {
                paginate(-1);
              }
            }}
          >
            <div className="text-center px-4">
              <div className="flex justify-center mb-4">
                <div
                  className={`p-3 rounded-full ${
                    isToggled ? "bg-gray-200 text-gray-900" : "bg-gray-800 text-white"
                  }`}
                >
                  {currentItem.icon}
                </div>
              </div>
              <h3
                className={`text-lg font-semibold ${
                  isToggled ? "text-gray-900" : "text-white"
                }`}
              >
                {currentItem.title}
              </h3>
              <p
                className={`text-sm mt-2 ${
                  isToggled ? "text-gray-600" : "text-gray-400"
                }`}
              >
                {currentItem.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => paginate(-1)}
          className="text-sm text-gray-400 hover:text-white transition"
        >
          ← Prev
        </button>
        <div className="flex gap-2">
          {items.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                i === index
                  ? isToggled
                    ? "bg-gray-800"
                    : "bg-white"
                  : isToggled
                  ? "bg-gray-300"
                  : "bg-gray-600"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => paginate(1)}
          className="text-sm text-gray-400 hover:text-white transition"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
