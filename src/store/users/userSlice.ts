import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { User, UpdateUserData } from "../../types/user";
import { userService } from "../../services/userService";

interface UsersState {
  users: User[];
  loading: boolean;
  error: null | string;
  page: number;
  totalPages: number;
  search: string;
  selectedId : number |null;
  editingUser: User | null
}

export const fetchUser = createAsyncThunk(
  "users/fetchAll",
  async (params: { page: number; search: string }, { rejectWithValue }) => {
    try {
      const response = await userService.getAll({ ...params, limit: 10 });
      return response;
    } catch (error) {
      return rejectWithValue("Users not uploaded");
    }
  },
);

export const deleteUser = createAsyncThunk(
  "users/delete",
  async (id: number, { rejectWithValue }) => {
    try {
        await userService.delete(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const editUser = createAsyncThunk(
  "users/edit",
  async (
    { id, data }: { id:number, data: UpdateUserData },
    { rejectWithValue },
  ) => {
    try {
      const response = await userService.update(id, data);
      console.log("Updated Responsed", response)
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
  page: 1,
  totalPages: 1,
  search: "",
  selectedId:null,
  editingUser:null
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },

    setSearch: (state, action) => {
      ((state.search = action.payload), (state.page = 1));
    },
    handleCloseModal :(state)=>{
       state.selectedId = null
       state.editingUser = null
      
    },handleOpenModalDeleteModal : (state,action)=>{
      state.selectedId = action.payload
    },handleOpenEditModal :(state,action)=>{
      // const user = state.users.find((u)=>u.id === action.payload.id)
      // if(user) state.editingUser = user
      state.editingUser = action.payload
      console.log(action.payload.id, action.payload);
      //bize gelen user onsuzda deyisilecek olan user olduqu ucun onu elece edeitingUsere  beraber edirik 
      
    }
  },

  extraReducers: (builder) => {
    builder
    .addCase(fetchUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(fetchUser.fulfilled,(state,action)=>{
      // console.log("api response : ", action.payload) //consol
        state.loading = false
        state.users = action.payload.data
        state.totalPages = action.payload.totalPages
    }).addCase(fetchUser.rejected,(state,action)=>{
        state.loading = false
        state.error = action.payload as string
        console.log(`${state.error} erorororor`)
    }).addCase(deleteUser.fulfilled,(state,action)=>{
        state.users = state.users.filter((u)=>u.id !== action.payload)
        state.selectedId = null
    }).addCase(editUser.fulfilled, (state,{payload})=>{
        const index = state.users.findIndex((u)=>u.id ===payload.id)
        if(index !== -1) state.users[index] = payload;
        state.editingUser =null
    })
  },
});

export const {setPage,setSearch,handleCloseModal,handleOpenModalDeleteModal,handleOpenEditModal} = usersSlice.actions
export default usersSlice.reducer;
