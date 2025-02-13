"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { otherAreas, serviceAreas } from "@/lib/mapbox";
import ServiceAreaMap from "@/components/maps/ServiceAreaMap";
import { Separator } from "@/components/ui/separator";
import { CheckCircle } from "lucide-react";

export default function ServiceAreaSection() {
  const [hoveredTown, setHoveredTown] = useState<string | null>(null);

  return (
    <section
      id="service-area"
      className="py-24 bg-muted px-4 sm:px-6 lg:px-8 text-center"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
          Service Area
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg text-muted-foreground">
          We proudly serve <strong>Portland, Maine</strong> and the following
          communities in the region:
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {serviceAreas.map((area) => (
            <Badge
              key={area}
              variant="outline"
              className="bg-primary text-primary-foreground cursor-pointer transition-transform transform hover:scale-105"
              onMouseEnter={() => setHoveredTown(area)}
              onMouseLeave={() => setHoveredTown(null)}
            >
              {area}
            </Badge>
          ))}
        </div>
        <ServiceAreaMap hoveredTown={hoveredTown} />
        <Separator />
        <div className="bg-background p-6 rounded-lg mt-8">
          <h3 className="text-lg font-semibold mb-4 text-foreground">
            Additional Service Areas
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {otherAreas.map((city) => (
              <div key={city} className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                {city}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
