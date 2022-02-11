import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserForm } from '../components/UserForm';
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
      <UserForm onSubmit={handleSubmit} />
    </>
  );
};
