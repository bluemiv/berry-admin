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
      orderAt,
    }: {
      userId: number;
      price: number;
      productId: number;
      productVersionId: number;
      orderAt?: string | null;
    }) => {
      const { url, params } = orderApi.createOrder({
        userId,
        price,
        productId,
        productVersionId,
        orderAt,
      });
      const { data } = await apiCaller.post(url, params);
      return data;
    },
  });

/**
 * 주문을 삭제하는 Mutation
 */
export const useDeleteOrderMutation = () =>
  useMutation({
    mutationFn: async ({ orderId }: { orderId: number }) => {
      const { url } = orderApi.deleteOrder(orderId);
      const { data } = await apiCaller.delete(url);
      return data;
    },
  });
