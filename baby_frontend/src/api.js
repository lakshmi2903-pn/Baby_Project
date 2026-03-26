import axios from "axios";

// 1. CHANGE '127.0.0.1:8000' TO YOUR LIVE LINK
const API = axios.create({
  baseURL: "https://lakshu.pythonanywhere.com/api/",
});

// These will now automatically talk to PythonAnywhere
export const fetchProducts = () => API.get("products/");
export const fetchCategories = () => API.get("categories/");

// 2. EXPORT 'API' SO YOU CAN USE IT FOR LOGIN/REGISTER
export default API;
