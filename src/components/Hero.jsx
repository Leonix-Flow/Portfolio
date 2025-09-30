import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from "react-icons/fi";

// Default items
const DEFAULT_ITEMS = [
  { id: 1, title: "Text Animations", description: "Cool text animations for your projects.", icon: <FiFileText className="h-4 w-4 text-white" /> },
  { id: 2, title: "Animations", description: "Smooth animations for your projects.", icon: <FiCircle className="h-4 w-4 text-white" /> },
  { id: 3, title: "Components", description: "Reusable components for your projects.", icon: <FiLayers className="h-4 w-4 text-white" /> },
  { id: 4, title: "Backgrounds", description: "Beautiful backgrounds and patterns for your projects.", icon: <FiLayout className="h-4 w-4 text-white" /> },
  { id: 5, title: "Common UI", description: "Common UI components are coming soon!", icon: <FiCode className="h-4 w-4 text-white" /> },
];

// Motion configs
const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  // Loop mode includes first item at the end
  const carouselItems = loop ? [...items, items[0]] : items;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const x = useMotionValue(0);
  const containerRef = useRef(null);

  // --- Pause on hover ---
  useEffect(() => {
    if (!pauseOnHover || !containerRef.current) return;

    const container = containerRef.current;
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pauseOnHover]);

  // --- Autoplay ---
  useEffect(() => {
    if (!autoplay || (pauseOnHover && isHovered)) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === items.length - 1 && loop) return prev + 1;
        if (prev === carouselItems.length - 1) return loop ? 0 : prev;
        return prev + 1;
      });
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover]);

  // --- Transition handling ---
  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  // --- Drag handling ---
  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info;

    if (offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) =>
        loop && prev === items.length - 1 ? prev + 1 : Math.min(prev + 1, carouselItems.length - 1)
      );
    } else if (offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) =>
        loop && prev === 0 ? items.length - 1 : Math.max(prev - 1, 0)
      );
    }
  };

  // --- Drag constraints (non-loop only) ---
  const dragProps = loop
    ? {}
    : {
        dragConstraints: { left: -trackItemOffset * (carouselItems.length - 1), right: 0 },
      };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4 ${
        round ? "rounded-full border border-white" : "rounded-2xl border border-[#222]"
      }`}
      style={{ width: `${baseWidth}px`, ...(round && { height: `${baseWidth}px` }) }}
    >
      {/* Track */}
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const rotateY = useTransform(
            x,
            [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset],
            [90, 0, -90],
            { clamp: false }
          );

          return (
            <motion.div
              key={index}
              className={`relative shrink-0 flex flex-col ${
                round
                  ? "items-center justify-center text-center bg-[#060010] border-0"
                  : "items-start justify-between bg-[#222] border border-[#222] rounded-xl"
              } overflow-hidden cursor-grab active:cursor-grabbing`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : "100%",
                rotateY,
                ...(round && { borderRadius: "50%" }),
              }}
              transition={effectiveTransition}
            >
              <div className={round ? "p-0 m-0" : "mb-4 p-5"}>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#060010]">
                  {item.icon}
                </span>
              </div>
              <div className="p-5">
                <h3 className="mb-1 font-black text-lg text-white">{item.title}</h3>
                <p className="text-sm text-white">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Dots */}
      <div
        className={`flex w-full justify-center ${
          round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : ""
        }`}
      >
        <div className="mt-4 flex w-[150px] justify-between px-8">
          {items.map((_, index) => {
            const isActive = currentIndex % items.length === index;
            return (
              <motion.div
                key={index}
                className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                  isActive
                    ? round
                      ? "bg-white"
                      : "bg-[#333]"
                    : round
                    ? "bg-[#555]"
                    : "bg-[rgba(51,51,51,0.4)]"
                }`}
                animate={{ scale: isActive ? 1.2 : 1 }}
                onClick={() => setCurrentIndex(index)}
                transition={{ duration: 0.15 }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
