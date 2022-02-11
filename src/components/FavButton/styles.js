import styled from 'styled-components';
import { fadeIn } from '../../styles/animation';
import { MdFavorite } from 'react-icons/md';

export const Button = styled.button`
  padding-top: 8px;
  display: flex;
  align-items: center;
  & svg {
    margin-right: 4px;
  }
`;

export const LikeIcon = styled(MdFavorite)`
  color: #ff277a;
  ${fadeIn({ time: '250ms', type: 'ease-in' })}
`;
