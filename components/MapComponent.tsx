import React, { useEffect, useRef } from 'react';

const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('leaflet').then(L => {
        if (!mapInstance.current && mapRef.current) {
          mapInstance.current = L.map(mapRef.current).setView([51.505, -0.09], 13);

          const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'OpenStreetMap'
          });

          const googleMapsLayer = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            attribution: 'Google'
          });

          const googleSatelliteLayer = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            attribution: 'Google Satellite'
          });

          // Define base layers
          const baseLayers = {
            'OpenStreetMap': osmLayer,
            'Google Maps': googleMapsLayer,
            'Google Satellite': googleSatelliteLayer
          };

          // Add default layer
          osmLayer.addTo(mapInstance.current);

          // Add layer control
          L.control.layers(baseLayers).addTo(mapInstance.current);
        }
      });
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return <div className="rounded-md z-10" ref={mapRef} style={{ height: '400px' }}></div>
};

export default MapComponent;
