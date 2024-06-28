import { Button } from 'antd';
import React, { useState } from 'react';
import CreateProductModal from '@/features/product/components/CreateProductModal';
import { useQueryClient } from '@tanstack/react-query';
import { PRODUCTS_QUERY_KEY } from '@/queryHooks';

const ProductTableActions = () => {
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
  const queryClient = useQueryClient();

  return (
    <div className="flex gap-md justify-end">
      <Button ghost type="primary" onClick={() => setOpenCreateModal(true)}>
        Skin 등록
      </Button>
      {openCreateModal && (
        <CreateProductModal
          open={openCreateModal}
          onClose={(options) => {
            setOpenCreateModal(false);
            if (!options?.refresh) return;
            queryClient.invalidateQueries({ queryKey: PRODUCTS_QUERY_KEY });
          }}
        />
      )}
    </div>
  );
};

export default ProductTableActions;
