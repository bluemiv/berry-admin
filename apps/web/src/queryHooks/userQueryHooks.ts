import { useMutation, useQuery } from '@tanstack/react-query';
import { TPropsWithPaginationQuery } from '@/types';
import { apiCaller } from '@/utils';
import { userApi } from '@/api';
import { TUser } from '@/features/user';

const PREFIX = 'USER';

export const USERS_QUERY_KEY = [PREFIX, 'USERS'];

/**
 * user 목록을 조회하는 Query
 * @param searchParams
 */
export const useUsersQuery = (
  searchParams?: TPropsWithPaginationQuery<{ name?: string; email?: string }>,
  options?: { [key: string]: any },
) =>
  useQuery({
    queryKey: [...USERS_QUERY_KEY, searchParams],
    queryFn: async () => {
      const { url, params } = userApi.getUsers(searchParams);
      const { data } = await apiCaller.get(url, params);
      return data as { count: number; data: TUser[] };
    },
    ...options,
  });

/**
 * User를 생성하는 Mutation
 */
export const useCreateUserMutation = () =>
  useMutation({
    mutationFn: async ({
      name,
      email,
      marketingEmail,
    }: {
      name: string;
      email?: string;
      marketingEmail: boolean;
    }) => {
      const { url, params } = userApi.createUser({ name, email, marketingEmail });
      const { data } = await apiCaller.post(url, params);
      return data;
    },
  });
