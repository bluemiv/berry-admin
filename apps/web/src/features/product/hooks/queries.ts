import { useQuery } from '@tanstack/react-query';
import productApi from '@/api/productApi';
import { restApi } from '@/utils';

const QUERY_KEY_PREFIX = 'PRODUCT';

export const PRODUCTS_QUERY_KEY = [QUERY_KEY_PREFIX, 'PRODUCTS'];
/**
 * 제품 목록을 조회하는 쿼리
 */
export const useProductsQuery = () => {
  return useQuery({
    queryKey: PRODUCTS_QUERY_KEY,
    queryFn: async () => {
      const { url, params } = productApi.getProducts();
      return await restApi.get({ url, params });
    },
  });
};

export const PRODUCT_DETAIL_QUERY_KEY = [QUERY_KEY_PREFIX, 'PRODUCT_DETAIL'];
/**
 * 특정 제품의 버전 정보를 불러오는 쿼리
 * @param productId
 */
export const useProductDetailQuery = (productId?: string | null) => {
  return useQuery({
    queryKey: [...PRODUCT_DETAIL_QUERY_KEY, productId],
    queryFn: async () => {
      const { url } = productApi.getProductById(productId!);
      return await restApi.get({ url });
    },
    enabled: !!productId,
  });
};
