import React from 'react';
import Logo from './Logo';
import Nav from './Nav';

const Sidebar = () => {
  return (
    <aside className="min-w-sidebar w-sidebar h-screen p-md sticky top-0">
      <Logo />
      <Nav />
    </aside>
  );
};

export default Sidebar;
