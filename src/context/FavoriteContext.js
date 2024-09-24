
import React, { createContext, useState, useEffect } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const addToFavorites = (recipe) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, recipe];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((item) => item.id !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};