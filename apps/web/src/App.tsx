import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { StyleProvider } from '@ant-design/cssinjs';
import { router } from '@/routes';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <StyleProvider hashPriority="high">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#1E40AF',
            colorLink: '#1E40AF',
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </StyleProvider>
  );
}

export default App;
