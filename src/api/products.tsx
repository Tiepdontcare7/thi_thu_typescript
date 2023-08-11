import { IProducts } from "../types"
import instance from "./config"



export const getAll = () => {
    return instance.get('/products')
}
export const getOne = (id: number | string) => {
    return instance.get(`/products/${id}`)
}

export const addP = (obj: object | IProducts) => {
    return instance.post(`/products/`, obj)
}

export const deleteP = (id: number | string) => {
    return instance.delete(`/products/${id}`)
}

export const updateP = (id: number | string | undefined, obj: object) => {
    return instance.put(`/products/${id}`, obj)
}