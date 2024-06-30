import { Card } from 'antd';
import React, { ReactNode } from 'react';
import { TPropsWithChildren } from '@/types';

interface TProps {
  title: ReactNode;
}

const SummaryCard = ({ title, children }: TPropsWithChildren<TProps>) => {
  return (
    <Card>
      <div>{title}</div>
      <div className="text-4xl text-center">{children}</div>
    </Card>
  );
};

export default SummaryCard;
