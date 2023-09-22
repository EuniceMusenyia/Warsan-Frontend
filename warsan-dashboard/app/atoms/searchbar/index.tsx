


import React, { ChangeEvent } from 'react';
interface SearchBarProps {
  searchQuery: string;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchBar = ({ searchQuery, handleSearchChange, placeholder }: SearchBarProps) => {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-48 mb-4 px-10 py-2 border border-customBlue rounded-lg text-sm placeholder-customBlue focus:outline-none focus:ring-2 focus:ring-customBlue"
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className="absolute left-4 top-2 pointer-events-none">

      </div>
    </div>
  );
};
export default SearchBar;