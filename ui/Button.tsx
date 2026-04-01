"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "red" | "blue";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  onClick,
  variant = "blue",
  className = "",
}) => {
  const baseClasses =
    "text-xs uppercase tracking-widest px-5 py-2.5 font-poppins w-fit transition-colors";

  const variantClasses =
    variant === "red"
      ? "text-white bg-genesis-red hover:bg-genesis-red-dark"
      : "text-white bg-genesis-navy hover:bg-genesis-navy-dark";

  const finalClasses = `${baseClasses} ${variantClasses} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={finalClasses}>
        {text} →
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={finalClasses}>
      {text} →
    </button>
  );
};

export default Button;
