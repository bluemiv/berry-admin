import React from 'react';
import { Card, Table } from 'antd';
import { useParams } from 'react-router-dom';
import { useProductQuery } from '@/queryHooks';
import { TableField } from '@/components';

const ProductDetailPage = () => {
  const params = useParams();
  const productId = params.productId;
  const { data: product } = useProductQuery(Number(productId));

  console.log(product);

  return (
    <main className="p-md flex flex-col gap-md h-contents">
      <div className="grid grid-cols-3 gap-md">
        <Card title="전체 다운로드 수">136건</Card>
        <Card title="총 판매 금액">1,563,234원</Card>
        <Card title="최근 배포 버전">v1.2.4</Card>
      </div>
      <Card title={`#${product?.id} ${product?.name} 버전`}>
        <Table
          rowKey="id"
          columns={[
            { title: '#', dataIndex: 'id' },
            { title: '버전', dataIndex: 'version' },
            {
              title: '배포일',
              dataIndex: 'releaseAt',
              render: (date) => <TableField.FullDate date={date} />,
            },
            { title: '다운로드수', dataIndex: 'downloadCount' },
            { title: '총 판매 금액', dataIndex: 'totalPrice' },
            {
              title: '최근 수정일',
              dataIndex: 'updatedAt',
              render: (date) => <TableField.FullDate date={date} />,
            },
            {
              title: '생성일',
              dataIndex: 'createdAt',
              render: (date) => <TableField.FullDate date={date} />,
            },
          ]}
          dataSource={product?.versions || []}
        />
      </Card>
    </main>
  );
};

export default ProductDetailPage;
