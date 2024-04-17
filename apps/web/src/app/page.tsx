import { redirect } from 'next/navigation';
import { ROUTE_PATH } from '@/constants';

export default function Home() {
  return redirect(ROUTE_PATH.DASHBOARD);
}
