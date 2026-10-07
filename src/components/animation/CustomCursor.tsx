"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const mousePosition = useMousePosition();
  const cursorX = useMotionValue(mousePosition.x);
  const cursorY = useMotionValue(mousePosition.y);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY]);

  // Check if device has fine pointer (mouse)
  const isTouchDevice = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 hidden h-4 w-4 rounded-full border-2 border-amber-600 pointer-events-none md:block"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        scale: isHovering ? 2 : 1,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.2,
      }}
    />
  );
}
