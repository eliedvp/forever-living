import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './partials/navbar';
import Footer from './partials/footer';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />  
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
