'use client'
import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L, { Icon } from 'leaflet';
import DataGrid from '../atoms/DataGrid';
import SearchBar from '../atoms/Searchbar';
import useGetLocations from '../hooks/useGetLocations';
import useGetRegionRates from '../hooks/useGetRegionRates';
import { Sidebar } from '../components/Sidebar';
interface LocationData {
  location: string;
  longitude: number;
  latitude: number;
  immunization_rate: number;
}
interface RegionData {
  region_name: string;
  total_children: number;
  immunized_children: number;
  immunization_rate: number;
  longitude: number;
  latitude: number;
}
const Map: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;
  const { locations } = useGetLocations();
  const { regionRates } = useGetRegionRates();
  useEffect(() => {
    if (locations.length === 0) {
      return;
    }
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
    locations.forEach((location: LocationData) => {
      const locationIcon = new Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });
      const marker = L.marker([location.latitude, location.longitude], { icon: locationIcon }).addTo(map);
      marker.bindPopup(`<b>${location.location}</b><br>Immunization Rate: ${location.immunization_rate}%`);
    });
  }, [locations]);
  const data = regionRates.map((rate: RegionData) => ({
    region: rate.region_name,
    Rate: rate.immunization_rate,
    childPopulation: rate.total_children,
  }));
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };
  // Update the columns to match the keys in the data array
  const columns: (keyof typeof data[0])[] = ['region', 'Rate', 'childPopulation'];
  const columnDisplayNames = ['Region', 'Rate', 'Child Population'];
  const filteredData = data.filter((item) =>
    item.region.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <Sidebar/>
    <div className="bg-white h-screen mr-0 font-kumbh-sans">
      <div className="ml-96 mb-20">
        <h2 className="md:text-4xl text-base -ml-96 text-center font-inria-sans text-customBlue py-8 font-bold">
          Critically Low-Rate Immunization Areas
        </h2>
        <SearchBar searchQuery={searchQuery} handleSearchChange={handleSearchChange} placeholder="Search Child" />
      </div>
      <div className="flex md:flex-row space-x-6 md:space-x-6 ml-80 mr-80">
        <div id="map" className="bg-white w-[850px] md:w-full py-10 h-[650px] mb-6 md:mb-0" />
        <div className="flex-1 bg-white p-4">
          <table className="ml-20 w-full text-18">
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
    </div>

  );
  
};
export default Map;