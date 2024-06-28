import { ReactNode } from 'react';

export type TPropsWithClassName<T = unknown> = T & { className?: string };

export type TPropsWithChildren<T = unknown> = T & { children?: ReactNode };

export type TPropsWithComponent<T = unknown> = T & TPropsWithClassName & TPropsWithChildren;

export type TPropsWithPaginationQuery<T = unknown> = T & { limit?: number; page?: number };
