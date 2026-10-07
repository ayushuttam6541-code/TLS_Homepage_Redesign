"use client";

import { Reveal } from "@/components/animation/Reveal";
import { Container } from "@/components/ui/Container";
import { statistics } from "@/data/statistics";

export function StatisticsSection() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <p className="text-5xl font-bold text-amber-500 sm:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-wider text-slate-300">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
