import React from 'react';
import styled, { css } from 'styled-components';

import { theme } from '@styles';
import { rem, mobile } from '@utils';

const { colors } = theme;


const HeroContainer = styled.section`
	margin: 0 auto;
	padding: 100px 0;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	min-height: 100vh;
	div {
		width: 100%;
	}
	/* TODO: is responsivness and max-width needed? */
	/* max-width: 1000px; */
`;

const Title = styled.h1`
  color: ${colors.green};
  margin: 0 0 20px 3px;
  font-weight: normal;
	font-size: 1em;
	${mobile(css`
    font-size: 0.875em;
  `)};
`;

const Subtitle = styled.h2`
  /* font-size: 3rem; */
  line-height: 1.1;
  color: ${colors.slate};
`;

const Blurb = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
`;


const Hero = () => (
	<HeroContainer>
		<Title>
			Hey, I'm Thomas Harmon.
		</Title>
		<Subtitle>
			I love to code.
		</Subtitle>
		<Blurb>
			I'm a software engineer in Boston, MA.aaaa
		</Blurb>
		{/* github/linkedin/email */}
	</HeroContainer>
)

export default Hero;
