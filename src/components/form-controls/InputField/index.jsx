import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField({ form, name, type, label, placeholder, disabled }) {
  // const {
  //   formState: { errors },
  // } = form;
  // const hasError = !!errors[name];
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange, onBlur, value, name } }) => (
        <input
          type={type}
          label={label}
          disabled={disabled}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className="input"
        />
        // error={hasError}
        // <p>{errors[name]?.message}</p>
      )}
    />
  );
}

export default InputField;
