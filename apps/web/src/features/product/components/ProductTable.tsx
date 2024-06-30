import { Table } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '@/routes';
import { useProductsQuery } from '@/queryHooks';
import { TableField } from '@/components';
import { NO_DATA } from '@/constants';

const ProductTable = () => {
  const { data: productsRes } = useProductsQuery();

  return (
    <Table
      rowKey="id"
      pagination={{ total: productsRes?.count || 0 }}
      columns={[
        { title: '#', dataIndex: 'id' },
        {
          title: 'SKIN 이름',
          dataIndex: 'name',
          render: (name, record) => <ProdcutNameField name={name} id={record.id} />,
        },
        { title: '상세 내용', dataIndex: 'description' },
        {
          title: '최종 배포 버전',
          key: 'lastVersion',
          dataIndex: '',
          render: (record) => {
            const releasedVersions = record?.versions?.filter(
              (v: { releaseAt?: string }) => !!v?.releaseAt,
            );
            return releasedVersions?.[0]?.version || NO_DATA;
          },
        },
        {
          title: '최근 배포일',
          key: 'lastReleaseAt',
          dataIndex: '',
          render: (record) => {
            const releasedVersions = record?.versions?.filter(
              (v: { releaseAt?: string }) => !!v?.releaseAt,
            );
            return <TableField.FullDate date={releasedVersions?.[0]?.releaseAt} />;
          },
        },
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
      dataSource={productsRes?.data || []}
    />
  );
};

const ProdcutNameField = ({ name, id }: { name: string; id: number }) => (
  <Link to={ROUTE_PATH.PRODUCT_DETAIL.replace(':productId', id.toString())}>{name}</Link>
);

export default ProductTable;
