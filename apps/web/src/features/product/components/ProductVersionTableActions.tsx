import { Button } from 'antd';
import React, { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { PRODUCT_QUERY_KEY, PRODUCTS_QUERY_KEY } from '@/queryHooks';
import CreateProductVersionModal from './CreateProductVersionModal';

interface TProps {
  productId: number;
}

const ProductVersionTableActions = ({ productId }: TProps) => {
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
  const queryClient = useQueryClient();

  return (
    <div className="flex gap-md justify-end">
      <Button ghost type="primary" onClick={() => setOpenCreateModal(true)}>
        Version 등록
      </Button>
      {openCreateModal && (
        <CreateProductVersionModal
          productId={productId}
          open={openCreateModal}
          onClose={(options) => {
            setOpenCreateModal(false);
            if (!options?.refresh) return;
            queryClient.invalidateQueries({ queryKey: PRODUCT_QUERY_KEY });
            queryClient.invalidateQueries({ queryKey: PRODUCTS_QUERY_KEY });
          }}
        />
      )}
    </div>
  );
};

export default ProductVersionTableActions;
