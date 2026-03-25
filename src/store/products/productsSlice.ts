import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productServices } from "../../services/productService";
import type { Product } from "../../types/product";
interface ParamsProps {
  page?: number;
  search?: string;
  limit?:number
}
interface InitalState {
  data: Product[];
  error: string | null;
  loading: boolean;
  search: string;
  page: number;
  totalPage: number;
}

export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async (params: ParamsProps, { rejectWithValue }) => {
    try {
      const res = await productServices.getAll(params);
      return res;
    } catch (error: any) {
      return rejectWithValue("hata");
    }
  },
);

const initialState : InitalState = {
    data:[],
    error:null,
    loading:false,
    totalPage:1,
    page:1,
    search:"",
}
const productSlice = createSlice({
    name:"product",
    initialState,
    reducers: {
        setPage:(state,{payload})=>{
            state.page = payload
        },
        setSearch :(state,action)=>{
            state.search = action.payload ,
            state.page = 1
        }
    },
    extraReducers :(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchProducts.fulfilled,(state,action)=>{
            state.data =action.payload.data;
            state.loading= false;
            state.totalPage = action.payload.totalPages
        }).addCase(fetchProducts.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload as string
        })
    }
})

export const {setPage,setSearch} = productSlice.actions
export default productSlice.reducer