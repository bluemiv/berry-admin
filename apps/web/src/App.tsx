import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import { QueryClientProvider } from '@tanstack/react-query';
import { router } from '@/routes';
import { antdTheme, queryClient } from '@/config';

function App() {
  return (
    <StyleProvider hashPriority="high">
      <ConfigProvider theme={antdTheme}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ConfigProvider>
    </StyleProvider>
  );
}

export default App;
