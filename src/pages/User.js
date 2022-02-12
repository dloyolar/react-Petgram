import React, { useContext } from 'react';
import { SubmitButton } from '../components/SubmitButton';
import { Wrapper } from '../components/UserForm/styles';
import { AppContext } from '../Context';

export const User = () => {
  const { removeAuth } = useContext(AppContext);
  return (
    <Wrapper>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Logout</SubmitButton>
    </Wrapper>
  );
};
