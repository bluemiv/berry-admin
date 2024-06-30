const orderApi = {
  /**
   * 주문을 생성하는 API
   * @param params
   */
  createOrder: (params: {
    userId: number;
    price: number;
    productId: number;
    productVersionId: number;
    orderAt?: string | null;
  }) => ({
    url: '/order',
    params,
  }),
};

export default orderApi;
