"use client";

import { Reveal } from "@/components/animation/Reveal";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { contact } from "@/data/contact";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function VirtualTourSection() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <Container>
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Dive Into Our...
              </h2>
              <h3 className="text-5xl font-bold text-amber-500 sm:text-6xl">
                Virtual Tour
              </h3>
              <p className="text-lg text-slate-300">
                Experience our world-class campus from anywhere. Take a virtual
                tour to explore our facilities, classrooms, sports grounds, and
                living spaces.
              </p>
              <Button
                size="lg"
                href={contact.virtualTourUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Take the Virtual Tour
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/BestResidential.5173db8d.jpg"
                alt="Tulas International School Virtual Tour"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
