import type { Metadata } from 'next';
import localFont from 'next/font/local';
import classNames from 'classnames';
import { ReactQueryProvider } from '@/provider';
import './globals.css';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: 'Berry Skin Admin',
  description: 'Berry Skin 판매 관리자 페이지입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={classNames(pretendard.className, 'min-h-screen bg-[#F4F7FE] text-brand-1000')}
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
