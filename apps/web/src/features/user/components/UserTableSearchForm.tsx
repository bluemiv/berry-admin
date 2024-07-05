import React from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppSearchParams } from '@/hooks';
import { toQueryParamString } from '@/utils';

const UserTableSearchForm = () => {
  const nav = useNavigate();
  const [form] = Form.useForm();

  const onSubmit = (formParams: { name?: string; email?: string }) => {
    const nextSearchParams = {
      limit: 20,
      page: 1,
      name: formParams.name?.trim(),
      email: formParams.email?.trim(),
    };
    nav(toQueryParamString(nextSearchParams));
  };

  return (
    <div>
      <Form form={form} colon={false} className="flex gap-md" onFinish={onSubmit}>
        <Form.Item name="name" label="성함" className="flex-1">
          <Input type="text" placeholder="성함을 입력해주세요." />
        </Form.Item>
        <Form.Item name="email" label="이메일 주소" className="flex-1">
          <Input type="text" placeholder="이메일 주소를 입력해주세요." />
        </Form.Item>
      </Form>
      <div className="flex gap-sm justify-end">
        <Button onClick={() => form.resetFields()}>초기화</Button>
        <Button type="primary" onClick={form.submit}>
          검색
        </Button>
      </div>
    </div>
  );
};

export default UserTableSearchForm;
