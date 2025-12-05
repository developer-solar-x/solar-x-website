"use client"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin } from "lucide-react"
import { MapContainer, TileLayer, CircleMarker, useMapEvents, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

type ProvinceCode = "AB" | "ON" | "NS" | "NB"

type ProjectLocation = {
  lat: number
  lng: number
  province: ProvinceCode
  name?: string
  capacity?: string
}

// Solar project locations with details
const projectLocations: ProjectLocation[] = [
  // Alberta
  { lat: 53.5, lng: -113.5, province: "AB", name: "Edmonton Solar Farm", capacity: "25 MW" },
  { lat: 51.0, lng: -114.1, province: "AB", name: "Calgary Solar Project", capacity: "30 MW" },
  { lat: 55.0, lng: -118.5, province: "AB", name: "Grande Prairie Solar", capacity: "15 MW" },
  { lat: 52.5, lng: -111.5, province: "AB", name: "Red Deer Solar", capacity: "20 MW" },
  { lat: 54.2, lng: -116.0, province: "AB", name: "Peace River Solar", capacity: "18 MW" },
  { lat: 53.3, lng: -117.6, province: "AB", name: "Jasper Solar", capacity: "12 MW" },
  { lat: 50.9, lng: -113.9, province: "AB", name: "Travers Solar Project", capacity: "465 MW" },
  // Ontario
  { lat: 43.7, lng: -79.4, province: "ON", name: "Toronto Solar", capacity: "35 MW" },
  { lat: 45.4, lng: -75.7, province: "ON", name: "Ottawa Solar Farm", capacity: "28 MW" },
  { lat: 46.5, lng: -81.0, province: "ON", name: "Sudbury Solar", capacity: "22 MW" },
  { lat: 48.4, lng: -89.2, province: "ON", name: "Thunder Bay Solar", capacity: "15 MW" },
  { lat: 42.3, lng: -83.0, province: "ON", name: "Windsor Solar", capacity: "25 MW" },
  { lat: 43.0, lng: -82.3, province: "ON", name: "Sarnia Solar Project", capacity: "97 MW" },
  { lat: 44.2, lng: -79.5, province: "ON", name: "Barrie Solar", capacity: "20 MW" },
  // Nova Scotia
  { lat: 44.6, lng: -63.6, province: "NS", name: "Halifax Solar", capacity: "18 MW" },
  { lat: 45.0, lng: -64.0, province: "NS", name: "Kentville Solar", capacity: "12 MW" },
  { lat: 45.6, lng: -61.0, province: "NS", name: "Antigonish Solar", capacity: "10 MW" },
  { lat: 43.8, lng: -66.1, province: "NS", name: "Yarmouth Solar", capacity: "8 MW" },
  { lat: 46.1, lng: -60.2, province: "NS", name: "Sydney Solar", capacity: "15 MW" },
  // New Brunswick
  { lat: 46.1, lng: -64.8, province: "NB", name: "Moncton Solar", capacity: "20 MW" },
  { lat: 45.9, lng: -66.6, province: "NB", name: "Fredericton Solar", capacity: "18 MW" },
  { lat: 47.0, lng: -67.3, province: "NB", name: "Edmundston Solar", capacity: "12 MW" },
  { lat: 47.6, lng: -65.6, province: "NB", name: "Bathurst Solar", capacity: "10 MW" },
]

function MapClickHandler({ onMapClick }: { onMapClick: (lat: number, lng: number) => void }) {
  useMapEvents({
    click: (e) => {
      onMapClick(e.latlng.lat, e.latlng.lng)
    },
  })
  return null
}

export function LiveProductionMap() {
  const [clickedCoordinates, setClickedCoordinates] = useState<{ lat: number; lng: number } | null>(null)
  const [selectedProject, setSelectedProject] = useState<ProjectLocation | null>(null)

  const handleMapClick = (lat: number, lng: number) => {
    setClickedCoordinates({ lat, lng })
    setSelectedProject(null)
  }

  const handleMarkerClick = (project: ProjectLocation) => {
    setSelectedProject(project)
    setClickedCoordinates(null)
  }

  return (
    <section className="relative min-h-screen w-full py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Back Button */}
        <div className="mb-6 flex items-center justify-between">
          <Link href="/">
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-white/90 hover:bg-white border-[#1a2b6b] text-[#1a2b6b] hover:text-[#1a2b6b]"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <div className="text-right">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1a2b6b]">Live Production Data</h1>
            <p className="text-muted-foreground mt-1">Interactive map of Solar X installations across Canada</p>
          </div>
        </div>

        {/* Coordinates Display */}
        {(clickedCoordinates || selectedProject) && (
          <div className="mb-4 p-4 bg-gradient-to-r from-[#1a2b6b] to-[#152254] rounded-lg text-white shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-[#ff4a4a]" />
              <h3 className="font-semibold text-lg">
                {selectedProject ? selectedProject.name : "Clicked Location"}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-white/70">Latitude:</span>
                <span className="ml-2 font-mono font-semibold">
                  {selectedProject ? selectedProject.lat.toFixed(6) : clickedCoordinates?.lat.toFixed(6)}
                </span>
              </div>
              <div>
                <span className="text-white/70">Longitude:</span>
                <span className="ml-2 font-mono font-semibold">
                  {selectedProject ? selectedProject.lng.toFixed(6) : clickedCoordinates?.lng.toFixed(6)}
                </span>
              </div>
              {selectedProject && (
                <>
                  <div>
                    <span className="text-white/70">Province:</span>
                    <span className="ml-2 font-semibold">{selectedProject.province}</span>
                  </div>
                  <div>
                    <span className="text-white/70">Capacity:</span>
                    <span className="ml-2 font-semibold text-[#ff4a4a]">{selectedProject.capacity}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Map Container */}
        <div className="relative w-full h-[calc(100vh-280px)] min-h-[600px] rounded-2xl overflow-hidden bg-[#020617] ring-2 ring-[#1a2b6b]/20 shadow-2xl">
          <MapContainer
            center={[56, -96]} // Geographic center of Canada
            zoom={4}
            scrollWheelZoom={true}
            className="w-full h-full"
            style={{ backgroundColor: "#0a1628" }}
          >
            <TileLayer
              attribution='Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />

            <MapClickHandler onMapClick={handleMapClick} />

            {projectLocations.map((location, index) => (
              <CircleMarker
                key={`${location.province}-${index}`}
                center={[location.lat, location.lng]}
                radius={location.capacity && parseFloat(location.capacity) > 50 ? 10 : 6}
                pathOptions={{
                  color: "#ff4a4a",
                  fillColor: "#ff4a4a",
                  fillOpacity: 0.8,
                  weight: 2,
                }}
                eventHandlers={{
                  click: () => handleMarkerClick(location),
                }}
              >
                {selectedProject?.lat === location.lat && selectedProject?.lng === location.lng && (
                  <Popup>
                    <div className="p-2">
                      <h4 className="font-bold text-[#1a2b6b] mb-1">{location.name}</h4>
                      <p className="text-sm text-muted-foreground">Province: {location.province}</p>
                      <p className="text-sm text-[#ff4a4a] font-semibold">Capacity: {location.capacity}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
                      </p>
                    </div>
                  </Popup>
                )}
              </CircleMarker>
            ))}

            {/* Display clicked coordinates marker */}
            {clickedCoordinates && !selectedProject && (
              <CircleMarker
                center={[clickedCoordinates.lat, clickedCoordinates.lng]}
                radius={8}
                pathOptions={{
                  color: "#1a2b6b",
                  fillColor: "#1a2b6b",
                  fillOpacity: 0.6,
                  weight: 3,
                }}
              >
                <Popup>
                  <div className="p-2">
                    <p className="text-sm font-semibold text-[#1a2b6b]">Coordinates</p>
                    <p className="text-xs font-mono">
                      {clickedCoordinates.lat.toFixed(6)}, {clickedCoordinates.lng.toFixed(6)}
                    </p>
                  </div>
                </Popup>
              </CircleMarker>
            )}
          </MapContainer>
        </div>

        {/* Legend */}
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md border border-gray-200">
          <h3 className="font-semibold text-[#1a2b6b] mb-2">Legend</h3>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#ff4a4a]"></div>
              <span>Solar Installation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#ff4a4a] border-2 border-[#ff4a4a]" style={{ width: "12px", height: "12px" }}></div>
              <span>Large Installation (&gt;50 MW)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#1a2b6b]"></div>
              <span>Clicked Location</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

