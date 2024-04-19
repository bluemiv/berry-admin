'use client';

import { ReactNode } from 'react';
import { TPropsWithBaseComponent } from '@/types';
import { Button } from '@/components';

interface TProps {
  visible: boolean;
  title?: ReactNode;
  footer?: ReactNode;
  onClose?: () => void;
  onOk?: () => void;
}

export default function Modal({
  title,
  footer,
  children,
  className,
  onClose,
  onOk,
  visible,
}: TPropsWithBaseComponent<TProps>) {
  if (!visible) return;
  return (
    <div
      className="z-50 bg-slate-800/30 flex items-center justify-center fixed top-0 left-0 w-screen h-screen"
      onClick={onClose}
    >
      <div
        className="min-w-[300px] md:min-w-[550px] max-w-[80%] min-h-[250px] bg-white rounded-2xl py-md shadow-lg flex flex-col"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="px-lg flex justify-between">
          <div className="font-semibold">{title}</div>
          <button className="hover:text-gray-400" onClick={onClose}>
            X
          </button>
        </div>
        <div className="p-lg flex-1">{children}</div>
        {!!footer ? (
          footer
        ) : (
          <div className="px-lg flex gap-sm justify-end">
            <Button onClick={onClose}>Close</Button>
            <Button type="primary" onClick={onOk}>
              Submit
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
