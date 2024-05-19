import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Sidebar } from '@/features/layout';

const BaseLayout = () => {
  return (
    <div className="max-w-screen w-screen flex">
      <Sidebar />
      <div className="min-h-screen w-full">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default BaseLayout;
