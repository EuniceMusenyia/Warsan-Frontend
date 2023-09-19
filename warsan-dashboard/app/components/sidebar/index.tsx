// Import statements
'use client';

import React from 'react';
import Link from 'next/link';
import {BiSolidUserCircle} from 'react-icons/bi';
import { PiUsersFourFill } from 'react-icons/pi';
import { HiHome } from 'react-icons/hi';
import { RiAlertFill } from 'react-icons/ri';
import { FaUsers } from 'react-icons/fa';
import { IoLogOutSharp } from 'react-icons/io5';

// Sidebar component
export const Sidebar = ({ children }) => {
  return (
    <div className='flex h-screen fixed'>
      <div className='flex flex-col w-30 md:w-30 p-2 sm:p-3 md:p-5 bg-gray-100 border-r-2 md:border-r-1 border-blue-600 shadow-lg'>
        <div className='flex items-center mb-10'>
          <img src={'./logo.png'} alt="arrow" className="md:w-14 md:h-14 w-5 h-5 object-cover -ml-2 mb-4 mt-2  " />
          <span className='text-blue-600 md:text-2xl sm:text-sm font-bold mb-4 mt-2'>RAJO</span>
        </div>
        <hr className='mb-5' style={{ borderColor: 'blue' }} />
        <div className=''>
          <NavItem icon={<HiHome className="icon md:w-8 md:h-8 w-4 h-4 -ml-2" />} label="Home" />
          <NavItem icon={<RiAlertFill className="icon md:w-8 md:h-8 w-4 h-4 -ml-2" />} label="Alerts" />
          <NavItem icon={<FaUsers className="icon md:w-8 md:h-8 w-4 h-4 -ml-2" />} label="CHV" />
          <NavItem icon={<PiUsersFourFill className="icon md:w-8 md:h-8 w-4 h-4 -ml-2" />} label="Children" />
        </div>

        <div className='mt-auto'>
        <hr className='mb-5' style={{ borderColor: 'blue' }} />
          <NavItem icon={<BiSolidUserCircle className="icon md:w-8 md:h-8 w-4 h-4 -ml-2" />} label="Profile" />
          <NavItem icon={<IoLogOutSharp className="icon md:w-8 md:h-8 w-4 h-4 -ml-2" />} label="Logout" />
        </div>
      </div>
      <main className='flex-1'>{children}</main>
    </div>
  );
};

// NavItem component
const NavItem = ({ icon, label }) => {
  const handleMouseEnter = (event) => {
    event.currentTarget.style.color = 'purple';
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.style.color = 'blue';
  };

  return (
    <div
      className='flex items-center text-blue-600 my-1 p-1 rounded-lg navitems'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='flex items-end'>
        <div className='mr-2 mb-10'>{icon}</div>
        <span className='md:text-xl text-sm mb-10'>{label}</span>
      </div>
    </div>
  );
};
