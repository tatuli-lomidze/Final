import React, { useState } from 'react';
import { Modal, Button, Typography, Card } from 'antd';
import { Link } from 'react-router-dom';

const { Text, Title, Paragraph } = Typography;

const FavoriteRecipeItem = ({ recipe, onDelete }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    onDelete(recipe);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Card
      hoverable
      style={{
        marginBottom: '20px',
        maxWidth: '500px',
        border: '1px solid #e8e8e8',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        minHeight: '320px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ flex: 1 }}>
        <div style={{ padding: '16px' }}>
          <Title level={3} style={{ marginBottom: '8px' }}>
            {recipe.name}
          </Title>
          <Paragraph ellipsis={{ rows: 3, expandable: true }}>
            {recipe.description}
          </Paragraph>
        </div>
        <img
          src={recipe.thumbnail_url}
          alt={recipe.name}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            transition: 'transform 0.3s ease-out',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            marginBottom: '30px',
          }}
        />
      </div>
      <div>
        <Button
          type="primary"
          onClick={showModal}
          style={{
            borderRadius: '8px',
            marginBottom: '16px',
          }}
        >
          Delete from favorites
        </Button>
        <Link to={`/recipes/${recipe.id}`}>
          <Button
            type="default"
            style={{
              borderRadius: '8px',
              marginBottom: '16px',
              marginLeft: '8px',
            }}
          >
            Details
          </Button>
        </Link>
      </div>
      <Modal
        title="Confirm Delete"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Yes"
        cancelText="No"
      >
        <Text>Are you sure you want to delete {recipe.name}?</Text>
      </Modal>
    </Card>
  );
};

export default FavoriteRecipeItem;
