import React, { useContext } from 'react';
import styled from 'styled-components';

import { Moon, Sun } from '@components/icons';
import { rem, media } from '@utils';
import { navbarHeight, siteTitle } from '@config';
import { theme } from '@styles';
import { DarkModeContext } from '@components';

import NavLinks from './NavLinks';
import MobileNavbar from './MobileNavbar';
import LogoLink from './LogoLink';
import NavSeparator from './NavSeparator';
import DarkModeButton from './DarkModeButton';

const { colors } = theme;

const Wrapper = styled.nav`
  position: fixed;
  left: 0;
  box-sizing: border-box;
  z-index: 3;
  width: 100%;
  height: ${rem(navbarHeight)};
  font-size: ${rem(15)};
  font-weight: 500;
  background: ${colors.metallicSeaweed};
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.3);
  a {
    text-decoration: none;
  }
`

const NormalNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${rem(20)};
  ${media.tablet`display: none;`}
`

const StartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex;
`

const EndWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 1.25rem;
`

const NavBar = props => {
  const { theme, toggleTheme } = useContext(DarkModeContext);
  return (
    <Wrapper>
      <NormalNavbar>
        <StartWrapper>
          <LogoLink>{siteTitle}</LogoLink>
        </StartWrapper>
        <EndWrapper>
          <NavLinks />
          <NavSeparator/>
          <DarkModeButton onClick={toggleTheme}>
            {theme === "light" ? <Moon/> : <Sun/>}
          </DarkModeButton>
        </EndWrapper>
      </NormalNavbar>

      <MobileNavbar
        isMobileNavFolded={props.isMobileNavFolded}
        onMobileNavToggle={props.onMobileNavToggle}
        onToggleTheme={toggleTheme}
      />
    </Wrapper>
  )
}

export default NavBar
