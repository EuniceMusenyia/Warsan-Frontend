// Import statements
'use client';

import React from 'react';
import Link from 'next/link';
import { RxPerson } from 'react-icons/rx';
import { FiAlertCircle, FiHome, FiPauseCircle, FiUser, FiUserPlus, FiUsers  } from 'react-icons/fi';

// Sidebar component
export const Sidebar = ({ children }) => {
  return (
    <div className='flex h-screen fixed'>
      <div className='flex flex-col w-30 md:w-30 p-2 sm:p-3 md:p-5 bg-blue-600 border-r-1 md:border-r-0'>
        <div className='flex items-center mb-10'>
          <img src={'./logo.png'} alt="arrow" className="md:w-14 md:h-14 w-5 h-5 object-cover -ml-2 mb-4 mt-2 " />
          <span className='text-white md:text-2xl sm:text-sm font-bold mb-4 mt-2'>RAJO</span>
        </div>
        <hr className='mb-5' />
          
        <div className=''>
          <NavItem icon={<FiHome className="icon md:w-8 md:h-8 w-4 h-4 -ml-2" />} label="Home" />
          <NavItem icon={<FiAlertCircle className="icon md:w-8 md:h-8 w-4 h-4 -ml-2" />} label="Alerts" />
          <NavItem icon={<FiUsers className="icon md:w-8 md:h-8 w-4 h-4 -ml-2" />} label="CHV" />
          <NavItem icon={<FiUserPlus className="icon md:w-8 md:h-8 w-4 h-4 -ml-2" />} label="Children" />
        </div>

        <div className='mt-auto'>
          <hr className='mb-5' />
          <NavItem icon={<FiUser className="icon md:w-8 md:h-8 w-4 h-4 -ml-2" />} label="Profile" />
        </div>
      </div>
      <main className='flex-1'>{children}</main>
    </div>
  );
};

// NavItem component
const NavItem = ({ icon, label }) => {
  const handleMouseEnter = (event) => {
    event.currentTarget.style.color = 'pink';
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.style.color = 'white';
  };

  return (
    <div
      className='flex flex-col items-center text-white my-1 p-1 rounded-lg navitems'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='flex items-center'>
        {icon}
      </div>
      <div className='mt-1 mb-10'>
        <span className='md:text-xl text-sm'>{label}</span>
      </div>
    </div>
  );
};
