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
  // Ontario
  { lat: 43.7, lng: -79.4, province: "ON" },
  { lat: 45.4, lng: -75.7, province: "ON" },
  { lat: 46.5, lng: -81.0, province: "ON" },
  { lat: 48.4, lng: -89.2, province: "ON" },
  { lat: 42.3, lng: -83.0, province: "ON" },
  // Nova Scotia
  { lat: 44.6, lng: -63.6, province: "NS" },
  { lat: 45.0, lng: -64.0, province: "NS" },
  { lat: 45.6, lng: -61.0, province: "NS" },
  { lat: 43.8, lng: -66.1, province: "NS" },
  // New Brunswick
  { lat: 46.1, lng: -64.8, province: "NB" },
  { lat: 45.9, lng: -66.6, province: "NB" },
  { lat: 47.0, lng: -67.3, province: "NB" },
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
    <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden">
      <MapContainer
        center={[56, -96]} // Rough geographic center of Canada
        zoom={4}
        scrollWheelZoom={false}
        className="w-full h-full"
        style={{ backgroundColor: "#0a1628" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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


