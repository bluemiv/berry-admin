import classNames from 'classnames';
import { TPropsWithBaseComponent } from '@/types';

interface TProps {
  title?: string;
}

export default function Card({ className, children, title }: TPropsWithBaseComponent<TProps>) {
  return (
    <div className={classNames('bg-white p-md rounded-lg', className)}>
      {!!title && (
        <div className="font-semibold pb-md mb-md border-b-2 border-slate-50">{title}</div>
      )}
      {children}
    </div>
  );
}
