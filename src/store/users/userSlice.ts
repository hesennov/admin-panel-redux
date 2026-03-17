import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/client";
import type { User, UpdateUserData } from "../../types/user";
import { userService } from "../../services/userServices";

interface UsersState {
  users: User[];
  loading: boolean;
  error: null | null;
  page: number;
  totalPages: number;
  search: string;
}


export const fetchUser = createAsyncThunk( 
    "users/fetchAll",
    async ( params:{page:number,search:string},{rejectWithValue})=>{
        try{
            const response = await userService.getAll({...params,limit:10})
            return response
        }catch(error){
            return rejectWithValue("Users not uploaded")
        }

    })



















const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
  page: 1,
  totalPages: 10,
  search: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
