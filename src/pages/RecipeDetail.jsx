import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import RecipeDetailUI from '../components/Page Items/RecipeDetailUI';
import { Spin, Alert } from 'antd';

const RecipeDetail = () => {
  const { id } = useParams();
  const { data: recipe, error, isLoading } = useFetch(`https://tasty.p.rapidapi.com/recipes/get-more-info?id=${id}`);

  if (isLoading) {
    return <Spin tip="Loading..." />;
  }

  if (error) {
    return <Alert message="Error" description={error} type="error" />;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      {recipe ? (
        <RecipeDetailUI recipe={recipe} />
      ) : (
        <div>No recipe details found</div>
      )}
    </div>
  );
};

export default RecipeDetail;
