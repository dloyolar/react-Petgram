import React, { useContext } from 'react';
import { SubmitButton } from '../components/SubmitButton';
import { Wrapper } from '../components/UserForm/styles';
import { AppContext } from '../Context';

import { Helmet } from 'react-helmet';

export const User = () => {
  const { removeAuth } = useContext(AppContext);
  return (
    <Wrapper>
      <Helmet>
        <title>Petgram - User 💓</title>
        <meta name="description" content="Here you have your account details" />
      </Helmet>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Logout</SubmitButton>
    </Wrapper>
  );
};
