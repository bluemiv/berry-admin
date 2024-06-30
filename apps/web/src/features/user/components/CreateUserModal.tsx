import React from 'react';
import { DatePicker, Form, Input, Modal, Radio, Select } from 'antd';
import { Dayjs } from 'dayjs';
import { useQueryClient } from '@tanstack/react-query';
import { DATE_FORMAT, FORM_RULES } from '@/constants';
import {
  useCreateOrderMutation,
  useCreateUserMutation,
  useProductsQuery,
  USERS_QUERY_KEY,
  useUsersQuery,
} from '@/queryHooks';

interface TProps {
  open: boolean;
  onClose: (options?: { refresh: boolean }) => void;
}

const CreateUserModal = ({ open, onClose }: TProps) => {
  const queryClient = useQueryClient();

  const [form] = Form.useForm();
  const productId = Form.useWatch('productId', form);
  const name = Form.useWatch('name', form);
  const email = Form.useWatch('email', form);

  const { refetch: fetchUser } = useUsersQuery({ name, email }, { enabled: false });

  const { data: products } = useProductsQuery();
  const { mutateAsync: createUser } = useCreateUserMutation();
  const { mutateAsync: createOrder } = useCreateOrderMutation();

  const onSubmit = async (formParams: {
    name: string;
    email?: string;
    productId: number;
    productVersionId: number;
    price: number;
    orderAt?: Dayjs;
    marketingEmail: boolean;
  }) => {
    const { data: createdUserInfo } = await fetchUser();
    let user = createdUserInfo?.data?.[0];
    if (!user) {
      user = await createUser({
        name: formParams.name.trim(),
        email: formParams?.email?.trim(),
        marketingEmail: formParams.marketingEmail,
      });
    }

    await createOrder({
      userId: user!.id,
      productId: formParams.productId,
      productVersionId: formParams.productVersionId,
      price: formParams.price,
      orderAt: !!formParams?.orderAt ? formParams.orderAt.format(DATE_FORMAT.FULL_DATE) : null,
    });

    await queryClient.invalidateQueries({ queryKey: USERS_QUERY_KEY });
    return onClose({ refresh: true });
  };

  return (
    <Modal
      open={open}
      title="구매자 등록"
      cancelText="닫기"
      okText="등록"
      onOk={() => form.submit()}
      onCancel={() => onClose()}
    >
      <Form
        form={form}
        colon={false}
        onFinish={onSubmit}
        initialValues={{ productId: products?.data?.[0]?.id, price: 5000, marketingEmail: true }}
      >
        <Form.Item name="name" label="성함" required rules={[FORM_RULES.REQUIRED]}>
          <Input placeholder="구매자의 성함을 입력해주세요." />
        </Form.Item>
        <Form.Item name="email" label="이메일">
          <Input placeholder="구매자의 이메일을 입력해주세요." />
        </Form.Item>
        <Form.Item name="productId" label="구매 스킨" required rules={[FORM_RULES.REQUIRED]}>
          <Select
            placeholder="구매한 스킨을 선택해주세요."
            options={products?.data
              ?.filter((v) => (v?.versions?.length || 0) > 0)
              ?.map((v) => ({
                label: `${v.name} (버전: ${v?.versions?.length || 0}개)`,
                value: v.id,
              }))}
          />
        </Form.Item>
        <Form.Item
          name="productVersionId"
          label="구매 스킨 버전"
          required
          rules={[FORM_RULES.REQUIRED]}
        >
          <Select
            placeholder="구매한 스킨의 버전을 선택해주세요."
            options={products?.data
              ?.find((v) => v.id === productId)
              ?.versions?.map((v) => ({
                label: `${v.version}`,
                value: v.id,
              }))}
          />
        </Form.Item>
        <Form.Item name="price" label="구매 금액" required rules={[FORM_RULES.REQUIRED]}>
          <Input type="number" min={5000} max={10000000} placeholder="구매 금액을 입력해주세요." />
        </Form.Item>
        <Form.Item name="orderAt" label="구매 일자">
          <DatePicker placeholder="구매 일자를 선택해주세요." />
        </Form.Item>
        <Form.Item
          name="marketingEmail"
          label="안내메일 동의"
          required
          rules={[FORM_RULES.REQUIRED]}
        >
          <Radio.Group
            options={[
              { label: '동의', value: true },
              { label: '거부', value: false },
            ]}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateUserModal;
