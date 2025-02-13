import React from "react";

export interface Section {
  title: string;
  content: string;
}

export interface StaticPageProps {
  title: string;
  intro: string;
  sections: Section[];
  contactEmail: string;
}

export default function StaticPage({
  title,
  intro,
  sections,
  contactEmail,
}: StaticPageProps) {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-6 bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-base">{intro}</p>

      {sections.map((section, index) => (
        <section key={index}>
          <h2 className="text-xl font-semibold mb-2">
            {index + 1}. {section.title}
          </h2>
          <p className="text-base">{section.content}</p>
        </section>
      ))}

      <p className="mt-4 text-base">
        If you have any questions, please contact us at:{" "}
        <a href={`mailto:${contactEmail}`} className="underline">
          {contactEmail}
        </a>
      </p>
    </div>
  );
}
