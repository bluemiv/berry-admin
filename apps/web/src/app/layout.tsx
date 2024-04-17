import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import classNames from 'classnames';

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
        className={classNames(pretendard.className, 'min-h-screen bg-indigo-50/60 text-indigo-950')}
      >
        {children}
      </body>
    </html>
  );
}
