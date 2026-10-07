"use client";

import { Reveal } from "@/components/animation/Reveal";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { contact } from "@/data/contact";

export function AdmissionsCTA() {
  return (
    <section className="py-20 bg-amber-50">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Ready to Start Your Tulas Journey?
            </h2>
            <p className="text-lg text-slate-600">
              Discover Tulas International School. Join a community that
              encourages leadership, innovation, and lifelong learning.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" href={contact.admissionUrl}>
                Apply Now
              </Button>
              <Button size="lg" variant="outline" href={`tel:${contact.phone}`}>
                Enquire Now
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
