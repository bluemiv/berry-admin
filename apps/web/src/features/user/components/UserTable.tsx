import React from 'react';
import { Table, Tag } from 'antd';
import { useUsersQuery } from '@/queryHooks';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '@/routes';
import { NO_DATA } from '@/constants';
import { TOrder } from '@/features/order';

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
          title: '구매 스킨',
          dataIndex: 'orders',
          key: 'product',
          render: (orders: TOrder[]) => {
            if ((orders?.length || 0) === 0) return NO_DATA;
            return (
              <div>
                {orders?.map((order, idx) => {
                  const product = order.product;
                  const productVersion = order.productVersion;
                  return (
                    <Link
                      key={idx}
                      to={ROUTE_PATH.PRODUCT_DETAIL.replace(':productId', product.id.toString())}
                    >
                      {product.name} ({productVersion.version})
                    </Link>
                  );
                })}
              </div>
            );
          },
        },
        {
          title: '구매 금액',
          dataIndex: 'orders',
          key: 'price',
          render: (orders: TOrder[]) => {
            if ((orders?.length || 0) === 0) return NO_DATA;
            return orders.reduce((acc, order) => acc + order.price, 0);
          },
        },
        { title: '안내메일 동의', dataIndex: ['marketing', 'email'] },
      ]}
      dataSource={users?.data || []}
    />
  );
};

export default UserTable;
