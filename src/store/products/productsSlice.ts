import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productServices } from "@/services/productService";
import type { Product, UpdateProductData } from "@/types/product";
interface ParamsProps {
  page?: number;
  search?: string;
  limit?: number;
}
interface InitalState {
  data: Product[];
  error: string | null;
  loading: boolean;
  search: string;
  page: number;
  totalPage: number;
  selectedProduct:Product | null;
  deletedId:number |null;
}

export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async (params: ParamsProps, { rejectWithValue }) => {
    try {
      const res = await productServices.getAll(params);
      // console.log(res)
      return res;
    } catch (error: any) {
      return rejectWithValue("hata");
    }
  },
);
export const deleteProducts = createAsyncThunk(
  "products/delete",
  async (id: number, { rejectWithValue }) => {
    try {
      await productServices.delete(id);
      return id;
    } catch (error) {
      return rejectWithValue(error as string);
    }
  },
);

export const editProducts = createAsyncThunk(
  "products/edit",
  async ({ id, data }: { id: number; data: UpdateProductData }, { rejectWithValue }) => {
    try {
      const response = await productServices.edit(id, data);
      return response;
    } catch (error) {
      return rejectWithValue(error as string);
    }
  },
);
const initialState: InitalState = {
  data: [],
  error: null,
  loading: false,
  totalPage: 1,
  page: 1,
  search: "",
  selectedProduct:null,
  deletedId:null
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    setSearch: (state, action) => {
      ((state.search = action.payload), (state.page = 1));
    },
    setSelectedProduct :(state,action)=>{
      state.selectedProduct = action.payload
    },
    setDeletedId :(state,action)=>{
      state.deletedId = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.loading = false;
        state.totalPage = action.payload.totalPages;
        console.log(action.payload.data, "fetchproducts/fulfiled");

        console.log(action.payload.data, "fetchproducts/fulfiled");
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteProducts.fulfilled, (state, action) => {
        state.data = state.data.filter((p) => p.id !== action.payload);
        state.deletedId =null
      })
      .addCase(editProducts.fulfilled, (state, action) => {
        const editIndex = state.data.findIndex((p) => p.id === action.payload.id,);
       state.data[editIndex] = action.payload
       state.selectedProduct=null
      });
  },
});

export const { setPage, setSearch,setSelectedProduct,setDeletedId } = productSlice.actions;
export default productSlice.reducer;
