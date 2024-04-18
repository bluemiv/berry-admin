import lodash from 'lodash';
import { ReactNode } from 'react';

interface TProps {
  rowKey?: string;
  columns: {
    title?: ReactNode;
    key?: number | string;
    dataIndex: string | string[];
    render?: (data: any, record: { [key: string]: any }) => ReactNode;
  }[];
  dataSource: { [key: string]: any }[];
}

export default function Table({ rowKey = 'key', columns, dataSource }: TProps) {
  return (
    <table className="w-full text-sm">
      <thead className="bg-slate-50">
        <tr>
          {columns?.map((col) => {
            return (
              <th
                className="px-xs text-left font-semibold"
                key={
                  col.key ||
                  (lodash.isArray(col.dataIndex) ? col.dataIndex.join('-') : col.dataIndex)
                }
              >
                <div className="flex items-center min-h-[35px]">{col.title}</div>
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
                  <td key={`table-td-${col.key}-${dataKey}`}>
                    {!!col.render ? col.render(curData, record) : curData}
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
