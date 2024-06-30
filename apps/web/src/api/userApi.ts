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
  /**
   * 사용자 목록을 조회하는 API
   * @param params
   */
  createUser: (params: { name: string; email?: string }) => ({
    url: '/user',
    params,
  }),
};

export default userApi;
