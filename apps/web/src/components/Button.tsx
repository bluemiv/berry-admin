import classNames from 'classnames';
import { TPropsWithBaseComponent } from '@/types';

interface TProps {
  type?: 'default' | 'link' | 'primary';
  size?: 'sm' | 'md';
  onClick?: () => void;
}

export default function Button({
  type = 'default',
  size = 'md',
  children,
  className,
  onClick,
}: TPropsWithBaseComponent<TProps>) {
  return (
    <button
      className={classNames(
        {
          default: 'border rounded-lg shadow-sm hover:bg-slate-50 active:shadow-none',
          link: 'text-brand-600 hover:text-brand-500 active:text-brand-700',
          primary:
            'bg-brand-600 text-white rounded-lg shadow-md hover:bg-brand-500 active:shadow-none active:bg-brand-700',
        }[type],
        {
          sm: 'px-sm py-xs text-sm',
          md: 'px-md py-xs',
        }[size],
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
