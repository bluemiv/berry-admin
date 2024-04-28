const buyerApi = {
  /**
   * 구매자 정보 등록하는 API
   * @param params
   */
  createBuyer: (params: { name: string; email?: string }) => ({
    url: '/buyer/',
    params,
  }),
};

export default buyerApi;
