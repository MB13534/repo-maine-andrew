"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MAPBOX_TOKEN, MAPBOX_STYLE } from "@/lib/mapbox";

interface ServiceAreaMapProps {
  hoveredTown: string | null;
}

export default function ServiceAreaMap({ hoveredTown }: ServiceAreaMapProps) {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<mapboxgl.Map | null>(null);
  const popupRef = useRef<mapboxgl.Popup | null>(null);

  useEffect(() => {
    if (mapInstance.current || !mapContainer.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: MAPBOX_STYLE,
      center: [-70.2553, 43.6591], // Portland, ME coordinates
      zoom: 9,
    });

    map.on("load", () => {
      map.addSource("service-area", {
        type: "vector",
        url: "mapbox://mb13534.cq4v9lwz",
      });

      map.addLayer({
        id: "service-area-fill",
        type: "fill",
        source: "service-area",
        "source-layer": "service_area-9830oo",
        paint: {
          "fill-color": "#1E40AF",
          "fill-opacity": 0.4,
        },
      });

      map.addLayer({
        id: "service-area-outline",
        type: "line",
        source: "service-area",
        "source-layer": "service_area-9830oo",
        paint: {
          "line-color": "#1E3A8A",
          "line-width": 2,
        },
      });

      // Hover effect on map
      map.on("mousemove", "service-area-fill", (e) => {
        if (e.features && e.features.length > 0) {
          const townName = e.features[0].properties?.TOWN || "Unknown Town";

          // Update hovered town name
          if (!hoveredTown) {
            map.setPaintProperty("service-area-fill", "fill-opacity", [
              "case",
              ["==", ["get", "TOWN"], townName],
              0.7,
              0.4,
            ]);

            // Create/update popup
            if (!popupRef.current) {
              popupRef.current = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false,
              });
            }
            popupRef.current
              .setLngLat(e.lngLat)
              .setHTML(`<strong>${townName}</strong>`)
              .addTo(map);
          }
        }
      });

      map.on("mouseleave", "service-area-fill", () => {
        if (!hoveredTown) {
          map.setPaintProperty("service-area-fill", "fill-opacity", 0.4);
        }
        if (popupRef.current) popupRef.current.remove();
      });
    });

    map.on("idle", () => (mapInstance.current = map));

    return () => map.remove();
  }, []);

  // Effect for Badge hover
  useEffect(() => {
    if (!mapInstance.current) return;
    const map = mapInstance.current;

    if (hoveredTown) {
      map.setPaintProperty("service-area-fill", "fill-opacity", [
        "case",
        ["==", ["get", "TOWN"], hoveredTown],
        0.7, // Highlight hovered town from badge
        0.4,
      ]);
    } else {
      map.setPaintProperty("service-area-fill", "fill-opacity", 0.4);
    }
  }, [hoveredTown]);

  return <div ref={mapContainer} className="w-full h-96 rounded-lg" />;
}
