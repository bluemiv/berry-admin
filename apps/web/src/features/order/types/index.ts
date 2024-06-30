import { TProduct, TProductVersion } from '@/features/product';

export type TOrder = {
  id: number;
  price: number;
  createdAt: string;
  updatedAt: string;
  product: TProduct;
  productVersion: TProductVersion;
};
