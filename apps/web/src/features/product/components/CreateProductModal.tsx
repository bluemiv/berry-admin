import { Form, Input, Modal } from 'antd';
import React from 'react';
import { FORM_RULES } from '@/constants';
import { useCreateProductMutation } from '@/queryHooks';

interface TProps {
  open: boolean;
  onClose: (options?: { refresh: boolean }) => void;
}

const CreateProductModal = ({ open, onClose }: TProps) => {
  const [form] = Form.useForm();
  const { mutateAsync: create } = useCreateProductMutation();

  const onSubmit = async (formParams: { name: string; description: string }) => {
    await create(formParams);
    return onClose({ refresh: true });
  };

  return (
    <Modal
      open={open}
      title="Skin 등록"
      cancelText="닫기"
      okText="등록"
      onOk={() => form.submit()}
      onCancel={() => onClose()}
    >
      <Form form={form} colon={false} layout="vertical" onFinish={onSubmit}>
        <Form.Item name="name" label="스킨 이름" required rules={[FORM_RULES.REQUIRED]}>
          <Input placeholder="Skin의 이름을 입력해주세요." />
        </Form.Item>
        <Form.Item name="description" label="스킨 설명" required rules={[FORM_RULES.REQUIRED]}>
          <Input.TextArea rows={3} placeholder="설명을 입력해주세요." />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateProductModal;
