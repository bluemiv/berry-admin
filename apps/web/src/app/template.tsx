import Layout from '@/components/Layout';
import type { TPropsWithChildren } from '@/types';

export default function Template({ children }: TPropsWithChildren) {
  return (
    <div className="flex p-sm gap-sm">
      <Layout.Sidebar />
      <div className="min-h-[calc(100vh-1rem)] flex-1 flex flex-col">
        <Layout.Header />
        {children}
        <Layout.Footer />
      </div>
    </div>
  );
}
