import React from "react"
import styled from "styled-components"

import { theme } from "@styles"
import { rem } from "@utils"

const { colors } = theme

const Wrapper = styled.div`
  min-height: ${rem(50)};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: ${colors.silver};
`

const FooterLink = styled.a`
  color: currentColor;
  text-decoration: underline;
`
const Footer = () => (
  <Wrapper>
    <p>
      Built by{" "}
      <FooterLink href="https://github.com/thomasharmon808">
        Thomas Harmon
      </FooterLink>
    </p>
  </Wrapper>
)

export default Footer
