"use client";

import { Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-6">
              <SectionHeading
                label="About TIS"
                title="Excellence in Education Since 2012"
                description="Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless opportunities."
              />
              <p className="text-lg text-slate-600">
                We provide world-class education, modern facilities, and a
                nurturing environment for students to thrive academically,
                socially, and culturally.
              </p>
              <p className="text-base text-slate-600">
                Join TIS to be part of a community that encourages leadership,
                innovation, and lifelong learning.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/AtTIS.59351600.png"
                alt="About Tulas International School"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
