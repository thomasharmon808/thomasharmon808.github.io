import React from "react"
import styled, { css, createGlobalStyle } from "styled-components"

import { rem, mobile } from "@utils"
import { Layout } from "@components"

const Content = styled.div`
  width: ${rem(1024)};
  max-width: 100%;
  flex: 1;
  margin: 0 auto;
  padding: ${rem(90)} ${rem(40)} ${rem(30)} ${rem(40)};
  box-sizing: border-box;
  transition: transform 150ms ease-out;
  ${mobile(css`
    padding: ${rem(70)} ${rem(20)} ${rem(30)} ${rem(20)};
  `)}
  ${p =>
    p.hero &&
    css`
      font-family: sans-serif;
      width: 75rem;
    `}
`

const IndexPage = () => (
  <Layout>
    <Content>
      <h1>Hi People</h1>
    </Content>
  </Layout>
)

export default IndexPage
