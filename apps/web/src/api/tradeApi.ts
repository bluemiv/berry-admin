import { TPropsWithPaginationQuery } from '@/types';

const tradeApi = {
  /**
   * Trade 목록을 조회하는 API
   * @param params
   *  title 거래 제목
   */
  getTrades: (params?: TPropsWithPaginationQuery<{ title?: string }>) => ({
    url: '/trade',
    params,
  }),
  /**
   * Trade를 생성하는 API
   * @param params
   *  title 거래 제목
   *  description 거래 종목에 대한 설명
   */
  createTrade: (params: {
    title: string;
    description?: string;
    startSeed?: number;
    goalSeed?: number;
    deposit?: number;
    withdraw?: number;
  }) => ({
    url: '/trade',
    params,
  }),
  /**
   * Trade를 수정하는 API
   * @param tradeId
   * @param params
   *  title 거래 제목
   *  description 거래 종목에 대한 설명
   */
  updateTrade: (
    tradeId: number,
    params: {
      title?: string;
      description?: string;
      startSeed?: number;
      goalSeed?: number;
      deposit?: number;
      withdraw?: number;
    },
  ) => ({
    url: `/trade/${tradeId}`,
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
