'use client'

import React, { useState } from 'react';
import DataGrid from '../atoms/DataGrid'; // Import the DataGrid component
import SearchBar from '../atoms/Searchbar';

const PAGE_SIZE = window.innerWidth < 768 ? 15 : 15;

const ChildRecordData = [
  {
    Full_name: "Abdi Mohamed",
    Number_of_vaccines: 6,
    Location: "Mogadishu",
    Guardian: "Amina Ahmed",
    Phone_number: "+252123456789"
  },
  {
    Full_name: "Abdi Mohamed",
    Number_of_vaccines: 6,
    Location: "Mogadishu",
    Guardian: "Amina Ahmed",
    Phone_number: "+252123456789"
  },
  {
    Full_name: "Abdi Mohamed",
    Number_of_vaccines: 6,
    Location: "Mogadishu",
    Guardian: "Amina Ahmed",
    Phone_number: "+252123456789"
  },
  {
    Full_name: "Abdi Mohamed",
    Number_of_vaccines: 6,
    Location: "Mogadishu",
    Guardian: "Amina Ahmed",
    Phone_number: "+252123456789"
  },
  {
    Full_name: "Abdi Mohamed",
    Number_of_vaccines: 6,
    Location: "Mogadishu",
    Guardian: "Amina Ahmed",
    Phone_number: "+252123456789"
  },
  {
    Full_name: "Abdi Mohamed",
    Number_of_vaccines: 6,
    Location: "Mogadishu",
    Guardian: "Amina Ahmed",
    Phone_number: "+252123456789"
  },
  {
    Full_name: "Abdi Mohamed",
    Number_of_vaccines: 6,
    Location: "Mogadishu",
    Guardian: "Amina Ahmed",
    Phone_number: "+252123456789"
  },
  {
    Full_name: "Abdi Mohamed",
    Number_of_vaccines: 6,
    Location: "Mogadishu",
    Guardian: "Amina Ahmed",
    Phone_number: "+252123456789"
  },
  {
    Full_name: "Abdi Mohamed",
    Number_of_vaccines: 6,
    Location: "Mogadishu",
    Guardian: "Amina Ahmed",
    Phone_number: "+252123456789"
  },
  {
    Full_name: "Abdi Mohamed",
    Number_of_vaccines: 6,
    Location: "Mogadishu",
    Guardian: "Amina Ahmed",
    Phone_number: "+252123456789"
  },
  {
    Full_name: "Abdi Mohamed",
    Number_of_vaccines: 6,
    Location: "Mogadishu",
    Guardian: "Amina Ahmed",
    Phone_number: "+252123456789"
  },
  {
    Full_name: "Abdi Mohamed",
    Number_of_vaccines: 6,
    Location: "Mogadishu",
    Guardian: "Amina Ahmed",
    Phone_number: "+252123456789"
  },

];

const ChildRecordsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const numColumns = 5;
  const columns = ['Full_name','Number_of_vaccines', 'Location', 'Guardian', 'Phone_number'];
  const columnDisplayNames: string[] = ['Full Name','Number of Vaccines', 'Location', 'Guardian', 'Phone Number'];

  const filteredChildRecords = ChildRecordData.filter((item) => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      item.Full_name.toLowerCase().includes(searchTerm) ||
      item.Location.toLowerCase().includes(searchTerm) ||
      item.Guardian.toLowerCase().includes(searchTerm)
    );
  });

  const totalItems = filteredChildRecords.length;
  const totalPages = Math.ceil(totalItems / PAGE_SIZE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={`ChildRecords bg-white ml-72 mr-40 font-kumbh-sans`}>
      <h1 className='md:text-4xl text-base -ml-96 text-center font-inria-sans text-customBlue py-8 mb- font-bold'>
        Child Records
      </h1>
      <SearchBar
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        placeholder="Search Child"
      />
      <table className='w-full border-collapse'>
        <tbody>
          {/* Update DataGrid component usage */}
          <DataGrid
            data={filteredChildRecords}
            columns={columns}
            columnDisplayNames={columnDisplayNames}
            currentPage={currentPage}
            pageSize={PAGE_SIZE}
            isCheckBox={true} // Add this prop to enable checkboxes
            itemColumnKey="Full_name" // Add this prop to specify the item column key
          />
        </tbody>
      </table>
      <div className='flex justify-center mt-4 -ml-60'>
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page + 1}
            className={`px-3 py-1 mx-1 rounded-full ${
              currentPage === page + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
            }`}
            onClick={() => handlePageChange(page + 1)}
          >
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChildRecordsPage;
