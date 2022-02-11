import React from 'react';
import { useForm } from '../../hooks/useForm';

import { Form, Input, Button, Wrapper, Img, P, SpanLink } from './styles';

export const UserForm = ({
  onSubmit,
  btnText,
  text,
  helpText,
  onClickHelpText,
}) => {
  const initialState = {
    email: '',
    password: '',
  };
  const { value, onChange } = useForm(initialState);

  const { email, password } = value;

  return (
    <Wrapper>
      <h2>{btnText}</h2>
      <Img src="https://creazilla-store.fra1.digitaloceanspaces.com/silhouettes/69796/standing-dog-silhouette-f35580-md.png" />
      <Form onSubmit={onSubmit}>
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
          <P>{text}</P>{' '}
          <SpanLink onClick={onClickHelpText}>{helpText}</SpanLink>
        </div>
        <Button type="submit">{btnText}</Button>
      </Form>
    </Wrapper>
  );
};
