import { Card, Table } from 'antd';
import React from 'react';

const UserPage = () => {
  return (
    <main className="p-md h-contents flex flex-col gap-md">
      <div className="grid grid-cols-3 gap-md">
        <Card title="전체 사용자 수">123명</Card>
        <Card title="이번달 구매자 수">20명</Card>
        <Card title="전달 구매자 수">14명</Card>
      </div>
      <Card title="사용자">
        <Table
          rowKey="id"
          columns={[
            { title: '#', dataIndex: 'id' },
            { title: '성함', dataIndex: 'name' },
            { title: '이메일주소', dataIndex: 'email' },
            { title: '구매 스킨', dataIndex: ['skin', 'name'] },
            { title: '구매 스킨 버전', dataIndex: ['skin', 'version'] },
            { title: '구매 금액', dataIndex: 'price' },
            { title: '안내메일 동의', dataIndex: ['marketing', 'email'] },
          ]}
          dataSource={[
            {
              id: 1,
              name: '아무개',
              email: 'test@gmail.com',
              skin: { name: 'Berry Skin', version: '1.2.3' },
              price: 12345,
              marketing: { email: true },
            },
          ]}
        />
      </Card>
    </main>
  );
};

export default UserPage;
