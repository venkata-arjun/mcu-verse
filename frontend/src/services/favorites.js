import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  withCredentials: true,
});

export const getFavorites = () => API.get("/favorites");

export const addFavorite = (item) => API.post("/favorites", item);

export const removeFavorite = (itemId) => API.delete(`/favorites/${itemId}`);
