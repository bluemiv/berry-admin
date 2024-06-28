import { ThemeConfig } from 'antd';
import { QueryClient } from '@tanstack/react-query';

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: '#1E40AF',
    colorLink: '#1E40AF',
  },
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
