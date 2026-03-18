import { Link, } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function SideBar(){
    return(
        <div className=" flex">
            <aside className="min-h-screen bg-gray-800 w-64 text-white flex flex-col">
                <h2>Admin Panel</h2>
                <nav className="flex flex-col gap-1">
                    <Link to={'/users'}>Users</Link>
                    <Link to={'/products'}>Products</Link>
                    <Link to={'/orders'}>Orders</Link>
                    <Link to={'/null'}>null</Link>
                </nav>
            </aside>
            <div className="bg-gray-200 p-6 flex-1">
                <Outlet/>
            </div>
        </div>
    )

}