import { ReactNode } from 'react';

export * from './product';

export type TPropsWithClassname<T = unknown> = T & { className?: string };
export type TPropsWithChildren<T = unknown> = T & { children?: ReactNode };
export type TPropsWithBaseComponent<T = unknown> = T & TPropsWithClassname & TPropsWithChildren;
