import React from 'react';
import { Form, Input, Modal } from 'antd';
import { FORM_RULES } from '@/constants';
import { useCreateProductVersionMutation } from '@/queryHooks';

interface TProps {
  open: boolean;
  onClose: (options?: { refresh: boolean }) => void;
  productId: number;
}

const CreateProductVersionModal = ({ open, onClose, productId }: TProps) => {
  const [form] = Form.useForm();
  const { mutateAsync: create } = useCreateProductVersionMutation();

  const onSubmit = async (formParams: { version: string }) => {
    await create({ productId, version: formParams.version.trim() });
    return onClose({ refresh: true });
  };

  return (
    <Modal
      open={open}
      title="Version 등록"
      cancelText="닫기"
      okText="등록"
      onOk={() => form.submit()}
      onCancel={() => onClose()}
    >
      <Form form={form} colon={false} onFinish={onSubmit}>
        <Form.Item name="version" label="Version" required rules={[FORM_RULES.REQUIRED]}>
          <Input placeholder="version을 입력해주세요." />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateProductVersionModal;
