import styled from 'styled-components';
import { Link } from 'gatsby';

import { theme } from '@styles';

const { colors } = theme;

const LogoLink = styled(Link).attrs({
  to: '/',
  'aria-label': 'home',
})`
  display: inline-block;
  vertical-align: center;
  color: ${colors.white};
  margin-left: 1.25rem;
  font-size: 1.25rem;
`

export default LogoLink;
