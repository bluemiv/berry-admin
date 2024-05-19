import React from 'react';
import { Card, Table } from 'antd';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const params = useParams();
  const productId = params.productId;

  return (
    <main className="p-md flex flex-col gap-md h-contents">
      <div className="grid grid-cols-3 gap-md">
        <Card title="전체 다운로드 수">136건</Card>
        <Card title="총 판매 금액">1,563,234원</Card>
        <Card title="최근 배포 버전">v1.2.4</Card>
      </div>
      <Card title="Berry Skin 버전">
        <Table
          rowKey="id"
          columns={[
            { title: '#', dataIndex: 'id' },
            { title: '버전', dataIndex: 'version' },
            { title: '배포일', dataIndex: 'releaseAt' },
            { title: '다운로드수', dataIndex: 'downloadCount' },
            { title: '총 판매 금액', dataIndex: 'totalPrice' },
          ]}
          dataSource={[
            {
              id: 1,
              version: '1.2.3',
              releaseAt: '2024-01-01 11:21:11',
              downloadCount: 10,
              totalPrice: 20405,
            },
          ]}
        />
      </Card>
    </main>
  );
};

export default ProductDetailPage;
