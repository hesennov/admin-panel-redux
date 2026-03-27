import { Link,Outlet } from "react-router-dom";
import {NAV_ITEMS} from '@/constants/navigation/navigation'
export default function MainLayout(){
    return(
        <div className=" flex">
            <aside className="min-h-screen bg-gray-800 w-64 text-white flex flex-col">
                <h2 className="font-bold text-2xl mb-2">Admin Panel</h2>
                <nav className="flex flex-col gap-1">
                    {NAV_ITEMS.map((items)=>(
                        <Link key={items.path} to={items.path} className="hover:underline">{items.label}</Link>
                    ))}
                  
                </nav>
            </aside>
            <div className="bg-gray-200 p-6 flex-1">
                <Outlet/>
            </div>
        </div>
    )

}