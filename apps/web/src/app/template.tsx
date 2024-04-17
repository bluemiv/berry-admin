import { TPropsWithChildren } from '@/types';

export default function Template({ children }: TPropsWithChildren) {
  return (
    <div className="flex p-sm gap-sm bg-indigo-50">
      <aside className="rounded-2xl min-h-[calc(100vh-1rem)] min-w-[300px] p-sm bg-white">
        사이드바
      </aside>
      <div className="min-h-[calc(100vh-1rem)] flex-1 flex flex-col">
        <header>header</header>
        <main className="bg-white">{children}</main>
        <footer>footer</footer>
      </div>
    </div>
  );
}
