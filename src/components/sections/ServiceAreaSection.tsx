"use client";

import { useState } from "react";
import ServiceAreaMap from "@/components/maps/ServiceAreaMap";
import { Badge } from "@/components/ui/badge";

const serviceAreas = [
  "Portland",
  "South Portland",
  "Westbrook",
  "Falmouth",
  "Scarborough",
  "Cape Elizabeth",
  "Windham",
  "Gorham",
];

export default function ServiceAreaSection() {
  const [hoveredTown, setHoveredTown] = useState<string | null>(null);

  return (
    <section
      id="service-area"
      className="py-24 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8 text-center"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 dark:text-white">
          Service Area
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg dark:text-gray-300 text-gray-600">
          We proudly serve <strong>Portland, Maine</strong> and the following
          communities in the region:
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {serviceAreas.map((area) => (
            <Badge
              key={area}
              className="bg-blue-600 text-white cursor-pointer transition-transform transform hover:scale-105"
              onMouseEnter={() => setHoveredTown(area)}
              onMouseLeave={() => setHoveredTown(null)}
            >
              {area}
            </Badge>
          ))}
        </div>
        <ServiceAreaMap hoveredTown={hoveredTown} />
      </div>
    </section>
  );
}
