import type { UpdateUserData } from "../types/user";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import {
  fetchUser,
  deleteUser,
  editUser,
  setPage,
  setSearch,
} from "../store/users/userSlice";
import { useEffect } from "react";
export function useUsers() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, page, search, totalPages, users } = useSelector(
    (state: RootState) => state.users,
  );

  useEffect(() => {
    dispatch(fetchUser({ page, search }));
  }, [page, search]);

  return {
    loading,
    error,
    page,
    search,
    totalPages,
    users,
    setSearch :(s:string)=>dispatch(setSearch(s)),
    setPage:(p:number)=>dispatch(setPage(p)),
    deleteUser:(id:number)=>dispatch(deleteUser(id)),
    editUser:(id:number,data:UpdateUserData) =>dispatch(editUser({id,data})),
    fetchUser:()=>dispatch(fetchUser({page,search}))
  };
}
