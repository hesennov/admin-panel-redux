import type { AuthResponse, LoginData, RegisterData } from '@/types/auth'
import apiClient from "@/api/client";



export const authService = {
    login:(data:LoginData):Promise<AuthResponse>=>{
        return apiClient.post('/auth/login',data)
    },
    register:(data:RegisterData):Promise<{message:string}>=>{
        return apiClient.post('/auth/register',data)
    }
}