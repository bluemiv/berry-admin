import React from 'react';
import { Table } from 'antd';
import { useUsersQuery } from '@/queryHooks';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '@/routes';
import { NO_DATA } from '@/constants';

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
            return <Link to={ROUTE_PATH.USER_DETAIL.replace(':userId', record.id)}>{name}</Link>;
          },
        },
        { title: '이메일주소', dataIndex: 'email' },
        { title: '구매 스킨', dataIndex: ['skin', 'name'] },
        { title: '구매 스킨 버전', dataIndex: ['skin', 'version'] },
        { title: '구매 금액', dataIndex: 'price' },
        { title: '안내메일 동의', dataIndex: ['marketing', 'email'] },
      ]}
      dataSource={users?.data || []}
    />
  );
};

export default UserTable;
