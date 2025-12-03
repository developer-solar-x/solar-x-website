"use client"

import { useMemo } from "react"
import { MapContainer, TileLayer, CircleMarker } from "react-leaflet"

type ProvinceCode = "AB" | "ON" | "NS" | "NB"

type ProjectLocation = {
  lat: number
  lng: number
  province: ProvinceCode
}

// Approximate project locations across Canada
const projectLocations: ProjectLocation[] = [
  // Alberta
  { lat: 53.5, lng: -113.5, province: "AB" },
  { lat: 51.0, lng: -114.1, province: "AB" },
  { lat: 55.0, lng: -118.5, province: "AB" },
  { lat: 52.5, lng: -111.5, province: "AB" },
  { lat: 54.2, lng: -116.0, province: "AB" },
  { lat: 53.3, lng: -117.6, province: "AB" }, // Rockies area
  { lat: 50.9, lng: -113.9, province: "AB" }, // Southern AB
  // Ontario
  { lat: 43.7, lng: -79.4, province: "ON" },
  { lat: 45.4, lng: -75.7, province: "ON" },
  { lat: 46.5, lng: -81.0, province: "ON" },
  { lat: 48.4, lng: -89.2, province: "ON" },
  { lat: 42.3, lng: -83.0, province: "ON" },
  { lat: 43.0, lng: -82.3, province: "ON" }, // Sarnia region
  { lat: 44.2, lng: -79.5, province: "ON" }, // Barrie region
  // Nova Scotia
  { lat: 44.6, lng: -63.6, province: "NS" },
  { lat: 45.0, lng: -64.0, province: "NS" },
  { lat: 45.6, lng: -61.0, province: "NS" },
  { lat: 43.8, lng: -66.1, province: "NS" },
  { lat: 46.1, lng: -60.2, province: "NS" }, // Cape Breton
  // New Brunswick
  { lat: 46.1, lng: -64.8, province: "NB" },
  { lat: 45.9, lng: -66.6, province: "NB" },
  { lat: 47.0, lng: -67.3, province: "NB" },
  { lat: 47.6, lng: -65.6, province: "NB" }, // Northern NB
]

export function CanadaLeafletMap({ activeProvince }: { activeProvince: string }) {
  const filteredLocations = useMemo(() => {
    if (activeProvince === "All") return projectLocations

    const provinceMap: Record<string, ProvinceCode> = {
      AB: "AB",
      ON: "ON",
      NS: "NS",
      NB: "NB",
    }

    const normalized = provinceMap[activeProvince]
    if (!normalized) return projectLocations

    return projectLocations.filter((loc) => loc.province === normalized)
  }, [activeProvince])

  return (
    <div className="relative w-full h-[360px] md:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden bg-[#020617] ring-1 ring-white/5">
      <MapContainer
        center={[56, -96]} // Rough geographic center of Canada
        zoom={4}
        scrollWheelZoom={false}
        className="w-full h-full"
        style={{ backgroundColor: "#0a1628" }}
      >
        <TileLayer
          // Esri World Imagery (satellite basemap)
          attribution='Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />

        {filteredLocations.map((location, index) => (
          <CircleMarker
            key={`${location.province}-${index}`}
            center={[location.lat, location.lng]}
            radius={6}
            pathOptions={{
              color: "#e31b23",
              fillColor: "#e31b23",
              fillOpacity: 0.9,
            }}
          />
        ))}
      </MapContainer>
    </div>
  )
}


