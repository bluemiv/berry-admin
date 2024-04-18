import classNames from 'classnames';
import { TPropsWithBaseComponent } from '@/types';

interface TProps {
  type?: 'default' | 'link';
  onClick?: () => void;
}

export default function Button({
  type = 'default',
  children,
  className,
  onClick,
}: TPropsWithBaseComponent<TProps>) {
  return (
    <button
      className={classNames(
        {
          default: 'border px-md py-sm rounded-lg shadow-sm hover:bg-slate-50 active:shadow-none',
          link: 'text-brand-600 hover:text-brand-500 active:text-brand-700',
        }[type || 'default'],
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
