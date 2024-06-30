import React from 'react';
import { Card } from 'antd';
import { UserTable } from '@/features/user';

const UserPage = () => {
  return (
    <main className="p-md h-contents flex flex-col gap-md">
      <div className="grid grid-cols-3 gap-md">
        <Card title="전체 사용자 수">123명</Card>
        <Card title="이번달 구매자 수">20명</Card>
        <Card title="전달 구매자 수">14명</Card>
      </div>
      <Card title="사용자">
        <UserTable />
      </Card>
    </main>
  );
};

export default UserPage;
