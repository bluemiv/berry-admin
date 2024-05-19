import React from 'react';
import { TPropsWithComponent } from '@/types';
import classNames from 'classnames';

interface TProps {
  onClick?: () => void;
}

const SolidButton = ({ children, className, onClick }: TPropsWithComponent<TProps>) => {
  return (
    <button
      className={classNames(
        'rounded-md text-white bg-primary p-xs hover:bg-primary-500 active:bg-primary-600',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SolidButton;
