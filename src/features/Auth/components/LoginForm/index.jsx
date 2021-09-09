import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import InputField from 'components/form-controls/InputField';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { HiKey } from 'react-icons/hi';
import { RiLock2Fill } from 'react-icons/ri';

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const schema = yup.object().shape({
    apiKey: yup.string().required('Please enter your Api Key.'),
    secret: yup.string().required('Please enter your Secret.'),
  });
  const form = useForm({
    defaultValues: {
      apiKey: '',
      secret: '',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  });

  // const {
  //   formState: { isSubmitting, isSubmitSuccessful },
  // } = form;

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
  };
  return (
    <div className="root">
      <form onSubmit={form.handleSubmit(handleSubmit)} className="login">
        <div className="login-field">
          <RiLock2Fill className="login-icon" />
          <InputField
            type="text"
            name="apiKey"
            className="login-input"
            placeholder="API Key"
            form={form}
            required
          />
        </div>
        <div className="login-field">
          <HiKey className="login-icon" />
          <InputField
            name="secret"
            type="password"
            className="login-input"
            placeholder="Secret"
            form={form}
            required
          />
        </div>
        <button className="login-submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
