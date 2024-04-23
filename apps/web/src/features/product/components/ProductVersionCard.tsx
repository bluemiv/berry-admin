import { Button, Card, Table } from '@/components';
import dayjs from 'dayjs';
import { DATE_FORMAT } from '@/constants';
import { PRODUCT_DETAIL_QUERY_KEY, useProductDetailQuery } from '@/features/product/hooks';
import { useModal } from '@/hooks';
import { useQueryClient } from '@tanstack/react-query';
import { AddProductVersionModal } from '@/features/product/components/index';

interface TProps {
  product?: { [key: string]: any } | null;
}

export default function ProductVersionCard({ product }: TProps) {
  const { data: productDetailRes } = useProductDetailQuery(product?.id);
  const queryClient = useQueryClient();

  const [addVersionModal, setAddVersionModal] = useModal();

  const versions = productDetailRes?.productVersions || [];
  if (!product?.id) return;
  return (
    <Card title={`'${product?.name}' Versions`}>
      <div className="flex justify-end mb-md">
        <Button type="primary" onClick={() => setAddVersionModal({ visible: true })}>
          + Add Version
        </Button>
      </div>
      <Table
        rowKey="id"
        columns={[
          { title: 'ID', dataIndex: 'id' },
          {
            title: 'Version',
            dataIndex: 'version',
          },
          {
            title: 'CreatedAt',
            key: 'createdAt',
            dataIndex: 'createdAt',
            render: (date) => dayjs(date).format(DATE_FORMAT.DATE),
          },
          {
            title: 'UpdatedAt',
            key: 'updatedAt',
            dataIndex: 'updatedAt',
            render: (date) => dayjs(date).format(DATE_FORMAT.DATE),
          },
        ]}
        dataSource={versions}
      />
      {addVersionModal.visible && (
        <AddProductVersionModal
          product={product}
          visible={addVersionModal.visible}
          onClose={(refresh) => {
            setAddVersionModal({
              visible: false,
              modalData: null,
            });
            if (!refresh) return;
            queryClient.invalidateQueries({ queryKey: [PRODUCT_DETAIL_QUERY_KEY] });
          }}
        />
      )}
    </Card>
  );
}
