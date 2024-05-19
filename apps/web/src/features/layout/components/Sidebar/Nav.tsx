import React from 'react';
import { ROUTE_PATH } from '@/routes';
import NavItem from './NavItem';

const Nav = () => {
  return (
    <nav className="w-full">
      <ul className="flex flex-col gap-md w-full">
        {[
          { label: 'Dashboard', href: ROUTE_PATH.DASHBOARD },
          { label: 'User', href: ROUTE_PATH.USER },
          { label: 'Product', href: ROUTE_PATH.PRODUCT },
        ].map(({ label, href }) => (
          <NavItem key={href} label={label} href={href} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
