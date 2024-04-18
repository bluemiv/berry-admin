import { useQuery } from '@tanstack/react-query';
import productApi from '@/api/productApi';
import { restApi } from '@/utils';

const QUERY_KEY_PREFIX = 'PRODUCT';

export const PRODUCTS_QUERY_KEY = [QUERY_KEY_PREFIX, 'PRODUCTS'];
export const useProductsQuery = () => {
  return useQuery({
    queryKey: PRODUCTS_QUERY_KEY,
    queryFn: async () => {
      const { url, params } = productApi.getProducts();
      return await restApi.get({ url, params });
    },
  });
};
