import { TPropsWithPaginationQuery } from '@/types';

const productApi = {
  /**
   * Skin Product를 조회하는 API
   * @param params
   */
  getProducts: (params?: TPropsWithPaginationQuery) => ({
    url: '/product',
    params,
  }),
};

export default productApi;
