import React from 'react';
import styled from 'styled-components';

import { Github, Linkedin, Email } from '@components/icons';

import { theme } from '@styles';
import { media } from '@utils';
import { email } from '@config';

const { colors } = theme;

const HeroContainer = styled.section`
	margin: 0 auto;
	padding: 100px 0;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	min-height: 100vh;
	${media.tablet`padding-top: 150px;`};
	div {
		width: 100%;
	}
	max-width:1000px;
`;

const Title = styled.h1`
  color: ${colors.electricBlue};
  margin: 0 0 20px 3px;
  font-weight: normal;
	font-size: 2.5em;
	${media.giant`font-size: 1.7em;`};
	${media.tablet`font-size: 1.5em;`};
	${media.phablet`font-size: 1.4em;`};
`;

const Subtitle = styled.h2`
  line-height: 1.1;
	font-size: 3.3em;
	${media.giant`font-size: 2.3em;`};
	${media.tablet`font-size: 2em;`};
	${media.phablet`font-size: 1.9em;`};
`;

const Blurb = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 600px;
	font-size: 1.2em;
`;

const IconList = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding-top: 1.5em;
`;

const IconItem = styled.li`
	padding-right: 2.5em;
`;

const IconWrapper = styled.a`
  color: ${colors.white};
	&:hover,
	&:focus {
    transform: translateY(-3px);
  }
	svg {
		width: 24px;
		height: 24px;
	}
`

const Hero = () => (
	<HeroContainer>
		<Title>
			Hey, I'm Thomas Harmon.
		</Title>
		<Subtitle>
			I love to code.
		</Subtitle>
		<Blurb>
			I'm a full-stack software engineer in Boston, MA. My specialities are in back-end development,
			[something], and machine learning. Feel free to connect with me through any of the following:
		</Blurb>
		<IconList>
			<IconItem key="1">
				<IconWrapper
																href="https://github.com/thomasharmon808"
																target="_blank">
					<Github/>
				</IconWrapper>
			</IconItem>
			<IconItem key="2">
				<IconWrapper
																href="https://www.linkedin.com/in/tharmony/"
																target="_blank">
					<Linkedin/>
				</IconWrapper>
			</IconItem>
			<IconItem key="3">
				<IconWrapper
																href={`mailto:${email}`}
																target="_blank">
					<Email/>
				</IconWrapper>
			</IconItem>
		</IconList>
	</HeroContainer>
)

export default Hero;
