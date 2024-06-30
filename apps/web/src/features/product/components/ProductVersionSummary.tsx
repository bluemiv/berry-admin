import { Card } from 'antd';
import React from 'react';
import { useProductQuery } from '@/queryHooks';
import { SummaryCard } from '@/components';
import { toMoneyFormat } from '@/utils';

interface TProps {
  productId: number;
}

const ProductVersionSummary = ({ productId }: TProps) => {
  const { data: product } = useProductQuery(productId);

  const totalPrice = product?.orders?.reduce((acc, order) => acc + order.price, 0);

  return (
    <div className="grid grid-cols-3 gap-md">
      <SummaryCard title="전체 다운로드 수">{product?.orders?.length || 0}건</SummaryCard>
      <SummaryCard title="총 판매 금액">{toMoneyFormat(totalPrice, { suffix: '원' })}</SummaryCard>
      <SummaryCard title="최근 배포 버전">
        {product?.versions?.filter((v) => !!v?.releaseAt)?.[0]?.version}
      </SummaryCard>
    </div>
  );
};

export default ProductVersionSummary;
