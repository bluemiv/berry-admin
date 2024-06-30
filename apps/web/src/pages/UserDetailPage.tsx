import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card } from 'antd';
import { useUserQuery } from '@/queryHooks';
import { toMoneyFormat } from '@/utils';

const UserDetailPage = () => {
  const nav = useNavigate();
  const params = useParams();
  const userId = Number(params.userId);
  const { data: user } = useUserQuery(userId);

  return (
    <main className="p-md flex flex-col gap-md h-contents">
      <div>
        <Button onClick={() => nav(-1)}>뒤로가기</Button>
      </div>
      <div className="grid grid-cols-2 gap-md">
        <Card title="총 구입 스킨">{user?.orders?.length || 0}건</Card>
        <Card title="총 구입 금액">
          {toMoneyFormat(
            user?.orders?.reduce((acc, order) => acc + order.price, 0),
            { suffix: '원' },
          )}
        </Card>
      </div>
      <Card title={`#${userId} ${user?.name}`}>
        <div className="flex flex-col gap-md"></div>
      </Card>
    </main>
  );
};

export default UserDetailPage;
