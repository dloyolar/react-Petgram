import React from 'react';
import { useForm } from '../../hooks/useForm';
import { SpinnerLoader } from '../Spinner';

import {
  Form,
  Input,
  Button,
  Wrapper,
  Img,
  P,
  SpanLink,
  Error,
} from './styles';

import { SubmitButton } from '../SubmitButton';

export const UserForm = ({
  onSubmit,
  btnText,
  text,
  helpText,
  onClickHelpText,
  error,
  loading,
}) => {
  const initialState = {
    email: '',
    password: '',
  };
  const { value, onChange } = useForm(initialState);

  const { email, password } = value;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <Wrapper>
      {loading ? (
        <SpinnerLoader />
      ) : (
        <>
          <h2>{btnText}</h2>
          <Img src="https://creazilla-store.fra1.digitaloceanspaces.com/silhouettes/69796/standing-dog-silhouette-f35580-md.png" />
          {error && <Error>{error}</Error>}
          <Form onSubmit={handleSubmit}>
            <Input
              onChange={onChange}
              value={email}
              placeholder="Email"
              name="email"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
              name="password"
            />
            <div>
              <P>{text}</P>
              <SpanLink onClick={onClickHelpText}>{helpText}</SpanLink>
            </div>
            <SubmitButton type="submit" onClick={handleSubmit}>
              {btnText}
            </SubmitButton>
          </Form>
        </>
      )}
    </Wrapper>
  );
};
