import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Sidebar } from '@/features/layout';

const BaseLayout = () => {
  return (
    <div className="max-w-screen w-screen flex">
      <Sidebar />
      <div className="max-h-screen w-full bg-zinc-50">
        <Header />
        <div className="overflow-auto">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BaseLayout;
