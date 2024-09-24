import React, { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext';
import FavoriteRecipeItem from '../components/Page Items/FavoriteRecipeItem';
import { Typography, List } from 'antd';

const { Title } = Typography;

const FavoriteRecipes = () => {
  const { favorites, removeFromFavorites } = useContext(FavoriteContext);

  const handleDelete = (recipe) => {
    removeFromFavorites(recipe.id);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>Favorite Recipes</Title>
      <List
        itemLayout="horizontal"
        dataSource={favorites}
        renderItem={(recipe) => (
          <FavoriteRecipeItem recipe={recipe} onDelete={handleDelete} />
        )}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      />
    </div>
  );
};

export default FavoriteRecipes;
