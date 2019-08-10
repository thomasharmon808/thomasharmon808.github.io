import React from "react"
import styled from "styled-components"

import { Github, Linkedin, Email, Spotify } from "@components/icons"

import { theme } from "@styles"
import { media } from "@utils"
import { email, github, linkedin, spotify } from "@config"

const { colors } = theme

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
  max-width: 1000px;
`

const Title = styled.h1`
  color: ${colors.electricBlue};
  margin: 0 0 20px 3px;
  font-weight: normal;
  font-size: 2.5em;
  ${media.giant`font-size: 1.7em;`};
  ${media.tablet`font-size: 1.5em;`};
  ${media.phablet`font-size: 1.4em;`};
`

const Subtitle = styled.h2`
  line-height: 1.1;
  font-size: 1.5em;
  color: ${colors.lightestSlate};
  ${media.giant`font-size: 2.3em;`};
  ${media.tablet`font-size: 2em;`};
  ${media.phablet`font-size: 1.9em;`};
`

const Blurb = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 600px;
  font-size: 1.2em;
  color: ${colors.lightSlate};
`

const IconList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 1.5em;
`

const IconItem = styled.li`
  padding-right: 4em;
`

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

const Hero = ({ data }) => (
  <HeroContainer>
    <Title>{data.title}</Title>
    <Subtitle>{data.subtitle}</Subtitle>
    <Blurb>{data.blurb}</Blurb>
    <IconList>
      <IconItem key="1">
        <IconWrapper href={github} target="_blank">
          <Github />
        </IconWrapper>
      </IconItem>
      <IconItem key="2">
        <IconWrapper href={linkedin} target="_blank">
          <Linkedin />
        </IconWrapper>
      </IconItem>
      <IconItem key="3">
        <IconWrapper href={`mailto:${email}`} target="_blank">
          <Email />
        </IconWrapper>
      </IconItem>
      <IconItem key="4">
        <IconWrapper href={spotify} target="_blank">
          <Spotify />
        </IconWrapper>
      </IconItem>
    </IconList>
  </HeroContainer>
)

export default Hero
