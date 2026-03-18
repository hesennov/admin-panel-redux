import { BrowserRouter,Routes,Route } from "react-router-dom";
import  Sidebar  from "./layouts/SideBar";
import UserListPage from './pages/users/userListPage'
// import ProductListPage from './pages/products/ProductListPage'

export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route element={<Sidebar/>}>
                <Route path="/users" element={<UserListPage/>}/>
                {/* <Route element={<ProductListPage/>}/> */}
            </Route>
        </Routes>
        </BrowserRouter>
    )
}