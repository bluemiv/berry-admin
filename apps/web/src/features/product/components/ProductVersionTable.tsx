import React from 'react';
import dayjs from 'dayjs';
import { Button, Popconfirm, Table, Tag } from 'antd';
import { useQueryClient } from '@tanstack/react-query';
import { PRODUCT_QUERY_KEY, useProductQuery, useReleaseProductVersionMutation } from '@/queryHooks';
import { TableField } from '@/components';
import { DATE_FORMAT } from '@/constants';

interface TProps {
  productId: number;
}

const ProductVersionTable = ({ productId }: TProps) => {
  const { data: product } = useProductQuery(productId);
  const { mutateAsync: release } = useReleaseProductVersionMutation();
  const queryClient = useQueryClient();

  const onClickRelease = async (id: number) => {
    await release({ versionId: id, releaseAt: dayjs().format(DATE_FORMAT.FULL_DATE) });
    return queryClient.invalidateQueries({ queryKey: PRODUCT_QUERY_KEY });
  };

  return (
    <Table
      rowKey="id"
      columns={[
        { title: '#', dataIndex: 'id' },
        {
          title: '버전',
          dataIndex: 'version',
          render: (version, record) => {
            const isRelease = !!record?.releaseAt;
            if (!isRelease) return version;
            return (
              <div>
                <span className="mr-sm">{version}</span>
                <Tag color="purple">배포됨</Tag>
              </div>
            );
          },
        },
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
        {
          title: '',
          key: 'actions',
          dataIndex: 'id',
          render: (id, record) => {
            const isReleased = !!record?.releaseAt;
            return (
              <div>
                <Popconfirm
                  title="배포 처리 하시겠습니까?"
                  okText="네"
                  cancelText="아니오"
                  onConfirm={() => onClickRelease(id)}
                >
                  <Button type="primary" ghost>
                    {isReleased ? '재배포' : '배포'}
                  </Button>
                </Popconfirm>
              </div>
            );
          },
        },
      ]}
      dataSource={product?.versions || []}
    />
  );
};

export default ProductVersionTable;
