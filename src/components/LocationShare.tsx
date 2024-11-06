import React from 'react';
import { Navigation, Map } from 'lucide-react';

interface LocationShareProps {
  address: string;
  latitude: number;
  longitude: number;
}

export default function LocationShare({ address, latitude, longitude }: LocationShareProps) {
  const encodedAddress = encodeURIComponent(address);
  
  const navigationLinks = [
    {
      name: 'Google Maps',
      url: `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`,
      icon: <Map className="w-5 h-5" />
    },
    {
      name: 'Waze',
      url: `https://www.waze.com/ul?ll=${latitude},${longitude}&navigate=yes`,
      icon: <Navigation className="w-5 h-5" />
    },
    {
      name: 'Apple Maps',
      url: `http://maps.apple.com/?daddr=${latitude},${longitude}`,
      icon: <Map className="w-5 h-5" />
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      {navigationLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-200 shadow-md"
        >
          {link.icon}
          <span>Open in {link.name}</span>
        </a>
      ))}
    </div>
  );
}