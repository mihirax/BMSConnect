import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'http://localhost:5000';

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/users`);
}
export const pUsers = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/art`);
}

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/add`, user);
}
export const paintUser = async (user) => {
    return await axios.post(`${usersUrl}/arts`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/users/${id}`);
}
export const deletepUser = async (id) => {
    return await axios.delete(`${usersUrl}/paint/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/users/${id}`, user)
}
export const editpUser = async (id, user) => {
    return await axios.put(`${usersUrl}/paint/${id}`, user)
}
