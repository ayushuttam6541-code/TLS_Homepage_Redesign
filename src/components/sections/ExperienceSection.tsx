"use client";

import { Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

const experiences = [
  {
    title: "Academic Excellence",
    description:
      "CBSE curriculum designed to prepare students for global leadership",
  },
  {
    title: "Holistic Development",
    description:
      "Focus on overall growth through academics, sports, and extracurricular activities",
  },
  {
    title: "Leadership & Innovation",
    description:
      "Nurturing environment that encourages creative thinking and leadership skills",
  },
  {
    title: "World-Class Facilities",
    description:
      "Modern infrastructure and resources to support comprehensive learning",
  },
];

export function ExperienceSection() {
  return (
    <section className="py-20 bg-slate-50">
      <Container>
        <div className="mb-12">
          <SectionHeading
            label="Why Tulas"
            title="What Makes TIS Different"
            description="We believe in bringing out the best in every student—whether it's academics, music, art, or drama."
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((experience, index) => (
            <Reveal key={experience.title} delay={index * 0.1}>
              <Card hover>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {experience.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {experience.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
