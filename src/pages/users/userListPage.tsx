// import { useEffect } from "react";
import StatusView from "@/common/StatusView";
import ReusableModal from "@/components/ReusableModal/ReusableModal";
import ReusablePagination from "@/components/ReusablePagination/ReusablePagination";
import ReusableTable from "@/components/ReusableTable/ReusableTable";
import { useUsers } from "@/hooks/useUsers";
// import type { User } from "@/types/user";
import { UsersColumn } from "@/pages/users/UsersColumn";
import UserEditForm from "@/pages/users/UserEditForm";
import { useMemo } from "react";
const UserListPage = () => {
  const {
    error,
    loading,
    deleteUser,
    editUser,
    fetchUser,
    page,
    // search,
    setPage,
    // setSearch,
    totalPages,
    users,
    selectedId,
    editingUser,
    handleCloseModal,
    handleOpenModalDeleteModal,
    handleOpenEditModal,
  } = useUsers();

  // if (loading)
  //   return (
  //     <div className="flex items-center justify-center h-64">
  //       <div className="animate-spin h-12 w-12 rounded-full border-b-2 border-indigo-600 "></div>
  //     </div>
  //   );
  // }

  const columns = useMemo(
    () =>
      UsersColumn({
        onDelete: handleOpenModalDeleteModal,
        onEdit: handleOpenEditModal,
      }),
    [handleOpenEditModal, handleOpenModalDeleteModal],
  );

  if (error) {
    return (
      <StatusView
        type="error"
        message="Could not connect to the server.Please make sure the API is running, amigo!!"
        onRetry={fetchUser}
      />
    );
  }
  console.log("RENDER USER LIST");
  console.log("LOADING:", loading);
  return (
    <div>
      <>
        <ReusableTable columns={columns} data={users} loading={loading} />
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
      {/* modal for delete */}
      <ReusableModal isOpen={selectedId !== null} onClose={handleCloseModal}>
        <div>
          <h1 className="font-bold text-xl text-center">Delete user</h1>
          <p className="font-semibold">Are you sure to delete this user? </p>
          <div className="buttons flex justify-end mt-3 gap-1">
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded hover:opacity-50 active:opacity-100"
              onClick={() => handleCloseModal()}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:opacity-50 active:opacity-100"
              onClick={() => selectedId && deleteUser(selectedId)}
            >
              Delete
            </button>
          </div>
        </div>
      </ReusableModal>

      {/* modal for edit */}
      <ReusableModal onClose={handleCloseModal} isOpen={!!editingUser}>
        {" "}
        Editing User {editingUser?.name}-{editingUser?.surname}
        {editingUser && (
          <UserEditForm
            onClose={handleCloseModal}
            user={editingUser}
            onSave={editUser}
          />
        )}
      </ReusableModal>
    </div>
  );
};

export default UserListPage;
