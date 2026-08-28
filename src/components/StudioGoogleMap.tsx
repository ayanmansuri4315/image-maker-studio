import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  Phone,
  MessageSquareShare,
  ExternalLink,
  Compass,
  Layers,
  Map as MapIcon,
} from 'lucide-react';
import { studioInfo } from '../data/studioData';

interface NearbyLocation {
  name: string;
  category: string;
  query: string;
  description: string;
  lat: number;
  lng: number;
  zoom: number;
}

const NEARBY_LANDMARKS: NearbyLocation[] = [
  {
    name: "IMAGES MAKER STUDIO (Base)",
    category: "Main Studio",
    query: "G-7,+Near+Shifa+Hospital,+Royal+Complex,+Sidhpur,+Gujarat+384151",
    description: "Royal Complex, Near Shifa Hospital, Sidhpur, Gujarat 384151",
    lat: 23.9176,
    lng: 72.3838,
    zoom: 16,
  },
  {
    name: "Bindu Sarovar & Matrugaya",
    category: "Heritage Photography",
    query: "Bindu+Sarovar,+Sidhpur,+Gujarat",
    description: "Famous ancient historic & religious ghats in Sidhpur",
    lat: 23.9125,
    lng: 72.3789,
    zoom: 15,
  },
  {
    name: "Sidhpur Bohra Haveli Architecture",
    category: "Pre-Wedding Landmark",
    query: "Bohra+Vad,+Sidhpur,+Gujarat",
    description: "World-renowned European-influenced wooden havelis & Victorian architecture",
    lat: 23.9210,
    lng: 72.3860,
    zoom: 16,
  },
  {
    name: "Rani Ki Vav (Patan)",
    category: "Destination Wedding Shoot",
    query: "Rani+Ki+Vav,+Patan,+Gujarat",
    description: "UNESCO World Heritage stepwell (30 mins drive from Sidhpur)",
    lat: 23.8589,
    lng: 72.1017,
    zoom: 15,
  },
];

