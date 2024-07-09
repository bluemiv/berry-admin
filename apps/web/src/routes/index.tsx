import { createBrowserRouter } from 'react-router-dom';
import { BaseLayout } from '@/layout';
import {
  DashboardPage,
  ProductDetailPage,
  ProductPage,
  TradeDetailPage,
  TradePage,
  UserDetailPage,
  UserPage,
} from '@/pages';

export const ROUTE_PATH = {
  ROOT: '/',
  DASHBOARD: '/dashboard',
  USER: '/user',
  USER_DETAIL: '/user/:userId',
  PRODUCT: '/product',
  PRODUCT_DETAIL: '/product/:productId',
  TRADE: '/trade',
  TRADE_DETAIL: '/trade/:tradeId',
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
        path: ROUTE_PATH.USER_DETAIL,
        element: <UserDetailPage />,
      },
      {
        path: ROUTE_PATH.PRODUCT,
        element: <ProductPage />,
      },
      {
        path: ROUTE_PATH.PRODUCT_DETAIL,
        element: <ProductDetailPage />,
      },
      {
        path: ROUTE_PATH.TRADE,
        element: <TradePage />,
      },
      {
        path: ROUTE_PATH.TRADE_DETAIL,
        element: <TradeDetailPage />,
      },
    ],
  },
]);
