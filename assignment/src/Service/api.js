import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'http://localhost:8080';

export const getProducts = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}

export const addProduct = async (user) => {
    return await axios.post(`${usersUrl}/add`, user);
}

export const deleteProduct = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}
export const getProductById = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}


export const editProduct = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}   