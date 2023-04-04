import React from 'react';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div className='container py-[100px] mx-auto'>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
