import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  target,
  rel,
  onClick,
}: ButtonProps) {
  const buttonClassName = cn(
    "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2",
    {
      "bg-amber-600 text-white hover:bg-amber-700 focus:ring-amber-600":
        variant === "primary",
      "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900":
        variant === "secondary",
      "border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white focus:ring-slate-900":
        variant === "outline",
    },
    {
      "px-4 py-2 text-sm": size === "sm",
      "px-6 py-3 text-base": size === "md",
      "px-8 py-4 text-lg": size === "lg",
    },
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={buttonClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
}
