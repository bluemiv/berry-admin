import { createBrowserRouter } from 'react-router-dom';
import { BaseLayout } from '@/layout';

export const ROUTE_PATH = {
  ROOT: '/',
  PRODUCT: '/product',
} as const;

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <div className="h-[2000px]">Hello world!</div>,
      },
    ],
  },
]);
