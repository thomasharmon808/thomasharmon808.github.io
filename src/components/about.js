import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Img from "gatsby-image";

import { Heading } from "@components";

import { theme, media } from "@styles";
const { colors } = theme

const AboutContainer = styled.section`
  margin: 0 auto;
  padding: 150px 0;
  max-width: 1000px;
  ${media.tablet`padding: 100px 0;`};
  position: relative;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  ${media.tablet`display: block;`};
`

const ContentContainer = styled.div`
  width: 60%;
  max-width: 580px;
	color: ${colors.lightSlate};
	font-size: 1.125em;
  ${media.tablet`margin-top: 3em;`};
  ${media.tablet`width: 100%;`};
  a {
    color: ${colors.electricBlue};
  }
`

const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  margin-top: 20px;
`

const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
	color: ${colors.lightSlate};
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: ${colors.electricBlue};
    /* line-height: 12px; */
  }
`

const PicContainer = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-right: 60px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
`


const About = ({ data }) => {
  return (
    <AboutContainer id="about">
      <Heading>About</Heading>
      <FlexContainer>
        <PicContainer>
          <Img fluid={data.avatar.childImageSharp.fluid} />
        </PicContainer>
        <ContentContainer>
          {data.content}
          <SkillsContainer>
            {data.skills &&
              data.skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
          </SkillsContainer>
        </ContentContainer>
      </FlexContainer>
    </AboutContainer>
  )
}

About.propTypes = {
  data: PropTypes.array.isRequired,
}

export default About
