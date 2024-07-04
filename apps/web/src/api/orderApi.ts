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
  /**
   * 주문을 삭제하는 API
   * @param orderId order의 id
   */
  deleteOrder: (orderId: number) => ({
    url: `/order/${orderId}`,
  }),
};

export default orderApi;
