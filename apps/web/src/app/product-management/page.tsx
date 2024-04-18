import dayjs from 'dayjs';
import { Card } from '@/components';
import { Table } from '@/components';
import { DATE_FORMAT } from '@/constants';

export default function Page() {
  return (
    <main className="grid grid-cols-2 gap-md">
      <Card title="Product Info">
        <Table
          rowKey="idx"
          columns={[
            { title: '#', key: 'idx', dataIndex: 'idx' },
            { title: 'ProductName', key: 'productName', dataIndex: 'productName' },
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
          dataSource={[
            {
              idx: 1,
              productName: 'BerrySkin',
              createdAt: '2024-04-05',
              updatedAt: '2024-04-05',
            },
          ]}
        />
      </Card>
      <Card title="Product Version Info">dsfdsf</Card>
    </main>
  );
}
