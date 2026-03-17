import apiClient from "../api/client";
import type { User,UserResponse,UpdateUserData,CreateUserData } from "../types/user";

interface getUsersParams {
    page?:number;
    search?:string;
    limit?:number;
}

export const userService = {
    getAll: (params:getUsersParams={}):Promise<UserResponse>=>{
        return apiClient.get('/users',{params})
    },
    getById :(id:number):Promise<User>=>{
        return apiClient.get(`/users/${id}`)
    },
    delete :(id:number):Promise<{ message: string }>=>{
        return apiClient.delete(`/users/${id}`)
    },
    update :(id:number, data:UpdateUserData ):Promise<User>=>{
        return apiClient.put(`/users/${id}`,data)
    },
    create:(data:CreateUserData):Promise<User>=>{
        return apiClient.post(`/users`,data)
    }
}