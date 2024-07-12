import { Button, Input, Table } from 'antd';
import React, { useState } from 'react';
import { TableField } from '@/components';
import { TRADES_QUERY_KEY, useTradesQuery, useUpdateTradeMutation } from '@/queryHooks';
import { replaceRoutePath, toMoneyFormat } from '@/utils';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '@/routes';
import { EditOutlined } from '@ant-design/icons';
import { useQueryClient } from '@tanstack/react-query';
import { NO_DATA } from '@/constants';

enum UpdateColumn {
  title,
  description,
  startSeed,
  goalSeed,
  deposit,
  withdraw,
}

const TradeTable = () => {
  const [edit, setEdit] = useState<UpdateColumn | null>(null);
  const { data: tradesRes, isLoading } = useTradesQuery();
  const queryClient = useQueryClient();
  const { mutateAsync: update } = useUpdateTradeMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TRADES_QUERY_KEY });
    },
  });

  return (
    <Table
      loading={isLoading}
      rowKey="id"
      pagination={{ total: tradesRes?.count || 0 }}
      columns={[
        { title: '#', dataIndex: 'id' },
        {
          title: '제목',
          dataIndex: 'title',
          render: (title, record) => (
            <span className="flex gap-sm items-center">
              {edit === UpdateColumn.title ? (
                <Input
                  defaultValue={title}
                  onBlur={async (e) => {
                    const input = e.target.value;
                    if (title !== input) {
                      await update({ id: record.id, title: input });
                    }
                    setEdit(null);
                  }}
                />
              ) : (
                <Link to={replaceRoutePath(ROUTE_PATH.TRADE_DETAIL, { tradeId: record.id })}>
                  {title}
                </Link>
              )}
              <Button icon={<EditOutlined />} onClick={() => setEdit(UpdateColumn.title)} />
            </span>
          ),
        },
        {
          title: '상세 내용',
          dataIndex: 'description',
          render: (description, record) => (
            <span className="flex gap-sm items-center">
              {edit === UpdateColumn.description ? (
                <Input
                  defaultValue={description}
                  onBlur={async (e) => {
                    const input = e.target.value;
                    if (description !== input) {
                      await update({ id: record.id, description: input });
                    }
                    setEdit(null);
                  }}
                />
              ) : (
                description || NO_DATA
              )}
              <Button icon={<EditOutlined />} onClick={() => setEdit(UpdateColumn.description)} />
            </span>
          ),
        },
        {
          title: '시작 금액',
          dataIndex: 'startSeed',
          key: 'startSeed',
          render: (startSeed, record) => (
            <span className="flex gap-sm items-center">
              {edit === UpdateColumn.startSeed ? (
                <Input
                  type="number"
                  defaultValue={startSeed}
                  onBlur={async (e) => {
                    const input = Number(e.target.value);
                    if (startSeed !== input && !Number.isNaN(input)) {
                      await update({ id: record.id, startSeed: input });
                    }
                    setEdit(null);
                  }}
                />
              ) : (
                toMoneyFormat(startSeed, { suffix: '원' })
              )}
              <Button icon={<EditOutlined />} onClick={() => setEdit(UpdateColumn.startSeed)} />
            </span>
          ),
        },
        {
          title: '입금',
          dataIndex: 'deposit',
          render: (deposit, record) => (
            <span className="flex gap-sm items-center">
              {edit === UpdateColumn.deposit ? (
                <Input
                  type="number"
                  defaultValue={deposit}
                  onBlur={async (e) => {
                    const input = Number(e.target.value);
                    if (deposit !== input && !Number.isNaN(input)) {
                      await update({ id: record.id, deposit: input });
                    }
                    setEdit(null);
                  }}
                />
              ) : (
                toMoneyFormat(deposit || 0, { suffix: '원' })
              )}
              <Button icon={<EditOutlined />} onClick={() => setEdit(UpdateColumn.deposit)} />
            </span>
          ),
        },
        {
          title: '출금',
          dataIndex: 'withdraw',
          render: (withdraw, record) => (
            <span className="flex gap-sm items-center">
              {edit === UpdateColumn.withdraw ? (
                <Input
                  type="number"
                  defaultValue={withdraw}
                  onBlur={async (e) => {
                    const input = Number(e.target.value);
                    if (withdraw !== input && !Number.isNaN(input)) {
                      await update({ id: record.id, withdraw: input });
                    }
                    setEdit(null);
                  }}
                />
              ) : (
                toMoneyFormat(withdraw || 0, { suffix: '원' })
              )}
              <Button icon={<EditOutlined />} onClick={() => setEdit(UpdateColumn.withdraw)} />
            </span>
          ),
        },
        {
          title: '목표 금액',
          dataIndex: 'goalSeed',
          render: (goalSeed, record) => (
            <span className="flex gap-sm items-center">
              {edit === UpdateColumn.goalSeed ? (
                <Input
                  type="number"
                  defaultValue={goalSeed}
                  onBlur={async (e) => {
                    const input = Number(e.target.value);
                    if (goalSeed !== input && !Number.isNaN(input)) {
                      await update({ id: record.id, goalSeed: input });
                    }
                    setEdit(null);
                  }}
                />
              ) : (
                toMoneyFormat(goalSeed || 0, { suffix: '원' })
              )}
              <Button icon={<EditOutlined />} onClick={() => setEdit(UpdateColumn.goalSeed)} />
            </span>
          ),
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
