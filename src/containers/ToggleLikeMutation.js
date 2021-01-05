import { gql, useMutation } from '@apollo/client';

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export const ToggleLikeMutation = ({ children }) => {
  const [toggleLike, info] = useMutation(LIKE_PHOTO);
  return children(toggleLike, info);
};
