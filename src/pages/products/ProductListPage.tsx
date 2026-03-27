import { useProducts } from "@/hooks/useProducts";
import ReusableTable from "@/components/ReusableTable/ReusableTable";
import { productsColum } from "@/pages/products/productsColumn";
import ReusablePagination from "@/components/ReusablePagination/ReusablePagination";
import StatusView from "@/common/StatusView";
import ReusableModal from "@/components/ReusableModal/ReusableModal";
import ProductEditForm from "@/pages/products/ProductEditForm";
import { MSG_DATA_EMPTY } from "@/constants/messages/messages";
import { MSG_ERROR } from "@/constants/messages/messages";
export default function ProductListPage() {
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
        message={MSG_ERROR}
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
            message={MSG_DATA_EMPTY}
          />
        )}
      </>
      <ReusablePagination page={page} setPage={setPage} totalPage={totalPage} />
      <ReusableModal isOpen={deletedId !== null} onClose={handleCloseAllModal}>
        <h1>Are you sure deleted This Product</h1>
        <div className="flex justify-end gap-1 mt-4">
          <button className="px-4 py-2 rounded bg-gray-500 text-white" onClick={handleCloseAllModal}>
            Cancel
          </button>
          <button className="px-4 py-2 rounded bg-red-500 text-white" onClick={()=>deletedId && deleteProducts(deletedId)}>
            Delete
          </button>
        </div>
      </ReusableModal>
      <ReusableModal isOpen={!!selectedProduct} onClose={handleCloseAllModal}>
        Edit Modal
        {selectedProduct &&(

            <ProductEditForm product={selectedProduct} onClose={handleCloseAllModal} onSave={editProducts}/>
        )}
      </ReusableModal>
    </div>
  );
}
