import { Button } from 'antd';
import React, { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { TRADES_QUERY_KEY } from '@/queryHooks';
import CreateTradeModal from '@/features/trade/components/CreateTradeModal';

const TradeTableActions = () => {
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
  const queryClient = useQueryClient();

  return (
    <div className="flex gap-md justify-end">
      <Button ghost type="primary" onClick={() => setOpenCreateModal(true)}>
        Trade 등록
      </Button>
      {openCreateModal && (
        <CreateTradeModal
          open={openCreateModal}
          onClose={(options) => {
            setOpenCreateModal(false);
            if (!options?.refresh) return;
            queryClient.invalidateQueries({ queryKey: TRADES_QUERY_KEY });
          }}
        />
      )}
    </div>
  );
};

export default TradeTableActions;
