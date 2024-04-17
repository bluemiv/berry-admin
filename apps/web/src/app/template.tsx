import { Layout } from '@/components';
import type { TPropsWithChildren } from '@/types';

export default function Template({ children }: TPropsWithChildren) {
  return (
    <div className="flex gap-sm">
      <Layout.Sidebar />
      <div className="min-h-screen flex-1 flex flex-col">
        <Layout.Header />
        {children}
        <Layout.Footer />
      </div>
    </div>
  );
}
