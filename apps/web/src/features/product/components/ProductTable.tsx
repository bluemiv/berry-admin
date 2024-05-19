import { Table } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '@/routes';

const ProductTable = () => {
  return (
    <Table
      rowKey="id"
      columns={[
        { title: '#', dataIndex: 'id' },
        {
          title: 'SKIN 이름',
          dataIndex: 'name',
          render: (name, record) => <ProdcutNameField name={name} id={record.id} />,
        },
        { title: '상세 내용', dataIndex: 'description' },
        { title: '최종 버전', dataIndex: 'lastVersion' },
        { title: '최근 배포일', dataIndex: 'lastReleasAt' },
        { title: '최근 수정일', dataIndex: 'updatedAt' },
        {
          title: '생성일',
          dataIndex: 'createdAt',
        },
      ]}
      dataSource={[
        // TODO api 호출로 변경
        {
          id: 1,
          name: 'Berry Skin',
          description: 'Tistory berry skin',
          lastVersion: '4.0.1',
          lastReleasAt: '2024-06-11 11:11:11',
          createdAt: '2023-11-11 11:11:11',
          updatedAt: '2023-11-11 11:11:11',
        },
        {
          id: 2,
          name: 'Minimal Skin',
          description: 'Tistory minimal skin',
          lastVersion: '1.0.0',
          lastReleasAt: '2024-06-11 11:11:11',
          createdAt: '2023-11-11 11:11:11',
          updatedAt: '2023-11-11 11:11:11',
        },
      ]}
    />
  );
};

const ProdcutNameField = ({ name, id }: { name: string; id: number }) => (
  <Link to={ROUTE_PATH.PRODUCT_DETAIL.replace(':productId', id.toString())}>{name}</Link>
);

export default ProductTable;
