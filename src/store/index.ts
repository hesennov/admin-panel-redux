import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/userSlice"
import productSlice from './products/productsSlice'
import authSlice from '@/store/auth/authSlice'

export const store = configureStore({
    reducer:{
        users:usersReducer,
        products:productSlice,
        auth:authSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch