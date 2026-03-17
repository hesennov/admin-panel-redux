// import { useEffect } from "react";
import ReusableTable from "../../components/ReusableTable/ReusableTable";
import { useUsers } from "../../hooks/useUsers";
import type { User } from "../../types/user";
interface Column {
  label: string;
  key: keyof User;
  render?: (value: User[keyof User], row: User) => React.ReactNode;
}

const UserListPage = () => {
  const {
    error,
    loading,
    deleteUser,
    // editUser,
    fetchUser,
    page,
    search,
    setPage,
    setSearch,
    totalPages,
    users,
  } = useUsers();

  const UsersColumn: Column[] = [
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

  // useEffect(()=>{console.log(users)},[users])
  if (loading) return <h1>loading...</h1>;
  if (error) return <h1> Error</h1>;
  return (
    <div>
      <h1>UserListPage</h1>
      {/* <div className="table">
        <table className="table-auto w-full border">
          <thead>
            <tr className="px-4 py-2 border">
              {UsersColumn.map((col) => (
                <th key={String(col.key)}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((row) => (
              <tr key={row.id}>
                {UsersColumn.map((col) => {
                  return (
                    <td
                      key={`${row.id}-${String(col.key)}`}
                      className="px-4 py-2 border"
                    >
                      {" "}
                      {col.render
                        ? col.render(row[col.key], row)
                        : row[col.key]}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      <ReusableTable columns={UsersColumn} data={users}/>
      <div className="buttons flex gap-3">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-2 py-1 border rounded bg-blue-400 disabled:opacity-50"
        >
          prev
        </button>
        <div className="buttons-numbers">
          {Array.from({ length: totalPages }, (_, i) => {
            const pageNumber = i + 1;
            return (
              <button
              key={pageNumber}
              onClick={()=>setPage(pageNumber)}
                className={`px-2 py-1  rounded border ${page === pageNumber ? "bg-blue-600 text-white" : "bg-white"}`}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="px-2 py-1 border rounded bg-blue-400 disabled:opacity-50"
        >
          next
        </button>
      </div>
    </div>
  );
};

export default UserListPage;
