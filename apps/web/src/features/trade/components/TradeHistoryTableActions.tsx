import { Button } from 'antd';
import React, { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { TRADE_HISTORY_QUERY_KEY } from '@/queryHooks';
import CreateTradeHistoryModal from '@/features/trade/components/CreateTradeHistoryModal';

interface TProps {
  tradeId: number;
}

const TradeHistoryTableActions = ({ tradeId }: TProps) => {
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
  const queryClient = useQueryClient();

  return (
    <div className="flex gap-md justify-end">
      <Button ghost type="primary" onClick={() => setOpenCreateModal(true)}>
        Trade 상세 건 등록
      </Button>
      {openCreateModal && (
        <CreateTradeHistoryModal
          tradeId={tradeId}
          open={openCreateModal}
          onClose={(options) => {
            setOpenCreateModal(false);
            if (!options?.refresh) return;
            queryClient.invalidateQueries({ queryKey: TRADE_HISTORY_QUERY_KEY });
          }}
        />
      )}
    </div>
  );
};

export default TradeHistoryTableActions;
