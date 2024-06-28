import { useMutation, useQuery } from '@tanstack/react-query';
import { apiCaller } from '@/utils';
import productApi from '@/api/productApi';
import { TPropsWithPaginationQuery } from '@/types';

const PREFIX = 'PRODUCT';

export const PRODUCTS_QUERY_KEY = [PREFIX, 'PRODUCTS'];
/**
 * Skin product를 조회하는 Query
 */
export const useProductsQuery = (searchParams?: TPropsWithPaginationQuery) =>
  useQuery({
    queryKey: [...PRODUCTS_QUERY_KEY, searchParams],
    queryFn: async () => {
      const { url, params } = productApi.getProducts(searchParams);
      const { data } = await apiCaller.get(url, params);
      return data;
    },
  });

/**
 * Skin product를 등록하는 Mutation
 */
export const useCreateProductMutation = () =>
  useMutation({
    mutationFn: async ({ name, description }: { name: string; description: string }) => {
      const { url, params } = productApi.createProduct({
        name: name.trim(),
        description: description.trim(),
      });
      const { data } = await apiCaller.post(url, params);
      return data;
    },
  });
