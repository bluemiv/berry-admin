'use client';

import dayjs from 'dayjs';
import { Button, Card } from '@/components';
import { Table } from '@/components';
import { DATE_FORMAT } from '@/constants';
import { useFetchProducts } from '@/features/product/hooks';

export default function Page() {
  const { data: productsRes } = useFetchProducts();

  return (
    <main className="flex flex-col gap-md">
      <Card title="Product Info">
        <Table
          rowKey="id"
          columns={[
            { title: 'ID', dataIndex: 'id', className: 'max-w-[100px] break-all' },
            {
              title: 'ProductName',
              dataIndex: 'name',
              render: (name, record) => <Button onClick={() => console.log(record)}>{name}</Button>,
            },
            {
              title: 'CreatedAt',
              key: 'createdAt',
              dataIndex: 'createdAt',
              render: (date) => dayjs(date).format(DATE_FORMAT.DATE),
            },
            {
              title: 'UpdatedAt',
              key: 'updatedAt',
              dataIndex: 'updatedAt',
              render: (date) => dayjs(date).format(DATE_FORMAT.DATE),
            },
          ]}
          dataSource={productsRes?.results || []}
        />
      </Card>
      <Card title="Product Version Info">dsfdsf</Card>
    </main>
  );
}
