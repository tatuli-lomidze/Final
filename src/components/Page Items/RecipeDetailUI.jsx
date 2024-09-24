import React, { useState } from 'react';
import { Card, Typography, Collapse, Space } from 'antd';
import { ClockCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const RecipeDetailUI = ({ recipe }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    maxWidth: '800px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease-out',
    margin: '20px auto',
  };

  const imgStyle = {
    display: 'block',
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    transition: 'transform 0.3s ease-out',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '15px',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '15px',
  };

  return (
    <Card
      hoverable
      style={cardStyle}
      bodyStyle={{
        padding: '20px',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Title style={titleStyle} level={2}>{recipe.name}</Title>
      <img
        src={recipe.thumbnail_url}
        alt={recipe.name}
        style={imgStyle}
      />
      <Paragraph style={paragraphStyle}>{recipe.description}</Paragraph>
      {recipe.original_video_url && (
        <div style={{ marginBottom: '20px' }}>
          <video controls style={{ width: '100%', borderRadius: '8px' }}>
            <source src={recipe.original_video_url} type="video/mp4" />
            <track
              kind="captions"
              srcLang="en"
              src=""
              label="English"
              default
            />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <Title level={3} style={titleStyle}>Instructions:</Title>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}><Paragraph style={paragraphStyle}>{instruction.display_text}</Paragraph></li>
        ))}
      </ol>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Space align="baseline">
          <ClockCircleOutlined />
          <Paragraph style={paragraphStyle}>Total Time: {recipe.total_time_minutes} minutes</Paragraph>
        </Space>
        <Space align="baseline">
          <ClockCircleOutlined />
          <Paragraph style={paragraphStyle}>Prep Time: {recipe.prep_time_minutes} minutes</Paragraph>
        </Space>
        <Space align="baseline">
          <ClockCircleOutlined />
          <Paragraph style={paragraphStyle}>Cook Time: {recipe.cook_time_minutes} minutes</Paragraph>
        </Space>
      </Space>
      <Collapse bordered={false} style={{ marginTop: '20px' }}>
        <Panel header={<Space align="center"><InfoCircleOutlined />Nutrition Info</Space>} key="1">
          {recipe.nutrition ? (
            <div>
              <Paragraph style={paragraphStyle}>Calories: {recipe.nutrition.calories}</Paragraph>
            </div>
          ) : (
            <Paragraph style={paragraphStyle}>No nutrition information available.</Paragraph>
          )}
        </Panel>
      </Collapse>
    </Card>
  );
};

export default RecipeDetailUI;
