import React from "react"
import styled from "styled-components"

import { Heading } from "@components"

import { theme, media } from "@styles"
const { colors } = theme

const ProjectsContainer = styled.section`
  margin: 0 auto;
  padding: 150px 0;
  max-width: 1150px;
  ${media.tablet`padding: 100px 0;`};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    position: relative;
    ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
`;

const Card = styled.div`
  width: 100%;
  overflow: hidden;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.11);
  p {
    color: ${colors.lightSlate};
  }
	&:hover,
  &:focus {
    outline: 0;
    transform: translateY(-5px);
		box-shadow: 0 20px 25px 0 rgba(0, 0, 0, 0.11);
  }
`

const Project = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 0.5rem 1.75rem 2rem 1.75rem;
  height: 100%;
  border-radius: ${theme.borderRadius};
  background-color: ${colors.lightNavy};
`

const Content = styled.div`
  padding: 1em 0;
`

const Projects = ({ data }) => {
  return (
    <ProjectsContainer id="projects">
      <Heading>Projects</Heading>
      <ProjectsGrid>
        {data &&
          data.projects.map((project, i) => {
            const { name, url, description } = project
            return (
              <Card
                key={i}
                as="a"
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <Project>
									<Content>
	                  <h3>{name}</h3>
	                  <p>{description}</p>
									</Content>
                </Project>
              </Card>
            )
          })}
      </ProjectsGrid>
    </ProjectsContainer>
  )
}

export default Projects
