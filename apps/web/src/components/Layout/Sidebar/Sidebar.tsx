import GlobalNavigationBar from '@/components/Layout/Sidebar/GlobalNavigationBar';

export default function Sidebar() {
  return (
    <aside className="min-h-screen min-w-[300px] bg-white">
      <div className="h-[80px] flex justify-center items-center text-xl font-bold border-b-2 border-slate-50">
        BERRY ADMIN
      </div>
      <div>
        <GlobalNavigationBar />
      </div>
    </aside>
  );
}
