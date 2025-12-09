import React, { useEffect, useRef } from 'react';

// Using global Leaflet object from CDN to avoid build-time complexities in this environment
declare const L: any;

const MapDemo: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (mapContainerRef.current && !mapInstanceRef.current && typeof L !== 'undefined') {
      // Initialize Map focused on Buenos Aires (example center)
      const map = L.map(mapContainerRef.current).setView([-34.6037, -58.3816], 12);
      mapInstanceRef.current = map;

      // Dark Mode Tiles (CartoDB Dark Matter)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(map);

      // Add dummy markers with custom popups simulating "Sales Points"
      const locations = [
        { lat: -34.6037, lng: -58.3816, title: "Sede Central", val: "$45k" },
        { lat: -34.5800, lng: -58.4200, title: "Sucursal Palermo", val: "$32k" },
        { lat: -34.6200, lng: -58.3600, title: "Sucursal Puerto Madero", val: "$68k" },
        { lat: -34.6100, lng: -58.4500, title: "Depósito Oeste", val: "Stock" },
      ];

      locations.forEach(loc => {
        // Custom circle marker
        const circle = L.circleMarker([loc.lat, loc.lng], {
          color: '#3b82f6',
          fillColor: '#3b82f6',
          fillOpacity: 0.5,
          radius: 10
        }).addTo(map);

        circle.bindPopup(`
          <div style="font-family: sans-serif; color: #333;">
            <strong style="display:block; margin-bottom:4px; font-size:14px;">${loc.title}</strong>
            <span style="color: #2563eb; font-weight: bold;">${loc.val}</span>
          </div>
        `);
      });

      // Add a polygon to simulate a "Coverage Zone"
      const polygonPoints = [
        [-34.58, -58.45],
        [-34.58, -58.35],
        [-34.63, -58.35],
        [-34.63, -58.45]
      ];
      
      L.polygon(polygonPoints, {
        color: '#10b981',
        weight: 1,
        fillColor: '#10b981',
        fillOpacity: 0.1,
        dashArray: '5, 5'
      }).addTo(map).bindPopup("Zona de Cobertura Prioritaria");
    }

    // Cleanup
    return () => {
      // In a real app we might destroy the map, but React.StrictMode can cause issues with rapid destroy/init
      // leaving it managed by ref check usually suffices for this demo.
    };
  }, []);

  return (
    <div className="bg-slate-800/50 p-1 rounded-2xl border border-slate-700 h-[500px] relative overflow-hidden group">
      <div className="absolute top-4 left-4 z-[400] bg-slate-900/90 backdrop-blur text-white p-3 rounded-lg border border-slate-700 shadow-xl max-w-xs">
        <h4 className="font-bold text-sm mb-1 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          Inteligencia Geoespacial
        </h4>
        <p className="text-xs text-slate-400">
          Visualiza puntos de venta, rutas logísticas y zonas de calor para optimizar tu distribución.
        </p>
      </div>
      <div ref={mapContainerRef} className="w-full h-full rounded-xl z-0" />
    </div>
  );
};

export default MapDemo;