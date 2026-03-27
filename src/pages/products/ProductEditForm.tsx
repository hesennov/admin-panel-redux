import type { Product, UpdateProductData } from "@/types/product";
import { useState } from "react";
interface EditProps {
  product: Product;
  onClose: () => void;
  onSave: (id: number, data: UpdateProductData) => void;
}

export default function ProductEditForm({
  product,
  onSave,
  onClose,
}: EditProps) {
  const [form, setForm] = useState({
    title: product.title,
    price: product.price,
    stock: product.stock,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    onSave(product.id, form);
  };
  return (
    <div className="flex flex-col gap-2">
      <h1>editForm</h1>
      <input
        type="text"
        name="title"
        value={form.title}
        placeholder="Title"
        className="border p-2 rounded"
        onChange={handleChange}
      />
        <input
          type="text"
          name="price"
          value={form.price}
          placeholder="Price"
          className="border p-2 rounded"
          onChange={handleChange}
        />
      <input
        type="text"
        name="stock"
        value={form.stock}
        placeholder="Stock"
        className="border p-2 rounded"
        onChange={handleChange}
      />

      <div className="flex gap-1 justify-end ">
        <button className="px-4 py-2 rounded border text-white bg-gray-500" onClick={()=>onClose()}>
          Cancel
        </button>
        <button className="px-4 py-2 rounded   bg-yellow-500" onClick={()=>handleSave()}>
          Edit
        </button>
      </div>
    </div>
  );
}