export const StudioGoogleMap: React.FC = () => {
  const [selectedPlace, setSelectedPlace] = useState<NearbyLocation>(NEARBY_LANDMARKS[0]);
  const [mapType, setMapType] = useState<'roadmap' | 'satellite' | 'terrain'>('roadmap');

  const mapTypeParam = mapType === 'satellite' ? 'k' : mapType === 'terrain' ? 'p' : '';
  const currentEmbedUrl = `https://maps.google.com/maps?q=${selectedPlace.query}&t=${mapTypeParam}&z=${selectedPlace.zoom}&ie=UTF8&iwloc=&output=embed`;

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    "G-7, Near Shifa Hospital, Royal Complex, Sidhpur, Gujarat 384151"
  )}`;

  return (
    <div id="google-maps-container" className="w-full bg-white rounded-[1px] border border-[#E2D9CB] shadow-sm overflow-hidden">
      {/* Header Info Bar */}
      <div className="p-6 sm:p-8 border-b border-[#E2D9CB] flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[#FAF7F2]">
        <div>
          <div className="flex items-center space-x-2 text-[#8E7766]">
            <MapPin className="w-4 h-4 text-[#3D2B1F]" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-sans font-medium">
              STUDIO LOCATION &amp; VICINITY
            </span>
          </div>
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#3D2B1F] italic font-light mt-1">
            {studioInfo.brandName}
          </h3>
          <p className="text-xs sm:text-sm text-[#523A2A] font-light mt-0.5 max-w-xl">
            {studioInfo.address}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="gmp-get-directions-btn"
            className="inline-flex items-center space-x-2 px-5 py-3 bg-[#3D2B1F] hover:bg-[#251912] text-[#F2EDE4] text-xs font-sans tracking-[0.2em] uppercase font-medium transition-all shadow-sm"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>GET DIRECTIONS</span>
          </a>

          <a
            href={`https://wa.me/${studioInfo.whatsappNumber}?text=${encodeURIComponent(
              "Hello, I am looking for directions to Images Maker Studio in Sidhpur."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            id="gmp-whatsapp-btn"
            className="inline-flex items-center space-x-2 px-5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-sans tracking-[0.2em] uppercase font-semibold transition-all shadow-sm"
          >
            <MessageSquareShare className="w-3.5 h-3.5" />
            <span>WHATSAPP STUDIO</span>
          </a>
        </div>
      </div>

      {/* Landmarks / Quick Exploration Chips */}
      <div className="px-6 py-3 bg-[#F4EFE6] border-b border-[#E2D9CB] flex items-center overflow-x-auto no-scrollbar gap-2">
        <span className="text-[10px] uppercase font-sans tracking-widest text-[#8E7766] font-semibold shrink-0 mr-1 flex items-center gap-1">
          <Compass className="w-3.5 h-3.5" /> Explore Locations:
        </span>
        {NEARBY_LANDMARKS.map((loc) => {
          const isSelected = selectedPlace.name === loc.name;
          return (
            <button
              key={loc.name}
              type="button"
              onClick={() => setSelectedPlace(loc)}
              className={`px-3 py-1.5 text-xs rounded-full whitespace-nowrap transition-all duration-200 border text-[11px] font-sans cursor-pointer ${
                isSelected
                  ? 'bg-[#3D2B1F] text-[#F2EDE4] border-[#3D2B1F] font-medium shadow-xs'
                  : 'bg-white/80 hover:bg-white text-[#523A2A] border-[#DDD4C7]'
              }`}
            >
              {loc.name}
            </button>
          );
        })}
      </div>

      {/* Main Interactive Map Canvas */}
      <div className="relative w-full h-[450px] sm:h-[500px] md:h-[550px] bg-[#EAE2D5]">
        {/* Responsive Interactive Map Iframe */}
        <iframe
          key={`${selectedPlace.name}-${mapType}`}
          title={`Map of ${selectedPlace.name}`}
          src={currentEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />

        {/* Floating Map Controls & Place Info Card */}
        <div className="absolute top-3 right-3 flex bg-white/95 backdrop-blur-xs p-1 rounded-[1px] shadow-md border border-[#DDD4C7] gap-1 z-10">
          {(['roadmap', 'satellite', 'terrain'] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setMapType(t)}
              className={`px-2.5 py-1 text-[10px] uppercase tracking-wider font-sans rounded-xs transition-colors cursor-pointer ${
                mapType === t
                  ? 'bg-[#3D2B1F] text-[#F2EDE4] font-semibold'
                  : 'text-[#6B5344] hover:bg-[#FAF7F2]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Selected Landmark Detail Card on Map */}
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 max-w-sm bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-[1px] border border-[#DDD4C7] shadow-lg text-left z-10">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="inline-block px-2 py-0.5 bg-[#EAE2D5] text-[#3D2B1F] text-[9px] uppercase font-sans tracking-widest font-semibold rounded-xs">
              {selectedPlace.category}
            </span>
            <span className="text-[10px] font-mono text-[#8E7766]">
              {selectedPlace.lat.toFixed(4)}° N, {selectedPlace.lng.toFixed(4)}° E
            </span>
          </div>

          <h4 className="font-editorial text-base sm:text-lg text-[#3D2B1F] italic font-semibold leading-snug mb-1">
            {selectedPlace.name}
          </h4>

          <p className="text-[11px] text-[#6B5344] leading-relaxed font-light mb-2">
            {selectedPlace.description}
          </p>

          {selectedPlace.category === "Main Studio" && (
            <div className="pt-2 border-t border-[#DDD4C7] space-y-1 text-[11px] mb-2">
              <div className="flex items-center text-[#3D2B1F]">
                <Phone className="w-3 h-3 mr-1.5 text-[#8E7766]" />
                <span>{studioInfo.phone}</span>
              </div>
              <p className="text-[10px] text-[#8E7766]">
                Hours: {studioInfo.businessHours}
              </p>
            </div>
          )}

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${selectedPlace.name} Sidhpur Gujarat`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[10px] font-sans font-semibold tracking-wider text-[#3D2B1F] uppercase hover:underline pt-0.5"
          >
            Open in Google Maps <ExternalLink className="w-2.5 h-2.5 ml-1" />
          </a>
        </div>
      </div>

      {/* Footer Info & Address Details */}
      <div className="p-4 sm:p-6 bg-[#FAF7F2] border-t border-[#E2D9CB] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#523A2A]">
        <div>
          <span className="block text-[10px] tracking-[0.2em] uppercase text-[#8E7766] font-medium font-sans">
            Full Address
          </span>
          <p className="font-light mt-0.5">{studioInfo.address}</p>
        </div>
        <div>
          <span className="block text-[10px] tracking-[0.2em] uppercase text-[#8E7766] font-medium font-sans">
            Coverage Area
          </span>
          <p className="font-light mt-0.5">Sidhpur, Patan, Mehsana, Palanpur, Ahmedabad &amp; Across Gujarat</p>
        </div>
        <div>
          <span className="block text-[10px] tracking-[0.2em] uppercase text-[#8E7766] font-medium font-sans">
            Coordinates &amp; Landmarks
          </span>
          <p className="font-mono text-[11px] mt-0.5 text-[#6B5344]">
            Lat: 23.9176&deg; N, Lng: 72.3838&deg; E
          </p>
        </div>
      </div>
    </div>
  );
};
