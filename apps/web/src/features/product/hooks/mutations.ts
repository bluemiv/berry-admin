import { useMutation } from '@tanstack/react-query';
import { restApi } from '@/utils';
import productApi from '@/api/productApi';

/**
 * 제품을 등록하는 mutation
 */
export const useAddProductMutation = () =>
  useMutation({
    mutationFn: (name: string) => {
      const { url, params } = productApi.createProduct({ name });
      return restApi.post({ url, params });
    },
  });

/**
 * 제품 버전을 등록하는 mutation
 */
export const useAddProductVersionMutation = () =>
  useMutation({
    mutationFn: ({ productId, version }: { productId: string; version: string }) => {
      const { url, params } = productApi.createProductVersion(productId, { version });
      return restApi.post({ url, params });
    },
  });
