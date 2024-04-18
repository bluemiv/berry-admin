'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TPropsWithChildren } from '@/types';

export default function ReactQueryProvider({ children }: TPropsWithChildren) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: 30 * 1000,
        refetchInterval: 30 * 1000,
      },
    },
  });
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
