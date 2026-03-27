import { lazy} from 'react'
import MainLayout from '@/layouts/MainLayout'
import NotFound from '@/common/NotFound'


const UserListPage = lazy(()=>import('@/pages/users/UserListPage'))
const ProductListPage = lazy(()=>import('@/pages/products/ProductListPage'))

const PATH_USERS = '/users'
const PATH_PRODUCTS = '/products'

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
//for side bar
export const NAV_ITEMS = [PAGE_USERS,PAGE_PRODUCTS]


export const PAGES =[
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            ...NAV_ITEMS,
            {path:'*',element:<NotFound/>}
        ]
    }
]