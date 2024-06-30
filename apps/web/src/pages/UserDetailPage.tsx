import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Descriptions, Table, Tag } from 'antd';
import { useUserQuery } from '@/queryHooks';
import { toMoneyFormat } from '@/utils';
import dayjs from 'dayjs';
import { DATE_FORMAT } from '@/constants';

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
      <div className="grid grid-cols-4 gap-md">
        <Card>
          <div>총 구입 스킨</div>
          <div className="text-4xl text-center">{user?.orders?.length || 0}건</div>
        </Card>
        <Card>
          <div>총 구입 금액</div>
          <div className="text-4xl text-center">
            {toMoneyFormat(
              user?.orders?.reduce((acc, order) => acc + order.price, 0),
              { suffix: '원' },
            )}
          </div>
        </Card>
        <Card>
          <div>최근 구매 스킨</div>
          <div className="text-4xl text-center">
            {user?.orders?.[0]?.product?.name} ({user?.orders?.[0]?.productVersion?.version})
          </div>
        </Card>
        <Card>
          <div>최근 구매일</div>
          <div className="text-4xl text-center">
            {dayjs(user?.orders?.[0]?.orderAt).format(DATE_FORMAT.DATE)}
          </div>
        </Card>
      </div>
      <Card>
        <Descriptions
          title="구매자 정보"
          bordered
          items={[
            {
              key: '1',
              label: 'ID',
              children: user?.id,
            },
            {
              key: '2',
              label: '성함',
              children: user?.name,
              span: 2,
            },
            {
              key: '3',
              label: '안내메일 동의 여부',
              children: user?.marketingEmail ? (
                <Tag color="green">동의</Tag>
              ) : (
                <Tag color="red">거부</Tag>
              ),
            },
            {
              key: '4',
              label: 'Email',
              children: user?.email,
              span: 2,
            },
          ]}
        />
      </Card>
      <Card title="구입 스킨 목록">
        <Table
          rowKey="id"
          columns={[
            { title: '#', dataIndex: 'id' },
            { title: '구입 스킨', dataIndex: ['product', 'name'] },
            { title: '구입 스킨 버전', dataIndex: ['productVersion', 'version'] },
            {
              title: '금액',
              dataIndex: 'price',
              render: (price) => toMoneyFormat(price, { suffix: '원' }),
            },
            {
              title: '구입 일자',
              dataIndex: 'orderAt',
              render: (orderAt) => dayjs(orderAt).format(DATE_FORMAT.DATE),
            },
          ]}
          dataSource={user?.orders || []}
        />
      </Card>
    </main>
  );
};

export default UserDetailPage;
