export type TPropsWithClassname<T = unknown> = T & { className?: string };
export type TPropsWithChildren<T = unknown> = T & { children?: string };
export type TPropsWithBaseComponent<T = unknown> = T & TPropsWithClassname & TPropsWithChildren;
