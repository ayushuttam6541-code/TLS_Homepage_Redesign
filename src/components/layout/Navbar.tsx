"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { contact } from "@/data/contact";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <a
                href="https://tis.edu.in"
                className="text-2xl font-bold text-slate-900"
              >
                TIS
              </a>
            </div>

            <nav className="hidden md:flex md:items-center md:space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-700 transition-colors hover:text-amber-600"
                >
                  {item.label}
                </a>
              ))}
              <Button size="sm" href={contact.admissionUrl}>
                Apply Now
              </Button>
            </nav>

            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-slate-900" />
              ) : (
                <Menu className="h-6 w-6 text-slate-900" />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 right-0 top-20 z-30 bg-white shadow-lg md:hidden"
          >
            <nav className="flex flex-col space-y-4 px-4 py-6">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium text-slate-700 transition-colors hover:text-amber-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button size="md" className="w-full" href={contact.admissionUrl}>
                Apply Now
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
