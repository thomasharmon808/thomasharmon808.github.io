import React from 'react';
import styled from 'styled-components';

import { rem, media } from '@utils';
import { navbarHeight, siteTitle } from '@config';

import NavLinks from './NavLinks';
import MobileNavbar from './MobileNavbar';
import LogoLink from './LogoLink';

const Wrapper = styled.nav`
  position: fixed;
  left: 0;
  box-sizing: border-box;
  z-index: 3;
  width: 100%;
  height: ${rem(navbarHeight)};
  font-size: ${rem(15)};
  font-weight: 500;
  background: tomato;
  transition: background 300ms ease-out;
  color: white;

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
`

class NavBar extends React.PureComponent {
  render() {
    const {
      onMobileNavToggle,
      isMobileNavFolded,
    } = this.props

    return (
      <Wrapper>
        <NormalNavbar>
          <StartWrapper>
            <LogoLink>{siteTitle}</LogoLink>
          </StartWrapper>
          <EndWrapper>
            <NavLinks />
          </EndWrapper>
        </NormalNavbar>

        <MobileNavbar
          isMobileNavFolded={isMobileNavFolded}
          onMobileNavToggle={onMobileNavToggle}
        />
      </Wrapper>
    )
  }
}

export default NavBar
