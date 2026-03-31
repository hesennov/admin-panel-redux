import { Link, Outlet } from "react-router-dom";
import { NAV_ITEMS } from "@/constants/navigation/navigation";
import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function MainLayout() {
  const { user } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    console.log(user?.name);
  }, []);
  return (
    <div className=" flex ">
      <aside className="min-h-screen bg-[#150e48] w-64 text-white flex flex-col px-3 py-4">
        <h2 className="font-bold text-2xl mb-2">Admin Panel</h2>
        <hr className="text-blue-900 " />
        <nav className="flex flex-col gap-4 text-xl mt-4 flex-1">
          {NAV_ITEMS.map((items) => (
            <div className="flex gap-2">
              <div className="mt-1">{items.avatar}</div>
              <Link
                key={items.path}
                to={items.path}
                className="hover:underline"
              >
                {items.label}{" "}
              </Link>
            </div>
          ))}
        </nav>
        <div className="pt-4 border-t border-blue-900">
          <div className="flex items-center gap-2 font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            {user ? `Admin ${user?.name}` : "Login"}
          </div>
        </div>
      </aside>
      <div className="bg-gray-200 p-6 flex-1">
        <Outlet />
      </div>
    </div>
  );
}
// 6C5CE7
// 150e48
