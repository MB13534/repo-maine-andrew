"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  MAPBOX_TOKEN,
  MAPBOX_STYLE,
  SERVICE_AREA_TOWNS_SOURCE_URL,
  SERVICE_TOWNS_FILL_LAYER,
  SERVICE_TOWNS_OUTLINE_LAYER,
} from "@/config/mapbox";

interface ServiceAreaMapProps {
  hoveredTown: string | null;
}

export default function ServiceAreaMap({ hoveredTown }: ServiceAreaMapProps) {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<mapboxgl.Map | null>(null);
  const popupRef = useRef<mapboxgl.Popup | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect theme mode changes
  useEffect(() => {
    const checkDarkMode = () =>
      document.documentElement.classList.contains("DARK");
    setIsDarkMode(checkDarkMode());
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDarkMode(checkDarkMode());
        }
      });
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Rebuild popup if theme changes
  useEffect(() => {
    if (popupRef.current) {
      popupRef.current.remove();
      popupRef.current = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
        className: isDarkMode ? "popup-dark" : "popup-light",
      });
    }
  }, [isDarkMode]);

  // Initialize map and add sources/layers
  useEffect(() => {
    if (mapInstance.current || !mapContainer.current) return;
    mapboxgl.accessToken = MAPBOX_TOKEN;
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: MAPBOX_STYLE,
      center: [-70.2553, 43.6591], // Portland, ME
      zoom: 7.5,
    });

    map.on("load", () => {
      // Service Area Towns ---
      map.addSource("service_area_towns", {
        type: "vector",
        url: SERVICE_AREA_TOWNS_SOURCE_URL,
      });
      map.addLayer(SERVICE_TOWNS_FILL_LAYER);
      map.addLayer(SERVICE_TOWNS_OUTLINE_LAYER);

      // Hover and Popups for Towns ---
      map.on("mousemove", "service_towns_fill", (e) => {
        if (!e.features || e.features.length === 0) return;
        const { TOWN } = e.features[0].properties || {};
        if (!popupRef.current) {
          popupRef.current = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false,
            className: isDarkMode ? "popup-dark" : "popup-light",
          });
        }
        popupRef.current
          .setLngLat(e.lngLat)
          .setHTML(`<strong>${TOWN || "Unknown Town"}</strong>`)
          .addTo(map);
        // When hovered, make the town more opaque
        map.setPaintProperty("service_towns_fill", "fill-opacity", [
          "case",
          ["==", ["get", "TOWN"], TOWN],
          0.7,
          0.2,
        ]);
      });

      map.on("mouseleave", "service_towns_fill", () => {
        map.setPaintProperty("service_towns_fill", "fill-opacity", 0.2);
        if (popupRef.current) {
          popupRef.current.remove();
          popupRef.current = null;
        }
      });

      mapInstance.current = map;
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [isDarkMode]);

  // React to hoveredTown from the chips
  useEffect(() => {
    if (!mapInstance.current) return;
    const map = mapInstance.current;
    if (hoveredTown) {
      // For chips, set the hovered town to be more opaque
      map.setPaintProperty("service_towns_fill", "fill-opacity", [
        "case",
        ["==", ["get", "TOWN"], hoveredTown],
        0.7,
        0.2,
      ]);
    } else {
      map.setPaintProperty("service_towns_fill", "fill-opacity", 0.2);
    }
  }, [hoveredTown]);

  return <div ref={mapContainer} className="w-full h-96 rounded-lg" />;
}
