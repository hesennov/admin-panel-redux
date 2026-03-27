import { useProducts } from "../../hooks/useProducts";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import { useEffect, useState } from "react";
// import {fetchProducts} from '../../store/products/productsSlice'
import { fetchProducts } from "../../store/products/productsSlice";
import ReusableTable from "../../components/ReusableTable/ReusableTable";
import { productsColum } from "./productsColumn";
import type { Product } from "../../types/product";
import ReusablePagination from "../../components/ReusablePagination/ReusablePagination";
import StatusView from "../../common/StatusView";
export default function ProductListPage() {
  const dispatch = useDispatch<AppDispatch>();
  const {
    error,
    loading,
    data,
    page,
    search,
    totalPage,
    setPage,
    handleEditOpenModal,
    handleOpenDeleteModal,
    deleteProducts,
    deletedId,
    editProducts,
    fetchProducts,
    handleCloseAllModal,
    selectedProduct,
    setSearch,
  } = useProducts();

  
  const column = productsColum({
    onDelete: handleOpenDeleteModal,
    onEdit: handleEditOpenModal,
  });

  if (error) {
    return (
      <StatusView
        type="error"
        message="Could not connect to the server.Please make sure the API is running, amigo!!"
      />
    );
  }
  return (
    <div>
      <>
        <ReusableTable columns={column} data={data} loading={loading} />
        {!loading && data.length === 0 && (
          <StatusView
            type="empty"
            message="It looks a bit quiet here...... No products have been added yet"
          />
        )}
      </>
      <ReusablePagination page={page} setPage={setPage} totalPage={totalPage} />
    </div>
  );
}
