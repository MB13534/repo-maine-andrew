import React from "react";

interface SectionHeaderProps {
  title: string;
  description?: string | React.ReactNode;
  align?: "center" | "left";
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  align = "center",
  className = "",
}) => {
  const textAlignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-6 md:mb-12 ${textAlignClass} ${className}`}>
      <h2 className="text-4xl sm:text-5xl font-bold mb-4">{title}</h2>
      {description && (
        <p className="text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;
