import React from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTE_PATH } from '@/routes';
import NavItem from './NavItem';

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="w-full">
      <ul className="flex flex-col gap-md w-full">
        {[
          { label: 'Dashboard', href: ROUTE_PATH.DASHBOARD },
          { label: 'User', href: ROUTE_PATH.USER },
          { label: 'Product', href: ROUTE_PATH.PRODUCT },
        ].map(({ label, href }) => {
          const isActive = new RegExp(location.pathname).test(href);
          return <NavItem key={href} label={label} href={href} isActive={isActive} />;
        })}
      </ul>
    </nav>
  );
};

export default Nav;
