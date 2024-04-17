'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { ROUTE_PATH } from '@/constants';
import { Icons } from '@/components';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

type TNavItem = { label: string; href: string; icon?: ReactNode };

export default function GlobalNavigationBar() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col">
      {[
        { label: 'Main Dashboard', href: ROUTE_PATH.DASHBOARD, icon: <Icons.Home /> },
        {
          label: 'Data Analytics',
          href: ROUTE_PATH.ANALYTICS,
          icon: <Icons.BarChart />,
        },
      ].map((nav: TNavItem) => {
        const isActive = RegExp(`^${pathname}`).test(nav.href);
        return (
          <li className="w-full flex justify-between items-center h-[60px] group" key={nav.label}>
            <Link className="flex gap-md items-center w-full p-md text-gray-400" href={nav.href}>
              {!!nav?.icon && (
                <div
                  className={
                    isActive
                      ? 'text-brand-600'
                      : 'group-hover:text-brand-600 transition ease-in-out duration-200'
                  }
                >
                  {nav.icon}
                </div>
              )}
              <div
                className={classNames(
                  'flex-1 transition ease-in-out duration-200',
                  isActive
                    ? 'text-brand-1000 font-semibold'
                    : 'group-hover:text-brand-1000 font-semibold',
                )}
              >
                {nav.label}
              </div>
            </Link>
            <div
              className={classNames(
                'border-2 rounded-full h-2/3 w-[1px] transition-all ease-in-out duration-200',
                isActive ? 'border-brand-600' : 'border-transparent group-hover:border-brand-600',
              )}
            />
          </li>
        );
      })}
    </ul>
  );
}
