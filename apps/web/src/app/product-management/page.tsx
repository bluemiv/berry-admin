'use client';

import { useState } from 'react';
import dayjs from 'dayjs';
import { Button, Card } from '@/components';
import { Table } from '@/components';
import { DATE_FORMAT } from '@/constants';
import { PRODUCTS_QUERY_KEY, useProductsQuery } from '@/features/product/hooks';
import { useModal } from '@/hooks';
import { AddProductModal, ProductVersionCard } from '@/features/product/components';
import { useQueryClient } from '@tanstack/react-query';

export default function Page() {
  const [selectedProduct, setSelectedProduct] = useState<{ [key: string]: any } | null>(null);
  const [addProductModal, setAddProductModal] = useModal();

  const { data: productsRes } = useProductsQuery();
  const queryClient = useQueryClient();

  return (
    <main className="flex flex-col gap-md">
      <Card title="Products">
        <div className="flex justify-end mb-md">
          <Button type="primary" onClick={() => setAddProductModal({ visible: true })}>
            + Add Product
          </Button>
        </div>
        <Table
          rowKey="id"
          columns={[
            { title: 'ID', dataIndex: 'id' },
            {
              title: 'ProductName',
              dataIndex: 'name',
              render: (name, record) => (
                <Button type="link" onClick={() => setSelectedProduct(record)}>
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
      <ProductVersionCard product={selectedProduct} />
      {addProductModal.visible && (
        <AddProductModal
          visible={addProductModal.visible}
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
