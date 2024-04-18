import { usePathname } from 'next/navigation';
import { ROUTE_PATH_NAME } from '@/constants';

export default function PageTitle() {
  let curPathname = usePathname();
  curPathname = curPathname.endsWith('/')
    ? curPathname.slice(0, curPathname.length - 1)
    : curPathname;
  return (
    <div className="uppercase font-semibold text-lg">
      {ROUTE_PATH_NAME[curPathname] || '404 Not found'}
    </div>
  );
}
