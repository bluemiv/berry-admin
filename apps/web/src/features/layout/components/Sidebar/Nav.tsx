import React from 'react';
import { useLocation, useMatches } from 'react-router-dom';
import { ROUTE_PATH } from '@/routes';
import NavItem from './NavItem';
import { replaceRoutePath } from '@/utils';

const Nav = () => {
  const location = useLocation();
  const matches = useMatches();
  const match = matches[matches.length - 1];
  const replaceRouterPathParams = Object.entries(match.params).reduce((acc, entry) => {
    return { ...acc, [`:${entry[0]}`]: entry[1] };
  }, {});

  return (
    <nav className="w-full">
      <ul className="flex flex-col gap-md w-full">
        {[
          { label: 'Dashboard', href: ROUTE_PATH.DASHBOARD },
          { label: 'User', href: ROUTE_PATH.USER },
          { label: 'Product', href: ROUTE_PATH.PRODUCT },
        ].map(({ label, href }) => {
          const isActive = new RegExp(replaceRoutePath(href, replaceRouterPathParams)).test(
            location.pathname,
          );
          return <NavItem key={href} label={label} href={href} isActive={isActive} />;
        })}
      </ul>
    </nav>
  );
};

export default Nav;
