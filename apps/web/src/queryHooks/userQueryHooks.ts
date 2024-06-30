import { useQuery } from '@tanstack/react-query';
import { TPropsWithPaginationQuery } from '@/types';
import { apiCaller } from '@/utils';
import userApi from '@/api/userApi';

const PREFIX = 'USER';

export const USERS_QUERY_KEY = [PREFIX, 'USERS'];

/**
 * user 목록을 조회하는 Query
 * @param searchParams
 */
export const useUsersQuery = (searchParams?: TPropsWithPaginationQuery) =>
  useQuery({
    queryKey: [...USERS_QUERY_KEY, searchParams],
    queryFn: async () => {
      const { url, params } = userApi.getUsers(searchParams);
      const { data } = await apiCaller.get(url, params);
      return data;
    },
  });
