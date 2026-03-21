import type { UpdateUserData, User } from "../types/user";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import {
  fetchUser,
  deleteUser,
  editUser,
  setPage,
  setSearch,
} from "../store/users/userSlice";
import { useCallback, useEffect, useState } from "react";
export function useUsers() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, page, search, totalPages, users } = useSelector(
    (state: RootState) => state.users,
  );
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleOpenDeleteModal = (id: number) => {
    setSelectedId(id);
  };
  const handleCloseModal = () => {
    setEditingUser(null);
    setSelectedId(null);
  };

  const handleOpenEditModal = (data: User) => {
    setEditingUser(data);
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
    editUser: (id: number, data: UpdateUserData) =>
    dispatch(editUser({ id, data })),
    fetchUser: () => dispatch(fetchUser({ page, search })),
    handleCloseModal: () => handleCloseModal(),
    handleOpenModalDeleteModal: handleOpenDeleteModalCb,
    handleOpenEditModal: handleOpenEditModalCb,
  };
}
