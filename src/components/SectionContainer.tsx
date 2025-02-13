import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionContainer({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`container mx-auto max-w-6xl px-3 sm:px-4 md:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
