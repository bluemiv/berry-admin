import React from 'react';
import { Button, Card } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ProductVersionSummary,
  ProductVersionTable,
  ProductVersionTableActions,
} from '@/features/product';
import { useProductQuery } from '@/queryHooks';

const ProductDetailPage = () => {
  const nav = useNavigate();

  const params = useParams();
  const productId = Number(params.productId);
  const { data: product } = useProductQuery(productId);

  return (
    <main className="p-md flex flex-col gap-md h-contents">
      <div>
        <Button onClick={() => nav(-1)}>뒤로가기</Button>
      </div>
      <ProductVersionSummary productId={productId} />
      <Card title={`#${product?.id} ${product?.name} 버전`}>
        <div className="flex flex-col gap-md">
          <ProductVersionTableActions productId={productId} />
          <ProductVersionTable productId={productId} />
        </div>
      </Card>
    </main>
  );
};

export default ProductDetailPage;
