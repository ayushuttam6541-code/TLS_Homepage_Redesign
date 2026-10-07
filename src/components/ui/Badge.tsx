import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
        {
          "bg-amber-100 text-amber-800": variant === "default",
          "border border-slate-300 text-slate-700": variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
