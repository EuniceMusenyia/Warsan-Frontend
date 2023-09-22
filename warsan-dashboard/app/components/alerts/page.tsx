import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L, { Icon } from 'leaflet';
import { IoLocationSharp } from 'react-icons/io5';
import { renderToString } from 'react-dom/server';
import DataGrid from '../../atoms/DataGrid';

interface Location {
  region: string;
  latitude: number;
  longitude: number;
  Rate: number;
  childPopulation: number;
}

const Map: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;

  useEffect(() => {
    const locations: Location[] = [
      {
        region: 'Jubaland',
        latitude: 9.85,
        longitude: 48.99,
        Rate: 5,
        childPopulation: 1000,
      },
      {
        region: 'Somaliland',
        latitude: 4.27,
        longitude: 46.10,
        Rate: 20,
        childPopulation: 2000,
      },
    
    ];

    const bounds = L.latLngBounds(L.latLng(0, 40), L.latLng(12, 52));

    const map = L.map('map', {
      maxBounds: bounds,
      minZoom: 6,
    }).fitBounds(bounds);

    const somaliaTileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      subdomains: ['a', 'b', 'c'],
      bounds: bounds,
      maxZoom: 6,
      minZoom: 0,
    }).addTo(map);

    locations.forEach((location) => {
      const locationIcon = new Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      const marker = L.marker([location.latitude, location.longitude], { icon: locationIcon }).addTo(map);

      marker.bindPopup(`<b>${location.region}</b><br>Immunization Rate: ${location.Rate}%`);
    });
  }, []);

  const data: Location[] = [
    {
      region: 'Jubaland',
      latitude: 9.85,
      longitude: 48.99,
      Rate: 5,
      childPopulation: 1000,
    },
    {
      region: 'Jubaland',
      latitude: 4.27,
      longitude: 46.10,
      Rate: 20,
      childPopulation: 2000,
    },
    {
      region: 'Jubaland',
      latitude: 4.27,
      longitude: 46.10,
      Rate: 20,
      childPopulation: 2000,
    },
    {
      region: 'Jubaland',
      latitude: 4.27,
      longitude: 46.10,
      Rate: 20,
      childPopulation: 2000,
    },
    {
      region: 'Jubaland',
      latitude: 4.27,
      longitude: 46.10,
      Rate: 20,
      childPopulation: 2000,
    },
    {
      region: 'Jubaland',
      latitude: 4.27,
      longitude: 46.10,
      Rate: 20,
      childPopulation: 2000,
    },
    {
      region: 'Jubaland',
      latitude: 4.27,
      longitude: 46.10,
      Rate: 20,
      childPopulation: 2000,
    },
    {
      region: 'Jubaland',
      latitude: 4.27,
      longitude: 46.10,
      Rate: 20,
      childPopulation: 2000,
    },
    {
      region: 'Jubaland',
      latitude: 4.27,
      longitude: 46.10,
      Rate: 20,
      childPopulation: 2000,
    },
    {
      region: 'Jubaland',
      latitude: 4.27,
      longitude: 46.10,
      Rate: 20,
      childPopulation: 2000,
    },
    {
      region: 'Jubaland',
      latitude: 4.27,
      longitude: 46.10,
      Rate: 20,
      childPopulation: 2000,
    },
    {
      region: 'Jubaland',
      latitude: 4.27,
      longitude: 46.10,
      Rate: 20,
      childPopulation: 2000,
    },
    {
      region: 'Jubaland',
      latitude: 4.27,
      longitude: 46.10,
      Rate: 30,
      childPopulation: 2000,
    },
 
  ];

  const columns: (keyof Location)[] = ['region', 'Rate', 'childPopulation'];
  const columnDisplayNames = ['Region', ' Rate', 'Child Population'];

  const filteredData = data.filter((item) =>
    item.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className='ml-[20px] mr-0'>
    <div className="flex flex-col items-center justify-center bg-white h-screen mr-0 font-kumbh-sans">
      <h2 className="text-30 font-bold text-customBlue mb-4 mt-20 font-inria-sans mb-16">
        Critically Low-Rate Immunization Areas
      </h2>

      <div className="mb-4">
        <input
          type="text"
          className="flex-1 w-[800px] mb-4 px-10 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customBlue"
          placeholder="Search for a region..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex flex-1 h-[1000px] mt-20">
        <div id="map" className="bg-white w-1/3 ml-96 py-10 h-[850px] mb-40" />

        <div className="flex-1 bg-white p-4 w-[1700px] mt-0 mb-10 ml-40">
          <table className='ml-20 w-[500px] h-[850px] text-18 '>
            <tbody>
            <DataGrid
              data={filteredData}
              columns={columns}
              columnDisplayNames={columnDisplayNames}
              currentPage={currentPage}
              pageSize={pageSize}             
            />
            </tbody>
       
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Map;