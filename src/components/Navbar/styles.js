import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

import { fadeIn } from '../../styles/animation';

export const Nav = styled.nav`
  background: #fcfcfc;
  margin: 0 auto;
  border-top: 1px solid #e0e0e0;
  max-width: 500px;
  height: 50px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Link = styled(LinkRouter)`
  position: relative;
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  font-size: 32px;

  &[aria-current] {
    color: #000;

    &::after {
      ${fadeIn({ time: '0.5s' })}
      content: '·';
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 20px;
    }
  }
`;
