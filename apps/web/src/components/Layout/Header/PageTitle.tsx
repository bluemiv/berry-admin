import { usePathname } from 'next/navigation';
import { ROUTE_PATH_NAME } from '@/constants';

export default function PageTitle() {
  const pathList = usePathname()
    .split('/')
    .filter((v) => !!v);
  return (
    <div className="uppercase font-semibold text-lg">
      {ROUTE_PATH_NAME[`/${pathList[0]}`] || '404 Not found'}
    </div>
  );
}
