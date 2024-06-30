import { TOrder } from '@/features/order';

export type TUser = {
  id: number;
  name: string;
  email?: string | null;
  createdAt: string;
  updatedAt: string;
  orders?: TOrder[];
};
