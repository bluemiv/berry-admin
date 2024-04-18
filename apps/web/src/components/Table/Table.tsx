import { ReactNode } from 'react';
import lodash from 'lodash';
import classNames from 'classnames';

type TColumn = {
  title?: ReactNode;
  key?: number | string;
  dataIndex: string | string[];
  width?: string;
  className?: string;
  render?: (data: any, record: { [key: string]: any }) => ReactNode;
};

interface TProps {
  rowKey?: string;
  columns: TColumn[];
  dataSource: { [key: string]: any }[];
}

export default function Table({ rowKey = 'key', columns, dataSource }: TProps) {
  const getColKey = (col: TColumn) =>
    col.key || (lodash.isArray(col.dataIndex) ? col.dataIndex.join('-') : col.dataIndex);

  return (
    <table className="w-full text-sm">
      <thead className="bg-slate-50">
        <tr>
          {columns?.map((col) => {
            console.log(col.width);
            return (
              <th className="px-xs text-left font-semibold" key={getColKey(col)}>
                <div
                  className={classNames('flex items-center min-h-[35px]', col.className)}
                  style={!!col.width ? { maxWidth: col.width } : {}}
                >
                  {col.title}
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {dataSource.map((record) => {
          const dataKey = record?.[rowKey || 'key'];
          return (
            <tr key={`table-tr-${dataKey}`}>
              {columns.map((col) => {
                const curData = lodash.isArray(col.dataIndex)
                  ? col.dataIndex.reduce((acc, v) => acc?.[v] || {}, record)
                  : record?.[col.dataIndex];
                return (
                  <td key={`table-td-${getColKey(col)}-${dataKey}`}>
                    <div
                      className={classNames('flex items-center min-h-[35px]', col.className)}
                      style={!!col.width ? { maxWidth: col.width } : {}}
                    >
                      {!!col.render ? col.render(curData, record) : curData}
                    </div>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
