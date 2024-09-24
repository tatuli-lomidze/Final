import React from 'react';
import { Layout } from 'antd';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import './Footer.scss'; 

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter className="footer-container">
      <div className="footer-content">
        <h3>TASTY APP</h3>
        <p> Tbilisi, Georgia</p>
        <p>
          <PhoneOutlined /> +995 599 066633 | <MailOutlined /> contact@tastyapp.com
        </p>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FacebookOutlined className="social-icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramOutlined className="social-icon" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <TwitterOutlined className="social-icon" />
        </a>
      </div>
      <div className="copyright">
        TASTY App ©2024 Created by Tamar Lomidze
      </div>
    </AntFooter>
  );
};

export default Footer;
