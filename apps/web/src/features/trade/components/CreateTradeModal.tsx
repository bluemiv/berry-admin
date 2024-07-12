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
    title: string;
    description?: string;
    startSeed?: number;
    goalSeed?: number;
    deposit?: number;
    withdraw?: number;
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
      <Form
        form={form}
        colon={false}
        layout="vertical"
        onFinish={onSubmit}
        initialValues={{
          deposit: 0,
          withdraw: 0,
        }}
      >
        <Form.Item name="title" label="Trade 제목" required rules={[FORM_RULES.REQUIRED]}>
          <Input placeholder="Trade 제목을 입력해주세요." />
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
        <Form.Item name="deposit" label="입금한 금액 (단위: 원)">
          <Input type="number" placeholder="입금한 금액을 입력해주세요." />
        </Form.Item>
        <Form.Item name="withdraw" label="출금한 금액 (단위: 원)">
          <Input type="number" placeholder="출금한 금액을 입력해주세요." />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateTradeModal;
