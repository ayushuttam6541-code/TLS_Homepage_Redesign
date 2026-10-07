"use client";

import { Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { awards } from "@/data/awards";

export function AwardsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <Container>
        <div className="mb-12">
          <SectionHeading
            label="Excellence"
            title="Recognized Excellence"
            description="We believe in celebrating the hard work and perseverance of the best!"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map((award, index) => (
            <Reveal key={award.title} delay={index * 0.1}>
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-6 text-center">
                <div className="mb-4 text-4xl">🏆</div>
                <h3 className="font-semibold text-slate-900">{award.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{award.year}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
