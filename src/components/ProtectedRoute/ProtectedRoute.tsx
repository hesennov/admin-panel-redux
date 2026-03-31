import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import type { RootState } from "@/store"
export default function ProtectedRoute(){
const {token} = useSelector((state:RootState)=>state.auth)

    return(<>
    {/* <button className="px-4 py-2 bg-blue-500 rounded" onClick={handleLogin}>{login? "Log Out":"Login"} </button> */}

{/* {login? <Outlet/>:<Navigate to='/login' replace/>} */}
{token ? <Outlet/>:<Navigate to='/login' replace/>}
    </>
    )
}   