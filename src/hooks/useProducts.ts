import { useDispatch,useSelector } from "react-redux";
import type { AppDispatch,RootState } from "../store";
export function useProducts (){
    const dispatch = useDispatch<AppDispatch>()
    const {loading,error,data,page,search,totalPage} = useSelector((state:RootState)=>state.products)
    return{loading,error,data,page,search,totalPage}
}