import styled from 'styled-components';

import { theme } from '@styles';

const { colors } = theme;

const DarkModeButton = styled.button`
  svg {
    width: 24px;
    height: 26px;
    color: ${colors.white};
  }
`

export default DarkModeButton
