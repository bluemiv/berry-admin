import React from 'react';
import { Form, Input, Modal } from 'antd';
import { FORM_RULES } from '@/constants';
import { useCreateTradeHistoryMutation } from '@/queryHooks';
import { TTrade } from '@/features/trade';

interface TProps {
  trade: TTrade;
  open: boolean;
  onClose: (options?: { refresh: boolean }) => void;
}

const CreateTradeHistoryModal = ({ open, onClose, trade }: TProps) => {
  const deposit = trade?.deposit || 0;
  const withdraw = trade?.withdraw || 0;

  const [form] = Form.useForm();
  const { mutateAsync: create } = useCreateTradeHistoryMutation();

  const onSubmit = async (formParams: { currentSeed: number; description?: string }) => {
    await create({
      tradeId: trade.id,
      currentSeed: Number(formParams.currentSeed) - deposit + withdraw,
      description: formParams?.description?.trim(),
    });
    return onClose({ refresh: true });
  };

  return (
    <Modal
      open={open}
      title="Trade 등록"
      cancelText="닫기"
      okText="등록"
      onOk={() => form.submit()}
      onCancel={() => onClose()}
    >
      <Form form={form} colon={false} layout="vertical" onFinish={onSubmit}>
        <Form.Item
          name="currentSeed"
          label="현재 Seed (단위: 원)"
          required
          rules={[FORM_RULES.REQUIRED]}
        >
          <Input type="number" placeholder="현재 seed를 입력해주세요." />
        </Form.Item>
        <Form.Item name="description" label="Trade 설명">
          <Input.TextArea rows={3} placeholder="설명을 입력해주세요." />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateTradeHistoryModal;
