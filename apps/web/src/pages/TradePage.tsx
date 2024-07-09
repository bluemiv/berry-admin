import React from 'react';
import { Card } from 'antd';
import { TradeTable, TradeTableActions } from '@/features/trade';

const TradePage = () => {
  return (
    <main className="p-md h-contents flex flex-col gap-md">
      <Card title="트레이드 목록">
        <div className="flex flex-col gap-md">
          <TradeTableActions />
          <TradeTable />
        </div>
      </Card>
    </main>
  );
};

export default TradePage;
