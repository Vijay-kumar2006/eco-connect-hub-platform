
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const RecyclingMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [78.9629, 20.5937], 
      zoom: 4
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      if (map.current) map.current.remove();
    };
  }, [mapboxToken]);

  return (
    <div className="w-full space-y-4">
      {!mapboxToken && (
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
          <h3 className="font-medium text-yellow-800 flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Map Setup Required
          </h3>
          <p className="text-yellow-700 text-sm mt-2">
            Please enter your Area Zip Code for Searching your nearby recycling center
          </p>
          <div className="mt-3 flex gap-2">
            <input
              type="text"
              placeholder="Enter your Area zip code"
              className="flex-1 px-3 py-2 border rounded-md text-sm"
              onChange={(e) => setMapboxToken(e.target.value)}
            />
            <Button 
              variant="outline"
              className="border-yellow-600 text-yellow-600 hover:bg-yellow-50"
              onClick={() => window.open('https://mapbox.com', '_blank')}
            >
              Get Token
            </Button>
          </div>
        </div>
      )}
      <div ref={mapContainer} className="w-full h-[400px] rounded-lg shadow-lg" />
    </div>
  );
};

export default RecyclingMap;
