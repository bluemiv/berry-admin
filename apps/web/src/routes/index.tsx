import { createBrowserRouter } from 'react-router-dom';
import { BaseLayout } from '@/layout';
import { DashboardPage, ProductDetailPage, ProductPage, UserPage } from '@/pages';

export const ROUTE_PATH = {
  ROOT: '/',
  DASHBOARD: '/dashboard',
  USER: '/user',
  PRODUCT: '/product',
  PRODUCT_DETAIL: '/product/:productId',
} as const;

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.ROOT,
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: ROUTE_PATH.DASHBOARD,
        element: <DashboardPage />,
      },
      {
        path: ROUTE_PATH.USER,
        element: <UserPage />,
      },
      {
        path: ROUTE_PATH.PRODUCT,
        element: <ProductPage />,
      },
      {
        path: ROUTE_PATH.PRODUCT_DETAIL,
        element: <ProductDetailPage />,
      },
    ],
  },
]);
