import type { Column } from "@/types/reusableTable";
import type { User } from "@/types/user";

export const UsersColumn = (actions: {
  onDelete?: (id: number) => void;
  onEdit?: (data: User) => void;
}): Column<User>[] => [
  { label: "Name", key: "name" },
  { label: "Surname", key: "surname" },
  { label: "Email", key: "email" },
  {
    label: "Status",
    key: "active",
    render: (value) => {
      return (
        <span className={value ? "text-green-500" : "text-red-500"}>
          {value ? "Active" : "Deactive"}
        </span>
      );
    },
  },
  {
    label: "Actions",
    key: "id",
    render: (_, row) => (
      <div className="flex gap-2">
        {actions.onDelete && (
          <button
            className="px-3 py-1 bg-red-500 rounded text-white"
            onClick={() => actions.onDelete?.(row.id)}
          >
            Delete
          </button>
        )}
        {actions.onEdit && (
          <button
            className="px-3 py-1 bg-yellow-500 rounded"
            onClick={() => actions.onEdit?.(row)}
          >
            Edit
          </button>
        )}
      </div>
    ),
  },
];
