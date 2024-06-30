import { TPropsWithPaginationQuery } from '@/types';

const userApi = {
  /**
   * 사용자 목록을 조회하는 API
   * @param params
   */
  getUsers: (params?: TPropsWithPaginationQuery) => ({
    url: '/user',
    params,
  }),
};

export default userApi;
