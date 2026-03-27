import apiClient from "@/api/client";
import type {Product, ProductResponse,UpdateProductData } from "@/types/product";

interface GetProductsParams{
    page?:number;
    search?:string;
    limit?:number

}

export const productServices = {

    getAll : (params:GetProductsParams={}):Promise<ProductResponse>=>{
      return apiClient.get("/products",{params})
    },
    getById :(id:number):Promise<Product>=>{
        return apiClient.get(`/products/${id}`)
    },
    delete:(id:number):Promise<{message:string}>=>{ 
        return apiClient.delete(`/products/${id}`)
    },
    edit:(id:number,data:UpdateProductData):Promise<Product>=>{
        return apiClient.put(`/products/${id}`, data)
    },
}