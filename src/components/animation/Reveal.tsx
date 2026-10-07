"use client";

import { motion } from "framer-motion";
import React from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  amount?: number;
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  amount = 0.2,
  className,
}: RevealProps) {
  const variants = {
    up: { y: 30, opacity: 0 },
    down: { y: -30, opacity: 0 },
    left: { x: 30, opacity: 0 },
    right: { x: -30, opacity: 0 },
  };

  const animate = {
    y: 0,
    x: 0,
    opacity: 1,
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={animate}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
