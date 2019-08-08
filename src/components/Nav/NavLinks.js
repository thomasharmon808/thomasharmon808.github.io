import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { rem } from '@utils';
import { navbarHeight } from '@config';

import NavSeparator from './NavSeparator';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
`

const NavLink = styled(Link)`
  flex: 0 0 auto;
  display: inline-block;
  line-height: ${rem(navbarHeight)};
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  letter-spacing: 0.025rem;
  font-size: 1.2em;
  color: currentColor;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.95);
    opacity: 0.6;
  }
`

const NavLinks = () => (
  <Wrapper>
    <NavLink to="#about">About</NavLink>
    <NavSeparator />
    <NavLink to="#exp">Experience</NavLink>
    <NavSeparator />
    <NavLink to="#proj">Projects</NavLink>
    <NavSeparator />
    <NavLink to="/resume.pdf">Resume</NavLink>
  </Wrapper>
)

export default NavLinks
