import { TOrder } from '@/features/order';

export type TProduct = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  versions?: TProductVersion[];
  orders?: TOrder[];
};

export type TProductVersion = {
  id: number;
  version: string;
  createdAt: string;
  releaseAt?: string | null;
  updatedAt: string;
  orders?: TOrder[];
};
