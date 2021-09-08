import React from 'react';
// import PropTypes from 'prop-types';
import LoginForm from '../LoginForm';
import { useDispatch } from 'react-redux';
import { login } from 'features/Auth/authSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useHistory } from 'react-router';

Login.propTypes = {};

function Login(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = async (values) => {
    try {
      const resultAction = dispatch(login(values));
      unwrapResult(resultAction);
      // console.log('resultAction:', resultAction);
      history.push('/animal');
    } catch (error) {
      console.log('Failed to register:', error);
      alert('Invalid ApiKey or secret.');
    }
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
