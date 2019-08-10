import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Moon } from '@components/icons';

import { rem } from '@utils';
import { navbarHeight } from '@config';
import { theme } from '@styles';

import NavSeparator from './NavSeparator';

const { colors } = theme;

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
`

const NavLink = styled(AnchorLink)`
  flex: 0 0 auto;
  display: inline-block;
  line-height: ${rem(navbarHeight)};
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  letter-spacing: 0.025rem;
  font-size: 1.25rem;
  color: ${colors.white};
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.95);
    opacity: 0.6;
  }
`

const ResumeLink = styled.a`
  flex: 0 0 auto;
  display: inline-block;
  line-height: ${rem(navbarHeight)};
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  letter-spacing: 0.025rem;
  font-size: 1.25rem;
  color: ${colors.white};
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.95);
    opacity: 0.6;
  }
`

const DarkModeButton = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  svg {
    width: 24px;
    height: 26px;
    color: ${colors.white};
  }
`

const NavLinks = () => (
  <Wrapper>
    <NavLink href="#about">About</NavLink>
    <NavSeparator />
    <NavLink href="#experience">Experience</NavLink>
    <NavSeparator />
    <NavLink href="#projects">Projects</NavLink>
    <NavSeparator />
    <ResumeLink href="/resume.pdf"
                            target="_blank"
                            rel="nofollow noopener noreferrer">
                              Resume
     </ResumeLink>
    <NavSeparator />
    <DarkModeButton>
      <Moon/>
    </DarkModeButton>
  </Wrapper>
)

export default NavLinks
