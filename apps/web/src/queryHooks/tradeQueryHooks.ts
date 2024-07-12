import { useMutation, useQuery } from '@tanstack/react-query';
import { apiCaller } from '@/utils';
import { tradeApi } from '@/api';
import { TPropsWithPaginationQuery } from '@/types';
import { TTrade } from '@/features/trade/types';

const PREFIX = 'TRADE';

export const TRADES_QUERY_KEY = [PREFIX, 'TRADES'];

/**
 * Trade 목록을 조회하는 쿼리
 * @param searchParams
 */
export const useTradesQuery = (searchParams?: TPropsWithPaginationQuery<{ title?: string }>) =>
  useQuery({
    queryKey: [...TRADES_QUERY_KEY, searchParams],
    queryFn: async () => {
      const { url, params } = tradeApi.getTrades(searchParams);
      const { data } = await apiCaller.get(url, params);
      return data as { count: number; data: TTrade[] };
    },
  });

/**
 * Trade를 생성하는 Mutation
 */
export const useCreateTradeMutation = () =>
  useMutation({
    mutationFn: async ({
      title,
      description,
      startSeed,
      goalSeed,
      deposit,
      withdraw,
    }: {
      title: string;
      description?: string;
      startSeed?: number;
      goalSeed?: number;
      deposit?: number;
      withdraw?: number;
    }) => {
      const { url, params } = tradeApi.createTrade({
        title: title.trim(),
        description: description?.trim(),
        startSeed,
        goalSeed,
        deposit,
        withdraw,
      });
      const { data } = await apiCaller.post(url, params);
      return data as TTrade;
    },
  });

/**
 * Trade를 수정하는 Mutation
 */
export const useUpdateTradeMutation = (options?: { [key: string]: any }) =>
  useMutation({
    mutationFn: async ({
      id,
      title,
      description,
      startSeed,
      goalSeed,
      deposit,
      withdraw,
    }: {
      id: number;
      title?: string;
      description?: string;
      startSeed?: number;
      goalSeed?: number;
      deposit?: number;
      withdraw?: number;
    }) => {
      const { url, params } = tradeApi.updateTrade(id, {
        title: title?.trim(),
        description: description?.trim(),
        startSeed,
        goalSeed,
        deposit,
        withdraw,
      });
      const { data } = await apiCaller.put(url, params);
      return data as TTrade;
    },
    ...options,
  });

export const TRADE_QUERY_KEY = [PREFIX, 'TRADE'];

/**
 * 특정 Trade를 조회하는 Query
 * @param tradeId
 */
export const useTradeQuery = (tradeId: number) =>
  useQuery({
    queryKey: [...TRADE_QUERY_KEY, tradeId],
    queryFn: async () => {
      const { url } = tradeApi.getTrade(tradeId);
      const { data } = await apiCaller.get(url);
      return data as TTrade;
    },
    enabled: !!tradeId,
  });

export const TRADE_HISTORY_QUERY_KEY = [PREFIX, 'TRADE_HISTORY'];

/**
 * Trade History 목록을 조회하는 쿼리
 * @param tradeId trade id
 * @param searchParams
 */
export const useTradeHistoryQuery = (
  tradeId: number,
  searchParams?: TPropsWithPaginationQuery<{ title?: string }>,
) =>
  useQuery({
    queryKey: [...TRADE_HISTORY_QUERY_KEY, searchParams],
    queryFn: async () => {
      const { url, params } = tradeApi.getTradeHistories(tradeId, searchParams);
      const { data } = await apiCaller.get(url, params);
      return data;
    },
    enabled: !!tradeId,
  });

/**
 * Trade History를 생성하는 Mutation
 */
export const useCreateTradeHistoryMutation = () =>
  useMutation({
    mutationFn: async ({
      tradeId,
      currentSeed,
      description,
    }: {
      tradeId: number;
      currentSeed: number;
      description?: string;
    }) => {
      const { url, params } = tradeApi.createTradeHistory(tradeId, {
        currentSeed,
        description,
      });
      const { data } = await apiCaller.post(url, params);
      return data;
    },
  });
