"use client";

import { Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { sports } from "@/data/sports";

export function SportsSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="mb-12">
          <SectionHeading
            label="Sports"
            title="16+ Olympic Sports"
            description="It's not just a facility. At Tulas it's the foundation! 16+ sports curated to bring joy and discipline to your life."
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {sports.map((sport, index) => (
            <Reveal key={sport.name} delay={index * 0.05}>
              <div className="rounded-lg border border-slate-200 bg-white p-4 text-center transition-all duration-300 hover:border-amber-600 hover:shadow-md">
                <p className="font-medium text-slate-900">{sport.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
