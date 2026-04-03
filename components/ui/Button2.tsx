"use client";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative overflow-hidden font-medium transition-colors cursor-pointer";

  const variants = {
    primary: "bg-genesis-blue text-white hover:bg-genesis-blue/90",
    secondary: "bg-white text-genesis-navy hover:bg-white/80",
    outline:
      "border border-neutral-950 text-neutral-950 hover:bg-neutral-950 hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={`group ${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative block overflow-hidden">
        <span className="inline-block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
          {children}
        </span>
        <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
          {children}
        </span>
      </span>
    </button>
  );
}
