import React from "react"
import styled from "styled-components"

import { theme } from "@styles"
import { rem } from "@utils"

const { colors } = theme

const Wrapper = styled.footer`
  min-height: ${rem(40)};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem;
  ${({ theme }) =>
    theme === "dark" ? `background: ${colors.silver};` : `background: ${colors.darkSlate};`
    };
    ${({ theme }) =>
    theme === "dark" ? `color: ${colors.black};` : `color: ${colors.lightestSlate};`
    };
`

const FooterLink = styled.a`
  color: currentColor;
  text-decoration: underline;
`
const Footer = ({ theme }) => (
  <Wrapper theme={theme}>
    <p>
      Built by{" "}
      <FooterLink href="https://github.com/thomasharmon808">
        Thomas Harmon
      </FooterLink>
    </p>
  </Wrapper>
)

export default Footer
