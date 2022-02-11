import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserForm } from '../components/UserForm';
import { AppContext } from '../Context';

export const NotRegisteredUser = () => {
  const navigate = useNavigate();
  const { login } = useContext(AppContext);
  const [loginScreen, setLoginScreen] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate('/');
  };

  const onClickHelpText = () => {
    setLoginScreen(!loginScreen);
  };

  return (
    <>
      {loginScreen ? (
        <UserForm
          onSubmit={handleSubmit}
          btnText="Sign in"
          text="Dont have an account?"
          helpText="Register"
          onClickHelpText={onClickHelpText}
        />
      ) : (
        <UserForm
          onSubmit={handleSubmit}
          btnText="Register"
          text="Already have an account?"
          helpText="Enter here"
          onClickHelpText={onClickHelpText}
        />
      )}
    </>
  );
};
