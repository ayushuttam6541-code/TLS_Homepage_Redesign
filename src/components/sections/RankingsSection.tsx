"use client";

import { Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { rankings } from "@/data/rankings";

export function RankingsSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="mb-12">
          <SectionHeading
            label="Recognition"
            title="Rankings & Achievements"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rankings.map((ranking, index) => (
            <Reveal key={ranking.location} delay={index * 0.1}>
              <div className="rounded-lg border-2 border-amber-600 bg-amber-50 p-6 text-center">
                <p className="text-4xl font-bold text-amber-600">
                  {ranking.rank}
                </p>
                <p className="mt-2 font-semibold text-slate-900">
                  {ranking.location}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  {ranking.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
