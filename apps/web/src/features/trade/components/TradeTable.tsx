import { Table } from 'antd';
import React from 'react';
import { TableField } from '@/components';
import { useTradesQuery } from '@/queryHooks';
import { replaceRoutePath, toMoneyFormat } from '@/utils';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '@/routes';

const TradeTable = () => {
  const { data: tradesRes, isLoading } = useTradesQuery();
  return (
    <Table
      loading={isLoading}
      rowKey="id"
      pagination={{ total: tradesRes?.count || 0 }}
      columns={[
        { title: '#', dataIndex: 'id' },
        {
          title: 'Symbol',
          dataIndex: 'symbol',
          render: (symbol, record) => (
            <Link to={replaceRoutePath(ROUTE_PATH.TRADE_DETAIL, { tradeId: record.id })}>
              {symbol?.toUpperCase()}
            </Link>
          ),
        },
        { title: '상세 내용', dataIndex: 'description' },
        {
          title: '시작 금액',
          dataIndex: 'startSeed',
          render: (price) => toMoneyFormat(price, { suffix: '원' }),
        },
        {
          title: '목표 금액',
          dataIndex: 'goalSeed',
          render: (price) => toMoneyFormat(price, { suffix: '원' }),
        },
        {
          title: '최근 수정일',
          dataIndex: 'updatedAt',
          render: (date) => <TableField.FullDate date={date} />,
        },
        {
          title: '생성일',
          dataIndex: 'createdAt',
          render: (date) => <TableField.FullDate date={date} />,
        },
      ]}
      dataSource={tradesRes?.data || []}
    />
  );
};

export default TradeTable;
