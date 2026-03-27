import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import {
  fetchProducts,
  editProducts,
  deleteProducts,
  setPage,
  setSearch,
  setDeletedId,setSelectedProduct
} from "../store/products/productsSlice";
import { useEffect } from "react";
import type { Product, UpdateProductData } from "../types/product";
export function useProducts() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, data, page, search, totalPage, deletedId,selectedProduct } = useSelector(
    (state: RootState) => state.products,
  );

  useEffect(() => {
    dispatch(fetchProducts({ page, search, limit: 10 }));
  }, [page, search]);

  const handleOpenDeleteModal = (id: number) => {
    dispatch(setDeletedId(id));
  };
  const handleEditOpenModal = (data: Product) => {
   dispatch(setSelectedProduct(data));
  };
  const handleCloseAllModal = ()=>{
    dispatch(setSelectedProduct(null)),
    dispatch(setDeletedId(null))
  }


  return {
    loading,
    error,
    data,
    page,
    search,
    totalPage,
    selectedProduct,
    deletedId,
    setPage: (p: number) => dispatch(setPage(p)),
    setSearch:(s:string)=> dispatch(setSearch(s)),
    handleOpenDeleteModal:(id:number) =>handleOpenDeleteModal(id),
    handleEditOpenModal :(data:Product)=>handleEditOpenModal(data),
    handleCloseAllModal:()=>handleCloseAllModal(),
    fetchProducts:()=> dispatch(fetchProducts({page,search,limit:10})),
    editProducts:(id:number,data:UpdateProductData)=>dispatch(editProducts({id,data})), //edit
    deleteProducts:(id:number)=>dispatch(deleteProducts(id)), //delete 
  };
}
