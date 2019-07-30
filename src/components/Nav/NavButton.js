import styled, { css } from 'styled-components';

import { rem, resetInput } from '@utils';
import { navbarHeight } from '@config';

const NavButton = styled.button`
  ${resetInput}
  flex: 0 0 auto;
  min-width: ${rem(navbarHeight)};
  height: ${rem(navbarHeight)};
  color: white;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  ${p => p.active && css`
    background: rgba(0, 0, 0, 0.07);
  `}
`

export default NavButton
