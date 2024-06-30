import { useMutation } from '@tanstack/react-query';
import { apiCaller } from '@/utils';
import { orderApi } from '@/api';

const PREFIX = 'ORDER';

/**
 * User를 생성하는 Mutation
 */
export const useCreateOrderMutation = () =>
  useMutation({
    mutationFn: async ({
      userId,
      price,
      productId,
      productVersionId,
    }: {
      userId: number;
      price: number;
      productId: number;
      productVersionId: number;
    }) => {
      const { url, params } = orderApi.createOrder({
        userId,
        price,
        productId,
        productVersionId,
      });
      const { data } = await apiCaller.post(url, params);
      return data;
    },
  });
