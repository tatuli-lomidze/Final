import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { handleAuth } from '../../api/auth';
import authActions from '../../constants/authActions';
import { useNavigate } from 'react-router-dom';
import routes from '../../constants/routes';
import { Spin } from 'antd';
import './Form.scss'


const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    userName: Yup.string()
      .min(3, 'Username must be at least 3 characters')
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required')
  });

  const initialValues = {
    userName: '',
    email: '',
    password: ''
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setLoading(true);
    setError('');

    handleAuth(authActions.signUp, values)
      .then(data => {
        console.log('Registration successful:', data);
        navigate(routes.signIn, { state: { success: true } });
        setError('');
      })
      .catch(err => {
        console.error('Registration error:', err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className='form-wrapper'>
          {loading && <Spin tip="Loading..." />}
          <div>
            <label htmlFor="userName">{}</label>
            <Field placeholder="Username" type="text" name="userName" className="input-element" />
            <ErrorMessage name="userName" component="div" style={{ color: 'red' }} />
          </div>
          <div>
            <label htmlFor="email">{}</label>
            <Field placeholder="Email" type="email" name="email" className="input-element "/>
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </div>
          <div>
            <label htmlFor="password">{}</label>
            <Field placeholder="Password" type="password" name="password" className="input-element "/>
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
          </div>
          {error && <h2 style={{ color: 'red' }}>{error}</h2>}
          <button className='form-btn' type="submit" disabled={isSubmitting || loading}>
            {loading ? <Spin size="small" /> : 'Sign Up'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
