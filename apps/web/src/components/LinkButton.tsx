import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { TPropsWithComponent } from '@/types';

interface TProps {
  to?: string;
}

const LinkButton = ({ to, children, className }: TPropsWithComponent<TProps>) => {
  if (!!to) {
    return (
      <Link
        to={to}
        className={classNames(
          className,
          'hover:text-primary active:text-primary-600',
          'dark:hover:text-primary-dark dark:active:text-primary-dark-600',
        )}
      >
        {children}
      </Link>
    );
  }
  return <button className={classNames(className)}>{children}</button>;
};

export default LinkButton;
