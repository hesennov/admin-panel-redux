import { BrowserRouter,Routes,Route } from "react-router-dom";
import  Sidebar  from "./layouts/SideBar";
import UserListPage from './pages/users/UserListPage'
import NotFoundPage from "./common/NotFound";
import ProductListPage from "./pages/products/ProductListPage";
// import ProductListPage from './pages/products/ProductListPage'

export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route element={<Sidebar/>}>
                <Route path="/users" element={<UserListPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
                <Route path="/products" element={<ProductListPage/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}