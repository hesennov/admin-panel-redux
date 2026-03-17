import { deleteUser } from "../../store/users/userSlice";
import type { Column } from "../../types/reusableTable";
import type { User } from "../../types/user";

export  const UsersColumn: Column<User>[] = [
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
      render: (_, row) => {
        return (
          <button
            className="px-2 py-1 bg-red-500 text-white border rounded"
            onClick={() => deleteUser(row.id)}
          >
            Delete
          </button>
        );
      },
    },
  ];
