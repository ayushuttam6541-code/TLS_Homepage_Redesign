import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {label && (
        <p className="text-sm font-semibold tracking-wider uppercase text-amber-600">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-lg text-slate-600">{description}</p>
      )}
    </div>
  );
}
