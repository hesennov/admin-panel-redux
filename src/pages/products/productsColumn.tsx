import type { Column } from "../../types/reusableTable";
import type { Product } from "../../types/product";

export const productsColum = (actions: {
  onDelete?: (id: number) => void;
  onEdit?: (data: Product) => void;
}): Column<Product>[] => [
  { label: "Title", key: "title" as const },
  { label: "Price", key: "price" as const },
  {
    label: "Stock",
    key: "stock" as const,
    render: (value: any) => {
      const stockValue = Number(value);
      return (
        <span
          className={`px-2 py-1 text-center rounded flex justify-center  ${stockValue <= 5 ? "text-white bg-red-500" : " text-white bg-green-500"} `}
        >
          {stockValue} - {stockValue <= 5 ? "⚠️low stock " : "in stock"}
        </span>
      );
    },
  },
  {
    label: "actions",
    key: "id",
    render: (_, row) => (
      <div className="flex gap-1 justify-center items-center">
        {actions.onDelete && (
          <button
            className="bg-red-500 text-white px-2 py-1 rounded "
            onClick={() => actions.onDelete?.(row.id)}
          >
            Delete
          </button>
        )}

        {actions.onEdit && (
          <button
            className="bg-yellow-500 px-2 py-1 rounded"
            onClick={() => actions.onEdit?.(row)}
          >
            Edit
          </button>
        )}
      </div>
    ),
  },
];
