import { useMutation } from '@tanstack/react-query';
import { restApi } from '@/utils';
import buyerApi from '@/api/buyerApi';

/**
 * 구매자를 등록하는 mutation
 */
export const useAddBuyerMutation = () =>
  useMutation({
    mutationFn: (params: { name: string; email?: string }) => {
      const req = buyerApi.createBuyer(params);
      return restApi.post({ url: req.url, params: req.params });
    },
  });
