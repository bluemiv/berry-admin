import React from 'react';
import { Button, Card } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useProductQuery } from '@/queryHooks';
import { ProductVersionTable, ProductVersionTableActions } from '@/features/product';

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
      <div className="grid grid-cols-3 gap-md">
        <Card title="전체 다운로드 수">136건</Card>
        <Card title="총 판매 금액">1,563,234원</Card>
        <Card title="최근 배포 버전">v1.2.4</Card>
      </div>
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
