import React from 'react';
import { Card } from 'antd';
import { useParams } from 'react-router-dom';
import { useProductQuery } from '@/queryHooks';
import { ProductVersionTable } from '@/features/product';

const ProductDetailPage = () => {
  const params = useParams();
  const productId = params.productId;
  const { data: product } = useProductQuery(Number(productId));

  return (
    <main className="p-md flex flex-col gap-md h-contents">
      <div className="grid grid-cols-3 gap-md">
        <Card title="전체 다운로드 수">136건</Card>
        <Card title="총 판매 금액">1,563,234원</Card>
        <Card title="최근 배포 버전">v1.2.4</Card>
      </div>
      <Card title={`#${product?.id} ${product?.name} 버전`}>
        <ProductVersionTable productId={Number(productId)} />
      </Card>
    </main>
  );
};

export default ProductDetailPage;
