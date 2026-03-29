import { useState } from "react"
import { Navigate,Outlet } from "react-router-dom"
export default function ProtectedRoute(){
    const [ login,setLogin] = useState<boolean>(false)
    const handleLogin = ()=>{
        setLogin((l)=>!l)
    } 
    return(<>
    <button className="px-4 py-2 bg-blue-500 rounded" onClick={handleLogin}>{login? "Log Out":"Login"} </button>

{/* {login? <Outlet/>:<Navigate to='/login' replace/>} */}
{login && <Outlet/>}
    </>
    )
}