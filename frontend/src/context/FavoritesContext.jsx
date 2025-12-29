import { createContext, useContext, useEffect, useState } from "react";
import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from "../services/favorites";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites()
      .then((res) => setFavorites(res.data))
      .catch(() => setFavorites([]));
  }, []);

  const add = async (item) => {
    const res = await addFavorite(item);
    setFavorites(res.data);
  };

  const remove = async (id) => {
    const res = await removeFavorite(id);
    setFavorites(res.data);
  };

  // 🔑 THIS IS WHAT YOU WERE MISSING
  const isFavorite = (itemId) => {
    return favorites.some((f) => f.itemId === itemId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, add, remove, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
