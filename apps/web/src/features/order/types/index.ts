import { TProduct, TProductVersion } from '@/features/product';

export type TOrder = {
  id: number;
  price: number;
  createdAt: string;
  updatedAt: string;
  orderAt: string;
  product: TProduct;
  productVersion: TProductVersion;
};
