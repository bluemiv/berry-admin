import { useMutation, useQuery } from '@tanstack/react-query';
import { apiCaller } from '@/utils';
import { productApi } from '@/api';
import { TPropsWithPaginationQuery } from '@/types';
import { TProduct } from '@/features/product';

const PREFIX = 'PRODUCT';

export const PRODUCT_QUERY_KEY = [PREFIX, 'PRODUCT'];
/**
 * Skin product를 조회하는 Query
 */
export const useProductQuery = (productId: number) =>
  useQuery({
    queryKey: [...PRODUCT_QUERY_KEY, productId],
    queryFn: async () => {
      const { url } = productApi.getProduct(productId);
      const { data } = await apiCaller.get(url);
      return data;
    },
    enabled: !!productId,
  });

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
      return data as { count: number; data: TProduct[] };
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

/**
 * Skin product version을 등록하는 Mutation
 */
export const useCreateProductVersionMutation = () =>
  useMutation({
    mutationFn: async ({ productId, version }: { productId: number; version: string }) => {
      const { url, params } = productApi.createVersion(productId, { version });
      const { data } = await apiCaller.post(url, params);
      return data;
    },
  });

/**
 * Skin product version을 배포하는 Mutation
 */
export const useReleaseProductVersionMutation = () =>
  useMutation({
    mutationFn: async ({ versionId, releaseAt }: { versionId: number; releaseAt?: string }) => {
      const { url, params } = productApi.releaseVersion(versionId, { releaseAt });
      const { data } = await apiCaller.post(url, params);
      return data;
    },
  });
