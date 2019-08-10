import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import { rem, media } from "@utils"
import { Layout, Hero, About, Experience, Projects } from "@components"

const Content = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 0 ${rem(90)};
  transition: transform 150ms ease-out;
  ${media.tablet`
    padding: 0 ${rem(45)};
  `}
  ${media.phablet`
    padding: 0 ${rem(22)};
  `}
`

const IndexPage = ({ data }) => (
  <Layout>
    <Content id="content">
      <Hero data={data.hero} />
      <About data={data.about} />
      <Experience data={data.experience} />
      <Projects data={data.projects} />
    </Content>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  {
    hero: heroJson {
      title
      subtitle
      blurb
    }
    about: aboutJson {
      content
      skills
      avatar {
        childImageSharp {
          fluid(maxWidth: 700, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    experience: experienceJson {
      jobs {
        company
        title
        url
        range
        details
      }
    }
    projects: projectsJson {
      projects {
        name
        url
        description
      }
    }
  }
`
