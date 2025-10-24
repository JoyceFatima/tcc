"use client"

import { useEffect, useRef, useState } from "react"
import "leaflet/dist/leaflet.css"
import type { Map } from "leaflet"
import L from "leaflet"

// Corrige o problema do ícone padrão do marcador no Leaflet com Webpack/Next.js
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

interface DynamicMapProps {
  position: [number, number]
  popupText: string
}

export default function DynamicMap({ position, popupText }: DynamicMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<Map | null>(null)
  const markerRef = useRef<L.Marker | null>(null)

  useEffect(() => {
    // Inicializa o mapa apenas uma vez, quando o componente é montado
    if (mapContainerRef.current && !mapRef.current) {
      const map = L.map(mapContainerRef.current).setView(position, 16)
      mapRef.current = map

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      const marker = L.marker(position, { icon: markerIcon }).addTo(map).bindPopup(popupText)
      markerRef.current = marker
    }
  }, []) // Array de dependências vazio para garantir que rode apenas uma vez

  useEffect(() => {
    // Atualiza a visão do mapa e a posição do marcador quando a 'position' mudar
    if (mapRef.current && markerRef.current) {
      mapRef.current.setView(position, mapRef.current.getZoom())
      markerRef.current.setLatLng(position)
    }
  }, [position])

  useEffect(() => {
    // Atualiza o texto do popup quando ele mudar
    if (markerRef.current) {
      markerRef.current.setPopupContent(popupText)
    }
  }, [popupText])

  return <div ref={mapContainerRef} className="h-full w-full rounded-lg" style={{ zIndex: 0 }} />
}
