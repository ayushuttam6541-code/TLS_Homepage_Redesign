"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { contact } from "@/data/contact";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-amber-50 pt-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Welcome to Tulas International School
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-600 sm:text-xl"
            >
              TIS is one of India&apos;s top boarding and day schools in Dehradun,
              India. Our CBSE curriculum focuses on academic excellence, holistic
              development, and preparing students to be global leaders.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base text-slate-600"
            >
              Explore our programs, campus life, achievements, and why TIS is the
              preferred choice for parents across India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button size="lg" href={contact.admissionUrl}>
                Apply Now
              </Button>
              <Button size="lg" variant="outline" href="#about">
                Explore TIS
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative h-[400px] lg:h-[500px]"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 opacity-20" />
            <div className="relative h-full w-full rounded-2xl bg-slate-200 flex items-center justify-center">
              <p className="text-slate-500">Campus Image Placeholder</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-slate-600 transition-colors hover:text-amber-600"
        >
          <span className="mb-2 text-sm">Scroll to explore</span>
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
