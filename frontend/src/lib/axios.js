import axios from "axios";

//In production, the frontend and backend are served from the same origin.
//In development, the frontend runs on localhost:5173 and the backend on localhost:5000.
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;