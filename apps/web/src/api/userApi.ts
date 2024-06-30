import { TPropsWithPaginationQuery } from '@/types';

const userApi = {
  /**
   * 사용자 목록을 조회하는 API
   * @param params
   */
  getUsers: (params?: TPropsWithPaginationQuery<{ name?: string; email?: string }>) => ({
    url: '/user',
    params,
  }),
  /**
   * 사용자를 조회하는 API
   * @param userId user id
   */
  getUser: (userId: number) => ({
    url: `/user/${userId}`,
  }),
  /**
   * 사용자 목록을 조회하는 API
   * @param params
   */
  createUser: (params: { name: string; email?: string; marketingEmail: boolean }) => ({
    url: '/user',
    params,
  }),
};

export default userApi;
