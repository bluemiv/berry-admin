import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '@/routes';

const Nav = () => {
  return (
    <nav className="w-full">
      <ul className="flex flex-col gap-md w-full">
        {[
          { label: 'Dashboard', href: ROUTE_PATH.DASHBOARD },
          { label: 'Product', href: ROUTE_PATH.PRODUCT },
        ].map(({ label, href }) => (
          <li key={href} className="w-full">
            <Link
              to={href}
              className="flex items-center rounded py-xs px-lg w-full hover:bg-primary hover:text-white transition ease-in-out duration-150"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
