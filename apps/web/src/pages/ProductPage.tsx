import React from 'react';
import { Card } from 'antd';
import { ProductTable, ProductTableActions } from '@/features/product';

const ProductPage = () => {
  return (
    <main className="p-md h-contents">
      <Card title="Tistory 스킨">
        <div className="flex flex-col gap-md">
          <ProductTableActions />
          <ProductTable />
        </div>
      </Card>
    </main>
  );
};

export default ProductPage;
