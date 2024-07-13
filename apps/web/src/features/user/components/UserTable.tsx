import React from 'react';
import { Button, Popconfirm, Table, Tag } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { useQueryClient } from '@tanstack/react-query';
import { TPropsWithPaginationQuery } from '@/types';
import { useDeleteOrderMutation, USERS_QUERY_KEY, useUsersQuery } from '@/queryHooks';
import { ROUTE_PATH } from '@/routes';
import { DATE_FORMAT, NO_DATA } from '@/constants';
import { TOrder } from '@/features/order';
import { toMoneyFormat, toQueryParamString } from '@/utils';

interface TProps {
  searchParams: TPropsWithPaginationQuery;
}

const UserTable = ({ searchParams }: TProps) => {
  const queryClient = useQueryClient();
  const nav = useNavigate();

  const { data: users } = useUsersQuery(searchParams);
  const { mutateAsync: deleteOrder } = useDeleteOrderMutation();

  const onClickDeleteOrder = async (orderId: number) => {
    await deleteOrder({ orderId });
    return queryClient.invalidateQueries({ queryKey: USERS_QUERY_KEY });
  };

  return (
    <Table
      rowKey="id"
      pagination={{
        total: users?.count || 0,
        current: searchParams.page,
        pageSize: searchParams.limit,
      }}
      onChange={(pagination) => {
        nav(toQueryParamString({ page: pagination.current, limit: pagination.pageSize }));
      }}
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
          title: '안내메일 동의',
          dataIndex: 'marketingEmail',
          render: (marketingEmail) =>
            marketingEmail ? <Tag color="green">동의</Tag> : <Tag color="red">거부</Tag>,
        },
        {
          title: '구매 스킨',
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
          title: '구매 일자',
          dataIndex: 'orders',
          key: 'orderAt',
          render: (orders: TOrder[]) => {
            if ((orders?.length || 0) === 0) return NO_DATA;
            return (
              <div className="flex flex-col">
                {orders?.map((order, idx) => (
                  <div key={idx}>{dayjs(order.orderAt).format(DATE_FORMAT.DATE)}</div>
                ))}
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
            return (
              <div className="flex flex-col">
                {orders?.map((order, idx) => (
                  <div key={idx}>{toMoneyFormat(order.price, { suffix: '원' })}</div>
                ))}
              </div>
            );
          },
        },
        {
          title: '구매건 삭제',
          dataIndex: 'orders',
          key: 'removeOrder',
          width: 45,
          render: (orders: TOrder[]) => {
            if ((orders?.length || 0) === 0) return NO_DATA;
            return (
              <div className="flex flex-col">
                {orders?.map((order, idx) => (
                  <Popconfirm
                    key={idx}
                    title="주문을 삭제하시겠습니까?"
                    okText="네"
                    cancelText="아니오"
                    onConfirm={() => onClickDeleteOrder(order.id)}
                  >
                    <Button>주문 삭제</Button>
                  </Popconfirm>
                ))}
              </div>
            );
          },
        },
      ]}
      dataSource={users?.data || []}
    />
  );
};

export default UserTable;
