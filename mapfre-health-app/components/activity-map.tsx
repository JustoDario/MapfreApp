"use client"

import { useEffect, useRef } from "react"

interface ActivityMapProps {
  activities: any[]
  onMarkerClick?: (activity: any) => void
  center?: [number, number]
  zoom?: number
}

export default function ActivityMap({
  activities,
  onMarkerClick,
  center = [40.4168, -3.7038], // Madrid por defecto
  zoom = 12, // Aumentado para mejor vista de Madrid
}: ActivityMapProps) {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)

  useEffect(() => {
    const loadLeaflet = async () => {
      if (window.L) return window.L

      const linkEl = document.createElement("link")
      linkEl.rel = "stylesheet"
      linkEl.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      linkEl.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
      linkEl.crossOrigin = ""
      document.head.appendChild(linkEl)

      const scriptEl = document.createElement("script")
      scriptEl.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
      scriptEl.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
      scriptEl.crossOrigin = ""
      document.head.appendChild(scriptEl)

      return new Promise((resolve) => {
        scriptEl.onload = () => resolve(window.L)
      })
    }

    const initMap = async () => {
      const L = await loadLeaflet()

      if (!mapRef.current) return

      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
      }

      const map = L.map(mapRef.current).setView(center, zoom)
      mapInstanceRef.current = map

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map)

      // Crear icono personalizado rojo moderno
      const customIcon = L.divIcon({
        className: "custom-map-marker",
        html: `
          <div class="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2">
            <div class="w-2 h-2 bg-white rounded-full"></div>
          </div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      })

      activities.forEach((activity) => {
        if (activity.coordinates) {
          const marker = L.marker(activity.coordinates, { icon: customIcon })
            .addTo(map)
            .bindPopup(
              `
              <div class="p-2">
                <div class="font-bold mb-1">${activity.title}</div>
                <div class="text-sm text-gray-600">${activity.location}</div>
              </div>
            `,
              {
                className: "custom-popup",
              },
            )

          if (onMarkerClick) {
            marker.on("click", () => {
              onMarkerClick(activity)
            })
          }
        }
      })

      if (activities.length > 1) {
        const bounds = []
        activities.forEach((activity) => {
          if (activity.coordinates) {
            bounds.push(activity.coordinates)
          }
        })

        if (bounds.length > 0) {
          map.fitBounds(bounds, { padding: [50, 50] })
        }
      }
    }

    initMap()

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
      }
    }
  }, [activities, center, zoom, onMarkerClick])

  return <div ref={mapRef} className="h-full w-full" />
}

