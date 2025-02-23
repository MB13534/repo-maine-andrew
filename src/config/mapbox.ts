import { FillLayerSpecification, LineLayerSpecification } from "mapbox-gl";

export const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";
export const MAPBOX_STYLE = "mapbox://styles/mapbox/light-v10";

export const SERVICE_AREAS = [
  "Portland",
  "South Portland",
  "Westbrook",
  "Falmouth",
  "Scarborough",
  "Cape Elizabeth",
  "Windham",
  "Gorham",
  "Biddeford",
  "Saco",
  "Old Orchard Beach",
  "Yarmouth",
  "Cumberland",
  "Freeport",
  "Brunswick",
];

export const OTHER_AREAS = [
  "Acton",
  "Alfred",
  "Arundel",
  "Auburn",
  "Baldwin",
  "Berwick",
  "Bridgton",
  "Brownfield",
  "Buxton",
  "Casco",
  "Chebeague Island",
  "Cornish",
  "Dayton",
  "Denmark",
  "Durham",
  "Gray",
  "Harpswell",
  "Harrison",
  "Hiram",
  "Hollis",
  "Kennebunk",
  "Kennebunkport",
  "Lebanon",
  "Lewiston",
  "Limerick",
  "Limington",
  "Lisbon",
  "Long Island",
  "Lyman",
  "Mechanic Falls",
  "Minot",
  "Naples",
  "New Gloucester",
  "Newfield",
  "North Berwick",
  "North Yarmouth",
  "Otisfield",
  "Oxford",
  "Parsonsfield",
  "Poland",
  "Porter",
  "Pownal",
  "Raymond",
  "Sabattus",
  "Sanford",
  "Sebago",
  "Shapleigh",
  "Standish",
  "Topsham",
  "Waterboro",
  "Wells",
];

// Tileset source URLs and source-layer names
export const SERVICE_AREA_TOWNS_SOURCE_URL = "mapbox://mb13534.agg4bb96"; // simplified version
export const SERVICE_AREA_TOWNS_SOURCE_LAYER =
  "service_area_towns_simplified-91npgy";

// Service Area Towns Layers
export const SERVICE_TOWNS_FILL_LAYER: FillLayerSpecification = {
  id: "service_towns_fill",
  type: "fill",
  source: "service_area_towns",
  "source-layer": SERVICE_AREA_TOWNS_SOURCE_LAYER,
  paint: {
    "fill-color": [
      "case",
      ["in", ["get", "TOWN"], ["literal", SERVICE_AREAS]],
      "#3b82f6",
      ["in", ["get", "TOWN"], ["literal", OTHER_AREAS]],
      "#F59E0B",
      "#d1d5db",
    ],
    "fill-opacity": 0.2,
  },
};

export const SERVICE_TOWNS_OUTLINE_LAYER: LineLayerSpecification = {
  id: "service_towns_outline",
  type: "line",
  source: "service_area_towns",
  "source-layer": SERVICE_AREA_TOWNS_SOURCE_LAYER,
  paint: {
    "line-color": "#4b5563",
    "line-width": 3,
  },
};
