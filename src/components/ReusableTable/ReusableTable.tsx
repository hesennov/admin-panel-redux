import type { Column } from "../../types/reusableTable";
interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading: boolean;
}

export default function ReusableTable<T extends { id: number | string }>({
  data,
  columns,
  loading,
}: TableProps<T>) {
  const skeletonRows = Array.from({ length: 5 });
  return (
    <div>
      <table className="table-auto w-full border">
        <thead>
          <tr>
            {columns.map((col) => (
              <th className="px-4 py-2 border" key={String(col.key)}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading
            ? skeletonRows.map((_, i) => (
                <tr key={i} className="border">
                  {columns.map((col) => (
                    <td key={String(col.key)} className="px-4 py-2 border">
                      <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                    </td>
                  ))}
                </tr>
              ))
            : data.map((row) => (
                <tr key={String(row.id)} className="border">
                  {columns.map((col) => {
                    return (
                      <td
                        key={`${row.id}-${String(col.key)}`}
                        className="px-4 py-2 border"
                      >
                        {col.render
                          ? col.render(row[col.key], row)
                          : (row[col.key] as React.ReactNode)}
                      </td>
                    );
                  })}
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}
