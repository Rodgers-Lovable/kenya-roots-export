'use client'

import { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'

const locations = [
  { lat: -0.47295002409858633, lng: 37.3331004850023, name: "Kirinyaga" },
  { lat: -0.416667, lng: 36.95, name: "Nyeri" },
  { lat: -0.819217133492977, lng: 34.77957604461098, name: "Kisii" },
  { lat: -0.7520007910420895, lng: 36.978675615749246, name: "Murang'a" },
  { lat: 0.7635169020124454, lng: 34.654347063039886, name: "Bungoma" },
  { lat: -0.0627669570519228, lng: 37.66436338870156, name: "Meru" },
]

function MyLeafletMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    import('leaflet').then((L) => {
      if (!containerRef.current || mapRef.current) return

      const map = L.map(containerRef.current).setView([-1.286389, 36.817223], 6)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map)

      locations.forEach((loc) => {
        L.marker([loc.lat, loc.lng]).addTo(map).bindPopup(loc.name)
      })

      mapRef.current = map
    })

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  return <div ref={containerRef} style={{ height: '500px', width: '100%' }} />
}

export default MyLeafletMap
