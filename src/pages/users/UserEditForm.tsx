import { useState } from "react";
// import type { UpdateUserData, User } from "../../types/user";
import type { User, UpdateUserData } from "../../types/user";

type Props = {
  user: User;
  onClose: () => void;
  onSave: (id: number, data: UpdateUserData) => void;
};

export default function UserEditForm({ onClose, onSave, user }: Props) {
  const [form, setForm] = useState({
    name: user.name,
    surname: user.surname,
    email: user.email,
    active: user.active,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // setForm((prev)=> ({...prev,[e.target.name]:e.target.value}))
  };

  const handleSubmit = () => {
    onSave(user.id, form);
  };

  return (
    <div className="flex flex-col gap-2">
      <h1> userEditForm</h1>
      <input
        className="border p-2 rounded"
        type="text"
        name="name"
        placeholder="name"
        value={form?.name}
        onChange={handleChange}
      />
      <input
        className="border p-2 rounded"
        type="text"
        name="surname"
        value={form.surname}
        onChange={handleChange}
      />
      <input
        className="border p-2 rounded"
        type="text"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <label className="flex items-center gap-2 cursor-pointer p-2 border rounded hover:bg-gray-50">
        <input
          className="w-4 h-4 text-blue-600"
          type="checkbox"
          name="active"
          checked={form.active}
          onChange={handleChange}
        />
        <span
          className={
            form.active ? "text-green-600 font-medium" : "text-red-500"
          }
        >
          {form.active ? "active" : "inactive"}
        </span>
      </label>
      <div className="flex gap-1">
        <button
          className="px-3 py-1 bg-blue-500 text-white"
          onClick={handleSubmit}
        >
          save
        </button>
        <button className="px-3 py-1 bg-red-500 text-white" onClick={onClose}>
          cancel
        </button>
      </div>
    </div>
  );
}
