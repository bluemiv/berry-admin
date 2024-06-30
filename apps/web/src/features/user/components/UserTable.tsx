import React from 'react';
import { Table, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { useUsersQuery } from '@/queryHooks';
import { ROUTE_PATH } from '@/routes';
import { DATE_FORMAT, NO_DATA } from '@/constants';
import { TOrder } from '@/features/order';
import { toMoneyFormat } from '@/utils';
import dayjs from 'dayjs';

const UserTable = () => {
  const { data: users } = useUsersQuery();

  return (
    <Table
      rowKey="id"
      pagination={{ total: users?.count || 0 }}
      columns={[
        { title: '#', dataIndex: 'id' },
        {
          title: '성함',
          dataIndex: 'name',
          render: (name, record) => {
            if (!name || !record.id) return NO_DATA;
            return (
              <Link to={ROUTE_PATH.USER_DETAIL.replace(':userId', record.id.toString())}>
                {name}
              </Link>
            );
          },
        },
        { title: '이메일주소', dataIndex: 'email' },
        {
          title: '구매 정보 (스킨/일자/금액)',
          dataIndex: 'orders',
          key: 'product',
          render: (orders: TOrder[]) => {
            if ((orders?.length || 0) === 0) return NO_DATA;
            return (
              <div className="flex flex-col">
                {orders?.map((order, idx) => {
                  const product = order.product;
                  const productVersion = order.productVersion;
                  return (
                    <div key={idx} className="flex gap-sm">
                      <Link
                        to={ROUTE_PATH.PRODUCT_DETAIL.replace(':productId', product.id.toString())}
                      >
                        {product.name} ({productVersion.version})
                      </Link>
                      <span>/</span>
                      <span>{dayjs(order.orderAt).format(DATE_FORMAT.DATE)}</span>
                      <span>/</span>
                      <span>{toMoneyFormat(order.price, { suffix: '원' })}</span>
                    </div>
                  );
                })}
              </div>
            );
          },
        },
        {
          title: '안내메일 동의',
          dataIndex: 'marketingEmail',
          render: (marketingEmail) =>
            marketingEmail ? <Tag color="green">동의</Tag> : <Tag color="red">거부</Tag>,
        },
      ]}
      dataSource={users?.data || []}
    />
  );
};

export default UserTable;
