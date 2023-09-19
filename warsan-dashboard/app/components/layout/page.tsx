
import React from 'react';
import { Sidebar } from '../sidebar/page';

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar>
        {children}
      </Sidebar>
    </div>
  );
};

export default Layout;
