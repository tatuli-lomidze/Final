import React from 'react';
import './NotFound.scss'

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-heading">404</h1>
      <h2 className="not-found-subheading">Page Not Found</h2>
      <p className="not-found-text">Oops! The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
