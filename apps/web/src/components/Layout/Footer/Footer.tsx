import dayjs from 'dayjs';
import { DATE_FORMAT } from '@/constants';

export default function Footer() {
  const startYear = '2024';
  const currentYear = dayjs().format(DATE_FORMAT.YEAR);
  return (
    <footer className="h-[60px] flex items-center justify-center gap-md text-sm">
      <span>
        ⓒ {startYear === currentYear ? startYear : [startYear, currentYear].join('-')} Bluemiv. All
        right reserved.
      </span>
    </footer>
  );
}
