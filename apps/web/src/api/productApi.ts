import { TProduct } from '@/types/product';

const productApi = {
  /**
   * 제품을 조회하는 API
   * @param params
   */
  getProducts: (params?: { [key: string]: any }) => ({
    url: '/product',
    params,
  }),
  /**
   * 제품의 버전 정보 목록을 조회하는 API
   * @param productId
   */
  getProductVersions: (productId: string) => ({
    url: `/product-version/${productId}`,
  }),
  /**
   * 특정 상품을 조회하는 API
   * @param uuid
   */
  getProductById: (uuid: string) => ({
    url: `/product/${uuid}`,
  }),
  /**
   * 상품을 생성하는 API
   * @param params
   */
  createProduct: (params: { name: string }) => ({
    url: '/product',
    params,
  }),
  /**
   * 상품을 생성하는 API
   * @param productId 제품 id
   * @param params
   */
  createProductVersion: (productId: string, params: { version: string }) => ({
    url: `/product-version/${productId}`,
    params,
  }),
};

export default productApi;
