/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import "typeface-ibm-plex-sans"

import { Nav, Footer, Head } from "@components"
import { GlobalStyle } from "@styles"

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Layout = ({ children }) => {
    return (
      <div id="root">
        <Head />
        <GlobalStyle />
        <Wrapper>
          <Nav/>
            {children}
          <Footer />
        </Wrapper>
      </div>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
