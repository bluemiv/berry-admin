'use client';

import { useState } from 'react';
import dayjs from 'dayjs';
import { Button, Card, Modal } from '@/components';
import { Table } from '@/components';
import { DATE_FORMAT } from '@/constants';
import { useProductsQuery, useProductVersionsQuery } from '@/features/product/hooks';
import { useModal } from '@/hooks';

export default function Page() {
  const [selectedProductId, setSelectedProductId] = useState<null | string>(null);
  const [addProductModal, setAddProductModal] = useModal();

  const { data: productsRes } = useProductsQuery();
  const { data: productVersionsRes } = useProductVersionsQuery(selectedProductId);

  return (
    <main className="flex flex-col gap-md">
      <Card title="Product Info">
        <div className="flex justify-end mb-md">
          <Button type="primary" onClick={() => setAddProductModal({ visible: true })}>
            + Add Product
          </Button>
        </div>
        <Table
          rowKey="id"
          columns={[
            { title: 'ID', dataIndex: 'id', className: 'max-w-[100px] break-all' },
            {
              title: 'ProductName',
              dataIndex: 'name',
              render: (name, record) => (
                <Button type="link" onClick={() => setSelectedProductId(record.id)}>
                  {name}
                </Button>
              ),
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
      <Card title="Product Version Info">
        <Table
          rowKey="id"
          columns={[
            { title: 'ID', dataIndex: 'id', className: 'max-w-[100px] break-all' },
            {
              title: 'Version',
              dataIndex: 'version',
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
          dataSource={productVersionsRes?.results || []}
        />
      </Card>
      <Modal
        title="제목"
        visible={addProductModal.visible}
        onClose={() => setAddProductModal({ visible: false })}
      >
        바디
      </Modal>
    </main>
  );
}
