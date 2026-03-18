// import { useEffect } from "react";
import StatusView from "../../common/StatusView";
import ReusablePagination from "../../components/ReusablePagination/ReusablePagination";
import ReusableTable from "../../components/ReusableTable/ReusableTable";
import { useUsers } from "../../hooks/useUsers";
import type { User } from "../../types/user";
import { UsersColumn } from "./UsersColumn";

const UserListPage = () => {
  const {
    error,
    loading,
    // deleteUser,
    // editUser,
    fetchUser,
    page,
    // search,
    setPage,
    // setSearch,
    totalPages,
    users,
  } = useUsers();

  // useEffect(()=>{console.log(users)},[users])
  // if (loading)
  //   return (
  //     <div className="flex items-center justify-center h-64">
  //       <div className="animate-spin h-12 w-12 rounded-full border-b-2 border-indigo-600 "></div>
  //     </div>
  //   );

  if (error) {
    return (
      <StatusView
        type="error"
        message="Could not connect to the server.Please make sure the API is running, amigo!!"
        onRetry={fetchUser}
      />
    );
  }

  return (
    <div>
      <h1>UserListPage</h1>
      <>
        <ReusableTable columns={UsersColumn} data={users} loading={loading} />
        {!loading && users.length === 0 && (
          <StatusView
            type="empty"
            message="It looks a bit quiet here...... No products have been added yet."
          />
        )}
      </>
      <ReusablePagination
        page={page}
        setPage={setPage}
        totalPage={totalPages}
      />
    </div>
  );
};

export default UserListPage;
