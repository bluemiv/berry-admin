'use client';

import dayjs from 'dayjs';
import { Button, Card } from '@/components';
import { Table } from '@/components';
import { DATE_FORMAT } from '@/constants';
import { PRODUCTS_QUERY_KEY, useProductsQuery } from '@/features/product/hooks';
import { useModal } from '@/hooks';
import { useQueryClient } from '@tanstack/react-query';
import { AddBuyerModal } from '@/features/buyer/components';

export default function Page() {
  const [addUserModal, setAddProductModal] = useModal();

  const { data: productsRes } = useProductsQuery();
  const queryClient = useQueryClient();

  return (
    <main className="flex flex-col gap-md">
      <Card title="Buyer">
        <div className="flex justify-end mb-md">
          <Button type="primary" onClick={() => setAddProductModal({ visible: true })}>
            + Add buyer
          </Button>
        </div>
        <Table
          rowKey="id"
          columns={[
            { title: 'ID', dataIndex: 'id' },
            {
              title: 'BuyerName',
              dataIndex: 'name',
              render: (name, record) => (
                <Button type="link" onClick={console.log}>
                  {name}
                </Button>
              ),
            },
            {
              title: 'Email',
              dataIndex: 'email',
            },
            {
              title: 'CreatedAt',
              dataIndex: 'createdAt',
              render: (date) => dayjs(date).format(DATE_FORMAT.DATE),
            },
            {
              title: 'UpdatedAt',
              dataIndex: 'updatedAt',
              render: (date) => dayjs(date).format(DATE_FORMAT.DATE),
            },
          ]}
          dataSource={productsRes?.results || []}
        />
      </Card>
      {addUserModal.visible && (
        <AddBuyerModal
          visible={addUserModal.visible}
          onClose={(refresh) => {
            setAddProductModal({ visible: false, modalData: null });
            if (!refresh) return;
            queryClient.invalidateQueries({ queryKey: PRODUCTS_QUERY_KEY });
          }}
        />
      )}
    </main>
  );
}
