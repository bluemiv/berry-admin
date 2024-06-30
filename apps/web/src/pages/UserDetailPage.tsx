import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetailPage = () => {
  const params = useParams();
  const userId = Number(params.userId);
  return <div>{userId}</div>;
};

export default UserDetailPage;
