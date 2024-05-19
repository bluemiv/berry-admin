import React from 'react';
import { Card } from 'antd';
import { ProductTable } from '@/features/product';

const ProductPage = () => {
  return (
    <main className="p-md h-contents">
      <Card title="Tistory 스킨">
        <ProductTable />
      </Card>
    </main>
  );
};

export default ProductPage;
