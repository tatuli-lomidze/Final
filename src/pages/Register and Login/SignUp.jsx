import React from 'react';
import SignUpForm from '../../components/Register and Login/SignUpForm';
import { Typography } from 'antd';

const { Title } = Typography;

const SignUp = () => {
  return (
    <div>
      <Title style={{ fontFamily:"cursive",fontWeight:'600', fontSize:'2.5rem', textAlign:'center', marginTop:'20px'}} level={1}>Sign Up</Title>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
