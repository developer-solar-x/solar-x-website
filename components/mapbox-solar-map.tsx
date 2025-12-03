"use client"

import { useState, useMemo, useEffect } from "react"
import { MapPin } from "lucide-react"

// Travers Solar Project - Canada's Largest Solar Farm
// Located in Vulcan County, Alberta
const TRAVERS_SOLAR_FARM = {
  name: "Travers Solar Project",
  location: "Vulcan County, Alberta",
  capacity: "465 MW",
  coordinates: {
    latitude: 50.3,
    longitude: -113.2,
  },
  description: "Canada's largest solar farm with 465 MW capacity",
}

// Other major solar projects in Canada
const solarProjects = [
  {
    name: "Travers Solar Project",
    location: "Vulcan County, AB",
    capacity: "465 MW",
    coordinates: { latitude: 50.3, longitude: -113.2 },
    province: "AB",
  },
  {
    name: "Sarnia Solar Project",
    location: "Sarnia, ON",
    capacity: "97 MW",
    coordinates: { latitude: 42.99, longitude: -82.4 },
    province: "ON",
  },
  {
    name: "Brooks Solar",
    location: "Brooks, AB",
    capacity: "15 MW",
    coordinates: { latitude: 50.56, longitude: -111.9 },
    province: "AB",
  },
]

type SolarProject = {
  name: string
  location: string
  capacity: string
  coordinates: { latitude: number; longitude: number }
  description: string
}

export function SolarMap({ activeProvince }: { activeProvince: string }) {
  const [selectedProject, setSelectedProject] = useState<SolarProject | null>(null)
  const [mounted, setMounted] = useState(false)
  const [MapComponent, setMapComponent] = useState<any>(null)
  const [MarkerComponent, setMarkerComponent] = useState<any>(null)
  const [PopupComponent, setPopupComponent] = useState<any>(null)

  // Get Mapbox token from environment variable
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"

  useEffect(() => {
    setMounted(true)
    
    // Dynamically import Mapbox components only on client
    if (typeof window !== "undefined") {
      import("react-map-gl/mapbox")
        .then((mod) => {
          setMapComponent(() => mod.default)
          setMarkerComponent(() => mod.Marker)
          setPopupComponent(() => mod.Popup)
        })
        .catch((err) => {
          console.error("Failed to load Mapbox:", err)
        })
    }
  }, [])

  const filteredProjects = useMemo(() => {
    if (activeProvince === "All") {
      return solarProjects
    }
    const provinceMap: Record<string, string> = {
      AB: "AB",
      NB: "NB",
      NS: "NS",
      ON: "ON",
    }
    return solarProjects.filter((project) => project.province === provinceMap[activeProvince])
  }, [activeProvince])

  // Center on Travers Solar Project (largest in Canada)
  const [viewState, setViewState] = useState({
    longitude: TRAVERS_SOLAR_FARM.coordinates.longitude,
    latitude: TRAVERS_SOLAR_FARM.coordinates.latitude,
    zoom: 5.5,
  })

  if (!mounted || !MapComponent || !MarkerComponent || !PopupComponent) {
    return (
      <div className="relative w-full h-[600px] rounded-lg overflow-hidden border border-border bg-primary/20 flex items-center justify-center">
        <div className="text-center">
          <div className="text-primary-foreground/60 mb-2">Loading map...</div>
          <div className="text-primary-foreground/40 text-xs">Please wait while we load the interactive map</div>
        </div>
      </div>
    )
  }

  const Map = MapComponent
  const Marker = MarkerComponent
  const Popup = PopupComponent

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden border border-border" style={{ minHeight: "600px" }}>
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapboxAccessToken={mapboxToken}
        style={{ width: "100%", height: "600px" }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        attributionControl={false}
      >
        {/* Highlight Travers Solar Project (largest) */}
        <Marker
          longitude={TRAVERS_SOLAR_FARM.coordinates.longitude}
          latitude={TRAVERS_SOLAR_FARM.coordinates.latitude}
          anchor="bottom"
        >
          <div
            className="cursor-pointer"
            onClick={() => setSelectedProject(TRAVERS_SOLAR_FARM)}
          >
            <div className="relative">
              <MapPin className="w-10 h-10 text-[#e31b23] drop-shadow-lg animate-pulse" />
              <div className="absolute -top-2 -right-2 bg-[#e31b23] text-white text-xs font-bold px-2 py-1 rounded-full">
                Largest
              </div>
            </div>
          </div>
        </Marker>

        {/* Other solar projects */}
        {filteredProjects
          .filter((project) => project.name !== TRAVERS_SOLAR_FARM.name)
          .map((project, index) => (
            <Marker
              key={index}
              longitude={project.coordinates.longitude}
              latitude={project.coordinates.latitude}
              anchor="bottom"
            >
              <div
                className="cursor-pointer"
                onClick={() =>
                  setSelectedProject({
                    name: project.name,
                    location: project.location,
                    capacity: project.capacity,
                    coordinates: project.coordinates,
                    description: `${project.capacity} solar project`,
                  })
                }
              >
                <MapPin className="w-8 h-8 text-primary opacity-80" />
              </div>
            </Marker>
          ))}

        {/* Popup for selected project */}
        {selectedProject && (
          <Popup
            longitude={selectedProject.coordinates.longitude}
            latitude={selectedProject.coordinates.latitude}
            anchor="bottom"
            onClose={() => setSelectedProject(null)}
            closeButton={true}
            closeOnClick={false}
            className="mapbox-popup"
          >
            <div className="p-3 min-w-[200px]">
              <h3 className="font-bold text-lg text-foreground mb-1">
                {selectedProject.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {selectedProject.location}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#e31b23] bg-[#e31b23]/10 px-2 py-1 rounded">
                  {selectedProject.capacity}
                </span>
                <span className="text-xs text-muted-foreground">
                  {selectedProject.description}
                </span>
              </div>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  )
}
