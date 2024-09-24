import React from 'react';
import { useLocation } from 'react-router-dom';
import SignInForm from '../../components/Register and Login/SignInForm';
import { Typography } from 'antd';

const { Title } = Typography;

const SignIn = () => {
  const location = useLocation();

  return (
    <div>
      <Title style={{ fontFamily:"cursive",fontWeight:'600', fontSize:'2.5rem', textAlign:'center', marginTop:'20px'}} level={1}>Sign In</Title>
      {location.state?.success && <p>Successfully registered!</p>}
      <SignInForm />
    </div>
  );
};

export default SignIn;
