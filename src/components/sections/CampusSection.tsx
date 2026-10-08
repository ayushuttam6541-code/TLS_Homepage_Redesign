"use client";

import { Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

export function CampusSection() {
  return (
    <section className="py-20 bg-slate-50">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/tis-gurukul.18b098ef.png"
                alt="Tulas International School Campus"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col justify-center space-y-6">
              <SectionHeading
                label="Campus Life"
                title="22-Acre Pollution-Free Campus"
                description="Campus is where learning extends beyond classrooms."
              />
              <p className="text-lg text-slate-600">
                Our expansive campus provides the perfect environment for
                students to learn, grow, and thrive. With state-of-the-art
                facilities, lush green surroundings, and a pollution-free
                atmosphere, TIS offers an ideal setting for holistic education.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
