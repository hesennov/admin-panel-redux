import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { productServices } from "../../services/productService";

interface ProductSlice {
  products: [];
  loading: boolean;
  error: string | null;
  search: "";
  page: number;
  totalPage: number;
}

const fetchProducts = createAsyncThunk("products/fetchall",async ({page,search}:{page:number,search:string}, {rejectWithValue}) => {
    try{
        const response = await productServices.getAll({page,search,limit:10})
        return response
    }catch(error :any){
        return rejectWithValue(error.message||"Something went wrong")
    }
});

// const productSlice = createSlice({
//     name:"products",
//     initialState:{},
//     reducers:{}
// })
