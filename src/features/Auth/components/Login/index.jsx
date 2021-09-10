import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import LoginForm from '../LoginForm';
import { useDispatch } from 'react-redux';
import { login } from 'features/Auth/authSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useHistory } from 'react-router';
import Loading from 'components/Loading';
import './style.css';

Login.propTypes = {};

function Login(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const resultAction = await dispatch(login(values));
      unwrapResult(resultAction);
      // console.log('resultAction:', resultAction);
      setLoading(false);
      history.push('/animal');
    } catch (error) {
      console.log('Failed to register:', error);
      alert('Invalid ApiKey or secret.');
      setLoading(false);
      history.push('/login');
    }
  };
  return (
    <div>
      {loading && (
        <div className="overlay">
          <Loading />
        </div>
      )}
      <LoginForm onSubmit={handleSubmit} className="form-login-down" />
    </div>
  );
}

export default Login;
