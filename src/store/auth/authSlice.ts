import type { User } from '@/types/user';
import { authService } from "@/services/authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { LoginData, RegisterData } from "@/types/auth";


// type UserSubset<K extends keyof User> = Pick<User, K>

// type AuthUser = UserSubset<"name" | "email">

type AuthUser = Pick<User,'name'|'email'> //pick means on of list|contents
interface AuthInitalState {
  user: AuthUser | null;
  error: string | null;
  loading: boolean;
  token: string | null;
}

const initialState: AuthInitalState = {
//  user: JSON.parse(localStorage.getItem("user") || "null"),
 user: localStorage.getItem("user") 
    ? JSON.parse(localStorage.getItem("user") as string) 
    : null,
  error: null as string | null,
  loading: false,
  token: localStorage.getItem("token") ?? null,
};

export const authLogin = createAsyncThunk(
  "auth/login",
  async (credentials: LoginData, { rejectWithValue }) => {
    try {
      const response = await authService.login(credentials);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "hatali  login");
    }
  },
);
export const authRegister = createAsyncThunk(
  "auth/register",
  async (credentials: RegisterData, { rejectWithValue }) => {
    try {
      const res = await authService.register(credentials);
      return res;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Register failed",
      );
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.user;
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(authRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authRegister.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(authRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;

