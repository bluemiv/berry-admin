import React from 'react';
import { Form, Input, Modal } from 'antd';
import { FORM_RULES } from '@/constants';
import { useCreateTradeMutation } from '@/queryHooks';

interface TProps {
  open: boolean;
  onClose: (options?: { refresh: boolean }) => void;
}

const CreateTradeModal = ({ open, onClose }: TProps) => {
  const [form] = Form.useForm();
  const { mutateAsync: create } = useCreateTradeMutation();

  const onSubmit = async (formParams: {
    symbol: string;
    description?: string;
    startSeed?: number;
    goalSeed?: number;
  }) => {
    await create(formParams);
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
        <Form.Item name="symbol" label="Trade 종목" required rules={[FORM_RULES.REQUIRED]}>
          <Input placeholder="거래 종목을 입력해주세요." />
        </Form.Item>
        <Form.Item name="description" label="Trade 설명">
          <Input.TextArea rows={3} placeholder="설명을 입력해주세요." />
        </Form.Item>
        <Form.Item name="startSeed" label="시작 Seed (단위: 원)">
          <Input type="number" placeholder="시작 seed를 입력해주세요." />
        </Form.Item>
        <Form.Item name="goalSeed" label="목표 Seed (단위: 원)">
          <Input type="number" placeholder="목표 seed를 입력해주세요." />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateTradeModal;
