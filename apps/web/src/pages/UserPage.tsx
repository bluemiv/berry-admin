import React from 'react';
import { Card } from 'antd';
import { UserTable, UserTableActions } from '@/features/user';
import { useUsersQuery } from '@/queryHooks';
import { SummaryCard } from '@/components';
import dayjs from 'dayjs';

const UserPage = () => {
  const { data: users } = useUsersQuery();

  const currentMonthUsers = users?.data?.filter((user) => {
    const orderAt = user.orders?.[0]?.orderAt;
    if (!orderAt) return false;
    return dayjs(orderAt).isSame(dayjs(), 'month');
  });

  const prevMonthUsers = users?.data?.filter((user) => {
    const orderAt = user.orders?.[0]?.orderAt;
    if (!orderAt) return false;
    return dayjs(orderAt).subtract(1, 'month').isSame(dayjs(), 'month');
  });

  return (
    <main className="p-md h-contents flex flex-col gap-md">
      <div className="grid grid-cols-3 gap-md">
        <SummaryCard title="전체 사용자 수">{users?.count || 0}명</SummaryCard>
        <SummaryCard title="이번달 구매자 수">{currentMonthUsers?.length || 0}명</SummaryCard>
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
