import { gql, useMutation } from '@apollo/client';

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export const LoginMutation = ({ children }) => {
  const [login, info] = useMutation(LOGIN);
  return children(login, info);
};
