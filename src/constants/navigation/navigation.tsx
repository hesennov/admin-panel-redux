import {  lazy} from 'react'
import MainLayout from '@/layouts/MainLayout'
import NotFound from '@/common/NotFound'
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute'
import { Navigate } from 'react-router-dom'
import Login from '@/pages/auth/login/Login'
import Register from '@/pages/auth/register/Register'


const UserListPage = lazy(()=>import('@/pages/users/UserListPage'))
const ProductListPage = lazy(()=>import('@/pages/products/ProductListPage'))

const PATH_USERS = '/users'
const PATH_PRODUCTS = '/products'
const PATH_LOGIN = '/login'
const PATH_REGISTER = '/register'
export const PAGE_USERS = {
    label:'Users',
    path:PATH_USERS,
    element: <UserListPage/>
}

export const PAGE_PRODUCTS ={
    label :"Products",
    path:PATH_PRODUCTS,
    element:<ProductListPage/>
}
export const LOGIN_PAGE = {
    label:'Login',
    path:PATH_LOGIN,
    element:<Login/>

}

export const REGISTER_PAGE = {
    label:'Register',
    path:PATH_REGISTER,
    element:<Register/>
}

//for side bar
export const NAV_ITEMS = [PAGE_USERS,PAGE_PRODUCTS]
export const AUTH_PAGES = [LOGIN_PAGE,REGISTER_PAGE]
export const PAGES = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      
      // 🔓 PUBLIC ROUTES
      ...AUTH_PAGES,

      // 🔐 PROTECTED ROUTES
      {
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <Navigate to="/users" replace />
          },
          ...NAV_ITEMS
        ]
      },

      // ❌ NOT FOUND
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]
// export const PAGES =[
//     {
//         path:'/',
//         element:<MainLayout/>,
//         children:[

//             ...NAV_ITEMS,
//             {path:'*',element:<NotFound/>}
//         ]
//     }
// ]