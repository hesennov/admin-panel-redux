import { useProducts } from "../../hooks/useProducts"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../../store"
import { useEffect } from "react"
// import {fetchProducts} from '../../store/products/productsSlice'
import { fetchProducts } from "../../store/products/productsSlice"
export default function ProductListPage (){
    const dispatch = useDispatch<AppDispatch>()
    const {error,loading,data,page,search,totalPage} = useProducts()
useEffect(()=>{
    dispatch(fetchProducts({page,search,limit:10}))
},[])
    return(
        <div><h1>Product List Page</h1>{data.map((p)=>(
            <p>{p.title}</p>
        ))}</div>
    )
}