import { Button } from 'antd';
import React, { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import CreateUserModal from './CreateUserModal';
import { PRODUCTS_QUERY_KEY } from '@/queryHooks';

const UserTableActions = () => {
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
  const queryClient = useQueryClient();

  return (
    <div className="flex gap-md justify-end">
      <Button ghost type="primary" onClick={() => setOpenCreateModal(true)}>
        구매자 등록
      </Button>
      {openCreateModal && (
        <CreateUserModal
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

export default UserTableActions;
