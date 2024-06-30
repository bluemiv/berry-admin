import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface TProps {
  label: ReactNode;
  href: string;
  isActive: boolean;
}

const NavItem = ({ label, href, isActive }: TProps) => {
  return (
    <li className="w-full">
      <Link
        to={href}
        className={classNames(
          'flex items-center rounded py-xs px-lg w-full transition ease-in-out duration-150',
          isActive ? 'bg-primary text-white ' : 'hover:bg-primary hover:text-white',
        )}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
