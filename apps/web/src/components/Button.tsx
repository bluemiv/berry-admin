import classNames from 'classnames';
import { TPropsWithBaseComponent } from '@/types';

interface TProps {
  onClick?: () => void;
}

export default function Button({ children, className, onClick }: TPropsWithBaseComponent<TProps>) {
  return (
    <button
      className={classNames('text-brand-600 hover:text-brand-500 active:text-brand-700', className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
