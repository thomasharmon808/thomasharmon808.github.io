import React from "react"
import styled from "styled-components"

import { rem, media } from "@utils"
import { Layout, Hero} from "@components"

const Content = styled.main`
  width: 100%;
  /* flex: 1; */
  margin: 0 auto;
  /* counter-reset: section; */
  padding: 0 ${rem(90)};
  transition: transform 150ms ease-out;
  ${media.tablet`
    padding: 0 ${rem(45)};
  `}
  ${media.phablet`
    padding: 0 ${rem(22)};
  `}
`

const IndexPage = () => (
  <Layout>
    <Content>
      <Hero/>
    </Content>
  </Layout>
)

export default IndexPage
