import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DATE_FORMAT, NO_DATA } from '@/constants';
import { TPropsWithClassName } from '@/types';

interface TProps {
  date?: Dayjs;
}

const FullDateTableField = ({ date, className }: TPropsWithClassName<TProps>) => {
  return (
    <span className={className}>
      {!!date && dayjs(date).isValid() ? dayjs(date).format(DATE_FORMAT.FULL_DATE) : NO_DATA}
    </span>
  );
};

export default FullDateTableField;
