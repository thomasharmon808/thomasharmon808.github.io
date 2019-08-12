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
                <Footer theme={theme}/>
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
    theme === "dark" ? `background: ${colors.darkSlate};` : `background: ${colors.snow};`
    };
    ${({ theme }) =>
    theme === "dark" ? `color: ${colors.lightestSlate};` : `color: ${colors.black};`
    };

    li {
      &:before {
        ${({ theme }) =>
          theme === "dark" ? `color: ${colors.electricBlue};` : `color: ${colors.lightModeBlue};`
        };
      }
    }

    h1 {
      ${({ theme }) =>
        theme === "dark" ? `color: ${colors.electricBlue};` : `color: ${colors.lightModeBlue};`
      };
    }
    h2, h4 {
      ${({ theme }) =>
        theme === "dark" ? `color: ${colors.lightestSlate};` : `color: ${colors.navy};`
      };
    }
    h3 {
      ${({ theme }) =>
        theme === "dark" ? `color: ${colors.snow};` : `color: ${colors.navy};`
      };
    }
    a {
      &:hover,
      &:focus {
        ${({ theme }) =>
        theme === "dark" ? `color: ${colors.electricBlue};` : `color: ${colors.lightModeHighlight};`
      };
      }
    }
    span > a {
      ${({ theme }) =>
        theme === "dark" ? `color: ${colors.electricBlue};` : `color: ${colors.lightModeBlue};`
      };
    }
    a > svg {
      ${({ theme }) =>
        theme === "dark" ? `color: ${colors.white};` : `color: ${colors.lightModeBlue};`
      };
      &:hover,
      &:focus {
        ${({ theme }) =>
        theme === "dark" ? `color: ${colors.electricBlue};` : `color: ${colors.lightModeHighlight};`
      };
      }
    }
    div.proj {
      ${({ theme }) =>
        theme === "dark" ? `background: ${colors.midnightGreen};` : `background: ${colors.lightModeBlue};`
      };
      p {
      ${({ theme }) =>
        theme === "dark" ? `color: ${colors.lightSlate};` : `color: ${colors.navy};`
      };
      }
    }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
