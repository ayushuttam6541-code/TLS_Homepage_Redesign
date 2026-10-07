"use client";

import { useState } from "react";
import { Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { testimonials } from "@/data/testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="mb-12">
          <SectionHeading
            label="Testimonials"
            title="From The Parents"
            description="What parents say about their experience with Tulas International School"
          />
        </div>

        <Reveal>
          <div className="relative">
            <Card className="max-w-4xl mx-auto">
              <div className="p-8">
                <blockquote className="mb-6 text-lg italic text-slate-700">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-slate-600">
                      {testimonials[currentIndex].relation}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="rounded-full border border-slate-300 p-2 transition-colors hover:bg-slate-100"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="rounded-full border border-slate-300 p-2 transition-colors hover:bg-slate-100"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </Card>

            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-amber-600" : "bg-slate-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
