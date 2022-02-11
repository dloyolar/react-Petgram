import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';

export const UserForm = ({ onSubmit }) => {
  const initialState = {
    email: '',
    password: '',
  };
  const { value, onChange } = useForm(initialState);

  const { email, password } = value;

  console.log(value);

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={email}
        placeholder="Email"
        name="email"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onChange}
        name="password"
      />
      <button>Sign in</button>
    </form>
  );
};
