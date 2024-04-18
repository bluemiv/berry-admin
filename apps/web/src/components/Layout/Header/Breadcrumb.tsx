import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTE_PATH_NAME } from '@/constants';

export default function Breadcrumb() {
  const curPathname = usePathname();
  const pathList = curPathname
    .split('/')
    .filter((v) => !!v)
    .reduce((acc: string[], path) => {
      if (acc.length === 0) return [`/${path}`];
      const nextPath = [acc.slice(acc.length, acc.length + 1), path].join('/');
      return [...acc, nextPath];
    }, []);

  return (
    <div className="text-gray-400 text-sm flex gap-md">
      {pathList.map((path) => {
        const isCurrentPage = path === curPathname;
        if (isCurrentPage) return <span key={path}>{ROUTE_PATH_NAME[path]}</span>;
        return !!ROUTE_PATH_NAME[path] ? (
          <Link key={path} href={path} className="hover:underline">
            {ROUTE_PATH_NAME[path]}
          </Link>
        ) : (
          <span key={path}>{path}</span>
        );
      })}
    </div>
  );
}
