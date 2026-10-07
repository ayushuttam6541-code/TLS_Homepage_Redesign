"use client";

import { Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { personalities } from "@/data/personalities";

export function AchievementsSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="mb-12">
          <SectionHeading
            label="Influential Personalities"
            title="Distinguished Visitors & Mentors"
          />
        </div>

        <div className="mb-12">
          <h3 className="mb-6 text-2xl font-semibold text-slate-900">
            Sports Personalities
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {personalities.sports.slice(0, 4).map((person, index) => (
              <Reveal key={person.name} delay={index * 0.1}>
                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <h4 className="font-semibold text-slate-900">{person.name}</h4>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                    {person.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-2xl font-semibold text-slate-900">
            Leaders of India
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {personalities.leaders.slice(0, 6).map((person, index) => (
              <Reveal key={person.name} delay={index * 0.1}>
                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <h4 className="font-semibold text-slate-900">{person.name}</h4>
                  <p className="mt-2 text-sm text-slate-600">
                    {person.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
