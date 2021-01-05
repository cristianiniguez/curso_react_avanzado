import { gql, useMutation } from '@apollo/client';

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const RegisterMutation = ({ children }) => {
  const [register, info] = useMutation(REGISTER);
  return children(register, info);
};
