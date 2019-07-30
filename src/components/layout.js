/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";
import 'typeface-ibm-plex-sans';

import { Nav, Footer } from '@components';
import { rem } from '@utils';

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin: 0;
  font-family: "ibm plex sans";
  letter-spacing: ${rem(.25)};
`

class Layout extends React.PureComponent {
  state = {
    isMobileNavFolded: true,
  }

  toggleMobileNav = () => {
    this.setState(prevState => ({
      isMobileNavFolded: !prevState.isMobileNavFolded,
    }))
  }

  onRouteChange = () => {
    this.setState({
      isMobileNavFolded: true,
    })
  }

  render() {
    const { isMobileNavFolded } = this.state;
    return (
      <Wrapper>
        <Nav
          isMobileNavFolded={isMobileNavFolded}
          onMobileNavToggle={this.toggleMobileNav}
        />
        {this.props.children}
        <Footer />
      </Wrapper>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
