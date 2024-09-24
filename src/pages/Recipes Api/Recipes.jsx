import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useFetch from '../../hooks/useFetch';
import RecipeItem from '../../components/Page Items/Recipe Item/RecipeItem';
import { Spin, Alert } from 'antd';
import './Recipes.scss';

const Recipes = () => {
  const { data, error, isLoading } = useFetch(
    'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes'
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    if (data && data.results) {
      setFilteredRecipes(data.results); 
    }
  }, [data]);

  const handleSearch = (value) => {
    setSearchQuery(value);
    filterRecipes(value);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
    filterRecipes(value);
  };

  const filterRecipes = (query) => {
    if (!query.trim()) {
      setFilteredRecipes(data.results); 
    } else {
      const filtered = data.results.filter((recipe) =>
        recipe.name.toLowerCase().includes(query.trim().toLowerCase())
      );
      setFilteredRecipes(filtered);
    }
  };

  if (isLoading) {
    return <Spin tip="Loading..." />;
  }

  if (error) {
    return <Alert message="Error" description={error} type="error" />;
  }

  if (!data || !data.results || data.results.length === 0) {
    return <div>No recipes found</div>;
  }

  return (
    <div className="recipes-container">
      <h1>Recipes</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search recipes"
          value={searchQuery}
          onChange={handleInputChange}
          className="search-input"
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="recipes-list"
      >
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card-wrapper">
              <RecipeItem recipe={recipe} />
            </div>
          ))
        ) : (
          <div>No recipes found</div>
        )}
      </motion.div>
    </div>
  );
};

export default Recipes;
