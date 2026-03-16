import { createSlice } from "@reduxjs/toolkit";

interface UsersState {
    data:string[]
}

const initialState :UsersState ={
    data:[]
}
const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{}
})

export default usersSlice.reducer