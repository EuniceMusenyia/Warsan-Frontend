'use client'
import Link from 'next/link';
import React, { useState, ChangeEvent } from 'react';
import DataGrid from '../atoms/DataGrid';
import SearchBar from '../atoms/Searchbar';
import { Sidebar } from '../components/Sidebar';
const PAGE_SIZE = 14;
const CHVData = [
  {
    Full_name: "Aniso Kilas",
    Location: "Xamar",
    Hospital: "Medina",
    phone_number: "+252678123456",
    is_active: true
  },
  {
    Full_name: "Mohamed Ali",
    Location: "Hargeisa",
    Hospital: "Main Hospital",
    phone_number: "+252678987654",
    is_active: false
  },
  {
    Full_name: "Aniso Kilas",
    Location: "Xamar",
    Hospital: "Medina",
    phone_number: "+252678123456",
    is_active: true
  },
  {
    Full_name: "Mohamed Ali",
    Location: "Hargeisa",
    Hospital: "Main Hospital",
    phone_number: "+252678987654",
    is_active: false
  },
  {
    Full_name: "Aniso Kilas",
    Location: "Xamar",
    Hospital: "Medina",
    phone_number: "+252678123456",
    is_active: true
  },
  {
    Full_name: "Mohamed Ali",
    Location: "Hargeisa",
    Hospital: "Main Hospital",
    phone_number: "+252678987654",
    is_active: false
  },
  {
    Full_name: "Aniso Kilas",
    Location: "Xamar",
    Hospital: "Medina",
    phone_number: "+252678123456",
    is_active: true
  },
  {
    Full_name: "Mohamed Ali",
    Location: "Hargeisa",
    Hospital: "Main Hospital",
    phone_number: "+252678987654",
    is_active: false
  },
  {
    Full_name: "Aniso Kilas",
    Location: "Xamar",
    Hospital: "Medina",
    phone_number: "+252678123456",
    is_active: true
  },
  {
    Full_name: "Mohamed Ali",
    Location: "Hargeisa",
    Hospital: "Main Hospital",
    phone_number: "+252678987654",
    is_active: false
  },
  {
    Full_name: "Aniso Kilas",
    Location: "Xamar",
    Hospital: "Medina",
    phone_number: "+252678123456",
    is_active: true
  },
];
const CHVPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };
  const numColumns = 4;
  const columns = ['Full_name', 'Location', 'Hospital', 'phone_number'];
  const columnDisplayNames: string[] = ['Full Name', 'Location', 'Hospital', 'Phone Number'];
  const filteredCHV = CHVData.filter((item) => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      item.Full_name.toLowerCase().includes(searchTerm) ||
      item.Location.toLowerCase().includes(searchTerm) ||
      item.Hospital.toLowerCase().includes(searchTerm)
    );
  });
  const totalItems = filteredCHV.length;
  const totalPages = Math.ceil(totalItems / PAGE_SIZE);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <Sidebar/>
    <div className={`CHV bg-white ml-96 font-kumbh-sans`}>
      <h1 className='md:text-30 text-base -ml-96 text-center font-inria-sans text-customBlue py-8 mb- font-bold'>
        Community Health Volunteers
      </h1>
      <SearchBar
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        placeholder="Search by name, location, or hospital"
      />
      <table className='w-4/5 border-collapse text-18'>
        <tbody>
          {/* Update DataGrid component usage */}
          <DataGrid
            data={filteredCHV}
            columns={columns}
            columnDisplayNames={columnDisplayNames}
            currentPage={currentPage}
            pageSize={PAGE_SIZE}
            isCheckBox={true}
            itemColumnKey="Full_name"
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
      <div className='fixed bottom-20 right-20'>
        <Link href='/CHVRegistration'>
          <button className='bg-customBlue text-white px-4 py-3 rounded-full place-self-center'>
            <span className='text-3xl' style={{ lineHeight: '0.7' }}>
              +
            </span>
          </button>
        </Link>
      </div>
    </div>
  </div>
  );
};
export default CHVPage;