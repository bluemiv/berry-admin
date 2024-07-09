import React from 'react';
import { Card } from 'antd';
import { useParams } from 'react-router-dom';
import { TradeHistoryTable, TradeHistoryTableActions } from '@/features/trade';

const TradeDetailPage = () => {
  const params = useParams();
  const tradeId = Number(params.tradeId);

  return (
    <main className="p-md h-contents flex flex-col gap-md">
      <Card title="트레이드 상세 목록">
        <div className="flex flex-col gap-md">
          <TradeHistoryTableActions tradeId={tradeId} />
          <TradeHistoryTable tradeId={tradeId} />
        </div>
      </Card>
    </main>
  );
};

export default TradeDetailPage;
