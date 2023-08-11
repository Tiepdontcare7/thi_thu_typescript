import instance from "./config"



export const getAllUser = () => {
    return instance.get('/users')
}

export const addU = (obj: object) => {
    return instance.post(`/users/`, obj)
}