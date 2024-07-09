import { useMutation, useQuery } from '@tanstack/react-query';
import { apiCaller } from '@/utils';
import { tradeApi } from '@/api';
import { TPropsWithPaginationQuery } from '@/types';

const PREFIX = 'TRADE';

export const TRADES_QUERY_KEY = [PREFIX, 'TRADES'];

/**
 * Trade 목록을 조회하는 쿼리
 * @param searchParams
 */
export const useTradesQuery = (searchParams?: TPropsWithPaginationQuery<{ symbol?: string }>) =>
  useQuery({
    queryKey: [...TRADES_QUERY_KEY, searchParams],
    queryFn: async () => {
      const { url, params } = tradeApi.getTrades(searchParams);
      const { data } = await apiCaller.get(url, params);
      return data;
    },
  });

/**
 * Trade를 생성하는 Mutation
 */
export const useCreateTradeMutation = () =>
  useMutation({
    mutationFn: async ({
      symbol,
      description,
      startSeed,
      goalSeed,
    }: {
      symbol: string;
      description?: string;
      startSeed?: number;
      goalSeed?: number;
    }) => {
      const { url, params } = tradeApi.createTrade({
        symbol: symbol.trim(),
        description: description?.trim(),
        startSeed,
        goalSeed,
      });
      const { data } = await apiCaller.post(url, params);
      return data;
    },
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
      return data;
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
  searchParams?: TPropsWithPaginationQuery<{ symbol?: string }>,
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
