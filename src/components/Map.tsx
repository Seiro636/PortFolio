import { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const Map = () => {
  useEffect(() => {
    // Vérifier si la carte existe déjà
    if (document.getElementById('map')?.children.length) return
    // Créer la carte
    const map = L.map('map', {
      center: [47.2184, -1.5536], // Nantes
      zoom: 12,
      scrollWheelZoom: false,
    })
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map)
    // Marqueur par défaut
    L.marker([47.2184, -1.5536])
      .addTo(map)
      .bindPopup('Stage chez Keyzia (Nantes)')
  }, [])

  return (
    <div className="w-full h-72 rounded-lg overflow-hidden shadow-lg border border-gray-700 mt-8" id="map" />
  )
}

export default Map 