import styled from 'styled-components';

import { rem, resetInput } from '@utils';
import { navbarHeight } from '@config';
import { theme } from '@styles';

const { colors } = theme;

const NavButton = styled.button`
  ${resetInput}
  flex: 0 0 auto;
  min-width: ${rem(navbarHeight)};
  height: ${rem(navbarHeight)};
  color: ${colors.white};
  text-align: center;
  vertical-align: middle;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.1s;
  svg {
    width: 32px;
    height: 28px;
  }
`

export default NavButton
