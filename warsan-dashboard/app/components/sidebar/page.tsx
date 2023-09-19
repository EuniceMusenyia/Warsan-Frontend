'use client';

import React from 'react';
import Link from 'next/link';
import { RxPerson } from 'react-icons/rx';
import { FiAlertCircle, FiAlertTriangle, FiHome } from 'react-icons/fi';


export const Sidebar = ({ children }) => {
    return (
      <div className='flex h-screen fixed'>
        <div className='flex flex-col w-20 sm:w-40 md:w-60 p-2 sm:p-3 md:p-5 bg-blue-700 border-r-1 md:border-r-0'>
          <div className='flex items-center my-5'>
            <img src={'./logo.png'} alt="arrow" className="md:w-20 md:h-20 w-5 h-5 object-cover -ml-2 mb-4 mt-10" />
            <span className='text-white md:text-4xl sm:text-sm font-bold mb-4 mt-10'>RAJO</span>
          </div>
  
          <div className=''>
            <NavItem icon={<FiHome className="icon md:w-14 md:h-14 w-4 h-4 -ml-2" />} label="Home" />
            <NavItem icon={<FiAlertCircle className="icon md:w-14 md:h-14 w-4 h-4 -ml-2" />} label="Alerts" />
            <NavItem icon={<FiAlertTriangle className="icon md:w-14 md:h-14 w-4 h-4 -ml-2" />} label="Vaccines" />
            <NavItem icon={<RxPerson className="icon md:w-14 md:h-14 w-4 h-4 -ml-2 -ml-2" />} label="CHV" />
            <NavItem icon={<RxPerson className="icon md:w-14 md:h-14 w-4 h-4 -ml-2" />} label="Profile" />
          </div>
        </div>
        <main className='flex-1'>{children}</main>
      </div>
    );
  };
  
  const NavItem = ({ icon, label }) => {
    const handleMouseEnter = (event) => {
      event.currentTarget.style.color = 'pink';
    };
  
    const handleMouseLeave = (event) => {
      event.currentTarget.style.color = 'white';
    };
  
    return (
      <div
        className='flex items-center text-white my-1 p-1 rounded-lg navitems'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center">
          <div className='mb-14 md:mr-1 w:mb-20'>
            {icon}
          </div>
          <div className='mb-14'>
            <span className="md:text-2xl text-sm">{label}</span>
          </div>
        </div>
      </div>
    );
  };
  