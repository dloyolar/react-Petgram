import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserForm } from '../components/UserForm';
import { AppContext } from '../Context';
import { useRegisterMutation } from '../hooks/useRegisterMutation';

export const NotRegisteredUser = () => {
  const navigate = useNavigate();
  const { login } = useContext(AppContext);
  const [loginScreen, setLoginScreen] = useState(true);
  const { register, loading, error } = useRegisterMutation();

  const handleSubmitRegister = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    register({ variables }).then(login);
    navigate('/user');
  };

  const errorMsg = error && 'The user already exists or there is a problem.';

  const handleSubmitLogin = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
  };

  const onClickHelpText = () => {
    setLoginScreen(!loginScreen);
  };

  return (
    <>
      {loginScreen ? (
        <UserForm
          onSubmit={handleSubmitLogin}
          btnText="Sign in"
          text="Dont have an account?"
          helpText="Register"
          onClickHelpText={onClickHelpText}
          error={errorMsg}
        />
      ) : (
        <UserForm
          onSubmit={handleSubmitRegister}
          btnText="Register"
          text="Already have an account?"
          helpText="Enter here"
          onClickHelpText={onClickHelpText}
          error={errorMsg}
          loading={loading}
        />
      )}
    </>
  );
};
