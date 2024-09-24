import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FavoriteContext } from '../../../context/FavoriteContext';
import { Modal, Button, Typography, Card } from 'antd';
import './RecipeItem.scss';

const { Text } = Typography;

const RecipeItem = ({ recipe }) => {
  const { favorites, addToFavorites } = useContext(FavoriteContext);
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleViewDetails = () => {
    navigate(`/recipes/${recipe.id}`);
  };

  const handleAddToFavorites = () => {
    const isFavorite = favorites.some((fav) => fav.id === recipe.id);
    if (isFavorite) {
      setModalMessage('This recipe is already in your favorites.');
    } else {
      addToFavorites(recipe);
      setModalMessage('Recipe added to favorites successfully.');
    }
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
    setModalMessage('');
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setModalMessage('');
  };

  return (
    <Card
      title={recipe.name}
      hoverable
      className="recipe-card"
      cover={<div className="recipe-image" style={{ backgroundImage: `url(${recipe.thumbnail_url})` }} />}
      actions={[
        <Button key="details" onClick={handleViewDetails}>
          View Details
        </Button>,
        <Button key="favorites" type="primary" danger onClick={handleAddToFavorites}
        >
          Add to Favorites
        </Button>,
      ]}
    >
      <Card.Meta description={recipe.description} />
      <Modal
        title="Notification"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        footer={[
          <Button
           key="ok" type="primary" onClick={handleModalOk} >
            OK
          </Button>,
        ]}
      >
        <Text>{modalMessage}</Text>
      </Modal>
    </Card>
  );
};

export default RecipeItem;
