import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface TProps {
  label: ReactNode;
  href: string;
}

const NavItem = ({ label, href }: TProps) => {
  return (
    <li className="w-full">
      <Link
        to={href}
        className="flex items-center rounded py-xs px-lg w-full hover:bg-primary hover:text-white transition ease-in-out duration-150"
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
