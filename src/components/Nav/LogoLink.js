import styled from 'styled-components';
import { Link } from 'gatsby';

const LogoLink = styled(Link).attrs({
  to: '/',
  'aria-label': 'home',
})`
  display: inline-block;
  vertical-align: center;
  color: currentColor;
  margin-left: 1.25rem;
  font-size: 1.2em;
`

export default LogoLink;
