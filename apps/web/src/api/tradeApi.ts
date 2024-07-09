import { TPropsWithPaginationQuery } from '@/types';

const tradeApi = {
  /**
   * Trade 목록을 조회하는 API
   * @param params
   *  symbol 거래 종목
   */
  getTrades: (params?: TPropsWithPaginationQuery<{ symbol?: string }>) => ({
    url: '/trade',
    params,
  }),
  /**
   * Trade를 생성하는 API
   * @param params
   *  symbol 거래 종목
   *  description 거래 종목에 대한 설명
   */
  createTrade: (params: {
    symbol: string;
    description?: string;
    startSeed?: number;
    goalSeed?: number;
  }) => ({
    url: '/trade',
    params,
  }),
  /**
   * 특정 Trade를 조회하는 API
   * @param tradeId trade id
   */
  getTrade: (tradeId: number) => ({
    url: `/trade/${tradeId}`,
  }),
  /**
   * Trade History를 조회하는 API
   * @param tradeId trade id
   * @param params
   */
  getTradeHistories: (tradeId: number, params?: TPropsWithPaginationQuery) => ({
    url: `/trade/${tradeId}/history`,
    params,
  }),
  /**
   * Trade History를 생성하는 API
   * @param tradeId trade id
   * @param params
   */
  createTradeHistory: (
    tradeId: number,
    params: {
      currentSeed: number;
      description?: string;
    },
  ) => ({
    url: `/trade/${tradeId}/history`,
    params,
  }),
};

export default tradeApi;
