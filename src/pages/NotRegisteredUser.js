import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context';

export const NotRegisteredUser = () => {
  const navigate = useNavigate();
  const { login } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate('/');
  };

  return (
    <>
      <h1>Not register user</h1>
      <form onSubmit={handleSubmit}>
        <button>Sign in</button>
      </form>
    </>
  );
};
