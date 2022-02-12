import { gql, useMutation } from '@apollo/client';

const LOGIN_MUTATION = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export const useLoginMutation = (email, password) => {
  const [SignIn, { loading, error }] = useMutation(LOGIN_MUTATION);
  return { SignIn, loading, error };
};
