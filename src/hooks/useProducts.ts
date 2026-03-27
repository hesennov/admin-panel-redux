import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import {
  fetchProducts,
  editProducts,
  deleteProducts,
  setPage,
  setSearch,
} from "../store/products/productsSlice";
import { useEffect, useState } from "react";
import type { Product } from "../types/product";
export function useProducts() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, data, page, search, totalPage, } = useSelector(
    (state: RootState) => state.products,
  );
  const [deletedId, setDeletedId] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    dispatch(fetchProducts({ page, search, limit: 10 }));
  }, [page, search]);

  const handleOpenDeleteModal = (id: number) => {
    setDeletedId(id);
  };
  const handleEditOpenModal = (data: Product) => {
    setSelectedProduct(data);
  };
  const handleCloseAllModal = ()=>{
    setSelectedProduct(null),
    setDeletedId(null)
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
    editProducts:(id:number,data:Product)=>dispatch(editProducts({id,data})), //edit
    deleteProducts:(id:number)=>dispatch(deleteProducts(id)), //delete 
  };
}
