/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { Nav, Footer, Head, DarkModeContext, Provider } from "@components"
import { GlobalStyle, theme } from "@styles"

const { colors } = theme;

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Layout = ({ children }) => (
  <Provider>
    <DarkModeContext.Consumer>
      {({ theme }) => (
        <>
          <LayoutStyled theme={theme}>
            <div id="root">
              <Head />
              <GlobalStyle />
              <Wrapper>
                <Nav />
                {children}
                <Footer />
              </Wrapper>
            </div>
          </LayoutStyled>
        </>
      )}
    </DarkModeContext.Consumer>
  </Provider>
)

const LayoutStyled = styled.div`
  ${({ theme }) =>
    theme === "dark" ? `background: ${colors.darkSlate};` : `background: ${colors.white};`
    };
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
