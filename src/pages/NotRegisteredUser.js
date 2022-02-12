import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserForm } from '../components/UserForm';
import { AppContext } from '../Context';
import { useLoginMutation } from '../hooks/useLoginMutation';
import { useRegisterMutation } from '../hooks/useRegisterMutation';

export const NotRegisteredUser = () => {
  const navigate = useNavigate();
  const { login } = useContext(AppContext);
  const [loginScreen, setLoginScreen] = useState(true);
  const {
    register,
    loading: registerLoading,
    error: registerError,
  } = useRegisterMutation();
  const {
    SignIn,
    loading: loginLoading,
    error: loginError,
  } = useLoginMutation();

  const handleSubmitRegister = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    register({ variables }).then(login);
    navigate('/user');
  };

  const handleSubmitLogin = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    SignIn({ variables })
      .then(login)
      .catch((err) => {
        console.log(err);
      });
  };

  const errorRegisterMsg =
    registerError && 'The user already exists or there is a problem.';

  const errorLoginMsg =
    loginError && 'Incorrect user or password. Or there is a problem';

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
          error={errorLoginMsg}
          loading={loginLoading}
        />
      ) : (
        <UserForm
          onSubmit={handleSubmitRegister}
          btnText="Register"
          text="Already have an account?"
          helpText="Enter here"
          onClickHelpText={onClickHelpText}
          error={errorRegisterMsg}
          loading={registerLoading}
        />
      )}
    </>
  );
};
