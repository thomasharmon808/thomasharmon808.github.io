import React from 'react';
import styled, { css } from 'styled-components';

import NavLinks from './NavLinks';
import NavSeparator from './NavSeparator';
import NavButton from './NavButton';
import LogoLink from './LogoLink';
import DarkModeButton from './DarkModeButton';

import { Hamburger, Moon } from '@components/icons';
import { rem, media } from '@utils';
import { navbarHeight, siteTitle } from '@config';
import { theme } from '@styles';

const { colors } = theme;

const Wrapper = styled.div`
  display: none;
  ${media.tablet`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${rem(navbarHeight)};
  `}
`

const SecondaryMenu = styled.div`
  position: absolute;
  top: ${rem(navbarHeight)};
  left: 0;
  right: 0;
  ${p => p.open ? css`
    height: 3.125rem;
  ` : css`
    height: 0;
  `}
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  transition: height 0.1s;
  user-select: none;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  overflow-y: hidden;
  background: ${colors.slate};
  color: #868686;
`

const MobileNavbar = props => {
  const {
    isMobileNavFolded,
    onMobileNavToggle,
    onToggleTheme
  } = props

  return (
    <Wrapper>
      <LogoLink>
        {siteTitle}
      </LogoLink>

      <Wrapper>
        <DarkModeButton onClick={onToggleTheme}>
          <Moon/>
        </DarkModeButton>
        <NavButton
          onClick={onMobileNavToggle}
          active={!isMobileNavFolded}
        >
          <Hamburger />
        </NavButton>
      </Wrapper>

      <SecondaryMenu open={!isMobileNavFolded}>
        <NavLinks />
      </SecondaryMenu>
    </Wrapper>
  )
}

export default MobileNavbar
