import React from 'react';
import Logo from '@/features/layout/Sidebar/Logo';

const Sidebar = () => {
  return (
    <aside className="min-w-sidebar w-sidebar h-screen p-md sticky top-0">
      <Logo />
    </aside>
  );
};

export default Sidebar;
