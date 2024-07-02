import React from 'react';
import { Card } from 'antd';
import dayjs from 'dayjs';
import { UserTable, UserTableActions } from '@/features/user';
import { useUsersQuery } from '@/queryHooks';
import { SummaryCard } from '@/components';
import classNames from 'classnames';

const UserPage = () => {
  const { data: users } = useUsersQuery({ limit: 100 });

  const currentMonthUsers = users?.data?.filter((user) => {
    const orderAt = user.orders?.[0]?.orderAt;
    if (!orderAt) return false;
    return dayjs(orderAt).isSame(dayjs(), 'month');
  });

  const prevMonthUsers = users?.data?.filter((user) => {
    const orderAt = user.orders?.[0]?.orderAt;
    if (!orderAt) return false;
    return dayjs(orderAt).isSame(dayjs().subtract(1, 'month'), 'month');
  });

  const diffRate =
    currentMonthUsers?.length && prevMonthUsers?.length
      ? Math.floor(
          ((currentMonthUsers.length - prevMonthUsers.length) / prevMonthUsers.length) * 100,
        )
      : 0;

  return (
    <main className="p-md h-contents flex flex-col gap-md">
      <div className="grid grid-cols-3 gap-md">
        <SummaryCard title="전체 사용자 수">{users?.count || 0}명</SummaryCard>
        <SummaryCard title="이번달 구매자 수">
          {currentMonthUsers?.length || 0}명{' '}
          <span
            className={classNames(
              'text-lg',
              diffRate === 0 ? '' : diffRate < 0 ? 'text-red-600' : 'text-green-600',
            )}
          >
            {diffRate}%
          </span>
        </SummaryCard>
        <SummaryCard title="전달 구매자 수">{prevMonthUsers?.length || 0}명</SummaryCard>
      </div>
      <Card title="구매자 목록">
        <div className="flex flex-col gap-md">
          <UserTableActions />
          <UserTable />
        </div>
      </Card>
    </main>
  );
};

export default UserPage;
