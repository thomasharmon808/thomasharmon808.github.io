import React from 'react';
import styled from 'styled-components';

import { rem } from '@utils';

const Wrapper = styled.div`
  min-height: ${rem(50)};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: #cecece;
  color: #868686;
`

const FooterLink = styled.a`
  color: currentColor;
  text-decoration: underline;
`
const Footer = () => (
  <Wrapper>
    <p>
      Built by <FooterLink href="https://github.com/thomasharmon808">Thomas Harmon</FooterLink>
    </p>
  </Wrapper>
)

export default Footer;
