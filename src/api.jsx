import axios from "axios";

const API_URL = "";
export const fetchTodos = () => axios.get(API_URL);
export const addTodo = (todo) => axios.post(API_URL, todo);
export const updateTodo = (id, updateTodo) => 
    axios.put(`${API_URL}/${id}`, updateTodo);
export const deleteTodo = (id) => axios.delete(`${API_URL}/${id}`);