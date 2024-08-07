import React from 'react';
import { Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import { TableField } from '@/components';
import { useTradeHistoryQuery, useTradeQuery } from '@/queryHooks';
import { toMoneyFormat, toQueryParamString } from '@/utils';
import { NO_DATA } from '@/constants';
import { useAppSearchParams } from '@/hooks';

interface TProps {
  tradeId: number;
}

const TradeHistoryTable = ({ tradeId }: TProps) => {
  const nav = useNavigate();
  const searchParams = useAppSearchParams();

  const page = Number(searchParams.page || 1);
  const limit = Number(searchParams.limit || 50);

  const { data: tradeRes } = useTradeQuery(tradeId);
  const { data: tradesHistoryRes, isLoading } = useTradeHistoryQuery(tradeId, { page, limit });

  return (
    <Table
      loading={isLoading}
      rowKey="id"
      pagination={{
        total: tradesHistoryRes?.count || 0,
        current: page,
        pageSize: limit,
        showQuickJumper: true,
        showSizeChanger: true,
      }}
      onChange={(pagination) => {
        nav(toQueryParamString({ page: pagination.current, limit: pagination.pageSize }));
      }}
      columns={[
        { title: '#', dataIndex: 'id' },
        {
          title: '입출금 제외 현재 Seed (단위: 원)',
          dataIndex: 'currentSeed',
          render: (currentSeed) => toMoneyFormat(currentSeed, { suffix: '원' }),
        },
        {
          title: '처음 대비 수익금',
          dataIndex: 'currentSeed',
          key: 'diffPrice',
          render: (currentSeed) => {
            if (!currentSeed || !tradeRes?.startSeed) return NO_DATA;
            return toMoneyFormat(currentSeed - tradeRes.startSeed, {
              suffix: '원',
            });
          },
        },
        {
          title: '처음 대비 수익률(%)',
          dataIndex: 'currentSeed',
          key: 'rate',
          render: (currentSeed) => {
            if (!currentSeed || !tradeRes?.startSeed) return NO_DATA;
            const rate =
              Math.round(((currentSeed - tradeRes.startSeed) / tradeRes.startSeed) * 10000) / 100;
            const label = `${rate}%`;

            return (
              <span className={rate > 0 ? 'text-red-600' : rate < 0 ? 'text-blue-600' : ''}>
                {label}
              </span>
            );
          },
        },
        {
          title: '목표까지 남은 금액',
          dataIndex: 'currentSeed',
          key: 'remain',
          render: (currentSeed) => {
            if (!currentSeed || !tradeRes?.goalSeed) return NO_DATA;
            return toMoneyFormat(tradeRes.goalSeed - currentSeed, {
              suffix: '원',
            });
          },
        },
        { title: '상세 내용', dataIndex: 'description' },
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
      dataSource={tradesHistoryRes?.data || []}
    />
  );
};

export default TradeHistoryTable;
