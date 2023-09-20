'use client'
import React, { ReactElement } from 'react';
import { RiAccountCircleLine } from 'react-icons/ri';
import { LuLayoutGrid } from 'react-icons/lu';
import { TbAlertTriangle } from 'react-icons/tb';
import { PiUsersThreeDuotone,PiUsersFour } from 'react-icons/pi';
import { MdLogout } from 'react-icons/md';

interface ChildItem {
  icon: ReactElement;
  label: string;
}

interface NavItemProps {
  item: ChildItem;
}


interface SidebarProps {
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const handleMouseEnter = (event: React.MouseEvent) => {
    (event.currentTarget as any).style.color = 'pink';
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    (event.currentTarget as any).style.color = 'white';
  };

  return (
    <div
      className='flex items-center text-white my-1 p-1 rounded-lg navitems'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='flex items-center justify-center w-10 h-10 mr-2'>{item.icon}</div>
      <span className='md:text-base text-sm'>{item.label}</span>
    </div>
  );
};


export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div className='flex h-screen fixed'>
      <div className='flex flex-col w-30 md:w-60 p-2 sm:p-3 md:p-5 bg-customBlue items-center justify-center'>
        <div className='flex items-center mb-10'>
          <img src={'./logo.png'} alt="arrow" className="md:w-12 md:h-12 w-6 h-6 object-cover -ml-1 mb-2 mt-2" />
          <span className='text-white md:text-2xl sm:text-sm font-bold mb-2 ml-2 mt-2'>RAJO</span>
        </div>
        <hr className='mb-5 w-60 mb-10' style={{ borderColor: 'white' }} />
        <div className='flex flex-col items-start justify-start'>
          <NavItem item={{ icon: <LuLayoutGrid className="icon md:w-8 md:h-8 w-4 h-4 -ml-2" />, label: 'Dashboard' }} />
          <NavItem item={{ icon: <TbAlertTriangle className="icon md:w-8 md:h-8 w-4 h-4 -ml-2" />, label: 'Alerts' }} />
          <NavItem item={{ icon: <PiUsersThreeDuotone className="icon md:w-8 md:h-8 w-4 h-4 -ml-2" />, label: 'CHV' }} />
          <NavItem item={{ icon: <PiUsersFour className="icon md:w-8 md:h-8 w-4 h-4 -ml-2" />, label: 'Children' }} />
        </div>

        <div className='mt-auto flex flex-col items-start justify-start'>
          <NavItem item={{ icon: <RiAccountCircleLine className="icon md:w-8 md:h-8 w-4 h-4 -ml-2" />, label: 'Profile' }} />
          <NavItem item={{ icon: <MdLogout className="icon md:w-8 md:h-8 w-4 h-4 -ml-2" />, label: 'Logout' }} />
        </div>
      </div>
      <main className='flex-1'>{children}</main>
    </div>
  );
};
