import { Layout } from '@/components';
import type { TPropsWithChildren } from '@/types';

export default function Template({ children }: TPropsWithChildren) {
  return (
    <div className="flex">
      <Layout.Sidebar />
      <div className="min-h-screen flex-1 flex flex-col px-md">
        <Layout.Header />
        {children}
        <Layout.Footer />
      </div>
    </div>
  );
}
