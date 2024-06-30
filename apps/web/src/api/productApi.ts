import { TPropsWithPaginationQuery } from '@/types';

const productApi = {
  /**
   * Skin Product를 조회하는 API
   * @param productId product id
   */
  getProduct: (productId: number) => ({
    url: `/product/${productId}`,
  }),
  /**
   * Skin Product를 조회하는 API
   * @param params
   */
  getProducts: (params?: TPropsWithPaginationQuery) => ({
    url: '/product',
    params,
  }),
  /**
   * Skin product를 등록하는 API
   * @param params
   */
  createProduct: (params: { name: string; description: string }) => ({
    url: '/product',
    params,
  }),
};

export default productApi;
