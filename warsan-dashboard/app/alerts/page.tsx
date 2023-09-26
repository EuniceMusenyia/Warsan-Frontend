'use client'

import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L, { Icon } from 'leaflet';
import { renderToString } from 'react-dom/server';
import DataGrid from '../atoms/DataGrid';
import SearchBar from '../atoms/Searchbar';
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
  ];
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };
  const columns: (keyof Location)[] = ['region', 'Rate', 'childPopulation'];
  const columnDisplayNames = ['Region', ' Rate', 'Child Population'];
  const filteredData = data.filter((item) =>
    item.region.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className=" bg-white h-screen mr-0 font-kumbh-sans">
      <div className='ml-96 mb-20'>
        <h2 className="md:text-4xl text-base -ml-96 text-center font-inria-sans text-customBlue py-8 font-bold">
          Critically Low-Rate Immunization Areas
        </h2>
        <SearchBar
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        placeholder="Search Child"
      />
      </div>
      <div className="flex md:flex-row space-x-6 md:space-x-6 ml-80 mr-80">
        <div id="map" className="bg-white w-[850px] md:w-full py-10 h-[650px] mb-6 md:mb-0" />
        <div className="flex-1 bg-white p-4">
          <table className='ml-20 w-full text-18'>
            <tbody>
              <DataGrid
                data={filteredData}
                columns={columns}
                columnDisplayNames={columnDisplayNames}
                currentPage={currentPage}
                pageSize={pageSize}
                itemColumnKey="region"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Map;