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
  /**
   * product의 버전을 생성하는 API
   * @param productId product id
   * @param params
   *   version product version 값
   */
  createVersion: (productId: number, params: { version: string }) => ({
    url: `/product/${productId}/version`,
    params,
  }),
  /**
   * product의 버전을 배포하는 API
   * @param versionId product version id
   * @param params
   *   releaseAt 배포 날짜
   */
  releaseVersion: (versionId: number, params?: { releaseAt?: string }) => ({
    url: `/product/version/${versionId}/release`,
    params,
  }),
};

export default productApi;
