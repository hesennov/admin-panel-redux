import type { UpdateUserData, User } from "../types/user";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import {
  fetchUser,
  deleteUser,
  editUser,
  setPage,
  setSearch,
  setSelectedId,
  setEditingUser
} from "../store/users/userSlice";
import { useCallback, useEffect } from "react";
export function useUsers() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, page, search, totalPages, users,editingUser,selectedId } = useSelector(
    (state: RootState) => state.users,
  );

  const handleOpenDeleteModal = (id: number) => {
    dispatch(setSelectedId(id));
  };
  const handleCloseModal = () => {
    dispatch(setEditingUser(null));
    dispatch(setSelectedId(null));
  };

  const handleOpenEditModal = (data: User) => {
    dispatch(setEditingUser(data));
  };
  useEffect(() => {
    dispatch(fetchUser({ page, search }));
  }, [page, search]);

  const handleOpenEditModalCb = useCallback(
    (data: User) => handleOpenEditModal(data),
    [dispatch],
  );

  const handleOpenDeleteModalCb = useCallback(
    (id: number) => handleOpenDeleteModal(id),
    [dispatch],
  );

  return {
    loading,
    error,
    page,
    search,
    totalPages,
    users,
    selectedId,
    editingUser,
    setSearch: (s: string) => dispatch(setSearch(s)),
    setPage: (p: number) => dispatch(setPage(p)),
    deleteUser: (id: number) => dispatch(deleteUser(id)),
    editUser: (id: number, data: UpdateUserData) => dispatch(editUser({ id, data })),
    fetchUser: () => dispatch(fetchUser({ page, search })),
    handleCloseModal: () => handleCloseModal(),
    handleOpenModalDeleteModal: handleOpenDeleteModalCb,
    handleOpenEditModal: handleOpenEditModalCb,
  };
}
