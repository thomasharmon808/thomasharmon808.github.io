import React, { useEffect, useRef } from "react"
import styled from "styled-components"

import sr from "@utils/sr"
import { srConfig } from "@config"
import { Heading } from "@components"
import { theme, media } from "@styles"

const { colors } = theme

const ExperienceContainer = styled.section`
  margin: 0 auto;
  padding: 150px 0;
  max-width: 1000px;
  ${media.tablet`padding: 100px 0;`};
  position: relative;
`

const ContentContainer = styled.div`
  position: relative;
  ${media.tablet`padding-left: 1.25em;`};
  ${media.thone`padding-left: 0;`};
`

const Job = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  padding-bottom: 1.65em;
  li {
    color: ${colors.lightSlate};
    max-width: 75%;
    margin-bottom: 10px;
    ${media.desktop`max-width: 85%;`};
    ${media.tablet`max-width: 100%;`};
  }
`

const JobTitle = styled.h4`
  color: ${colors.lightestSlate};
  font-size: 1.8em;
  font-weight: 500;
  margin-bottom: 0px;
  padding-bottom: 0px;
  ${media.desktop`font-size: 1.25em;`};
`

const Company = styled.span`
  color: ${colors.electricBlue};
`

const JobRange = styled.h5`
  font-size: 1.2em;
  font-weight: normal;
  color: ${colors.lightSlate};
  margin-bottom: 15px;
  margin-top: 10px;
  ${media.desktop`font-size: 1em;`};
`

const Experience = ({ data }) => {
  const revealContainer = useRef(null)
  const revealJobs = useRef([])
  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig())
    revealJobs.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 200)))
  }, [])
  return (
    <ExperienceContainer id="experience" ref={revealContainer}>
      <Heading>Experience</Heading>
      <ContentContainer>
        {data &&
          data.jobs.map((job, i) => {
            const { company, title, url, range, details } = job
            return (
              <Job
                key={i}
                ref={x => (revealJobs.current[i] = x)}
                id={`job${i}`}
                aria-labelledby={`job${i}`}
              >
                <JobTitle>
                  <span>{title}</span>
                  <Company>
                    <span>&nbsp;@&nbsp;</span>
                    <a
                      href={url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      {company}
                    </a>
                  </Company>
                </JobTitle>
                <JobRange>
                  <span>{range}</span>
                </JobRange>
                {details.map((detail, j) => {
                  return <li key={j}>{detail}</li>
                })}
              </Job>
            )
          })}
      </ContentContainer>
    </ExperienceContainer>
  )
}

export default Experience
