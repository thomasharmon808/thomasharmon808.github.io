import styled from 'styled-components';

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
  justify-content: center;
  cursor: pointer;
`

export default NavButton
