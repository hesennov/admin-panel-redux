import { authLogin } from "@/store/auth/authSlice";
import type { RootState, AppDispatch } from "@/store";
import { logOut } from "@/store/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { error, loading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await dispatch(authLogin(form)).unwrap();
    console.log(form);
    navigate("/");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          {" "}
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="email"
            className="border p-2 rounded"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            placeholder="password"
            onChange={handleChange}
            className="p-3 border rounded"
          />
          <button type="submit" disabled={loading}>
            Login
          </button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      </div>
    </>
  );
}
