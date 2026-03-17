import type { Column } from "../../types/reusableTable";
interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
}

export default function ReusableTable<T extends { id: number | string }>({
  data,
  columns,
}: TableProps<T>) {
  return (
    <div>
      <table className="table-auto w-full border">
        <thead>
          <tr >
            {columns.map((col) => (
              <th className="px-4 py-2 border" key={String(col.key)}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length}>No data</td>
            </tr>
          ) : (
            data.map((row) => (
              <tr key={String(row.id)} className="border">
                {columns.map((col) => {
                  return (
                    <td
                      key={`${row.id}-${String(col.key)}`}
                      className="px-4 py-2 border"
                    >
                      {col.render
                        ? col.render(row[col.key], row)
                        : row[col.key] as React.ReactNode}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
