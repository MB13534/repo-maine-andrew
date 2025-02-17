"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { otherAreas, serviceAreas } from "@/config/mapbox";
import ServiceAreaMap from "@/components/maps/ServiceAreaMap";
import { Separator } from "@/components/ui/separator";
import { CheckCircle } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export default function ServiceAreaSection() {
  const [hoveredTown, setHoveredTown] = useState<string | null>(null);

  return (
    <div className="container mx-auto max-w-6xl text-center px-3 sm:px-4 md:px-6 lg:px-8">
      <SectionHeader
        title="Service Area"
        description={
          <>
            We proudly serve <strong>Portland, Maine</strong> and the following
            communities in the region:
          </>
        }
      />
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
      <div className="bg-muted p-6 rounded-lg mt-8">
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
  );
}
