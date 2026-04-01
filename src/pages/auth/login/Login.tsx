import { authLogin } from "@/store/auth/authSlice";
import type { RootState, AppDispatch } from "@/store";
// import { logOut } from "@/store/auth/authSlice";
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
    try {
      await dispatch(authLogin(form)).unwrap();
      console.log(form);
      navigate("/");
    } catch {}
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className=" p-10 bg-white border shadow-lg max-w-sm mx-auto mt-20 rounded-2xl">
        <h1 className="font-bold text-2xl mb-4">Admin Panel</h1>
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
{error&& <div className="border border-red-500 bg-red-100 rounded w-full text-red-800 py-1">{error}</div>}
          {" "}
          <div className="email flex flex-col">

          <label className="font-semibold">Email</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="email"
            className="border p-2 rounded"
            />
            </div>
            <div className="password flex flex-col">
          <label className="font-semibold">Password</label>

          <input
            type="password"
            name="password"
            value={form.password}
            placeholder="password"
            onChange={handleChange}
            className="p-3 border rounded"
            />
            </div>
          <button type="submit" disabled={loading} className={`px-4 py-2  rounded hover:opacity-50 active:opacity-100 ${loading?"bg-yellow-500":"bg-[#6C5CE7] text-white"} `}>
            Login
          </button>
        </form>
      </div>
    </>
  );
}
