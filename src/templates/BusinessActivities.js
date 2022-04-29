import React from "react"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/components/index"
import { graphql } from "gatsby"
import Hero from "../sections/page-specific/business-activities/Hero"
import Choose from "../sections/page-specific/business-activities/Choose"
import Activities from "../sections/page-specific/business-activities/Activities"

function BusinessActivities(props) {
  return (
    <Layout>
      <Seo props={props} />
      <Hero />
      <Choose />
      <Activities />
    </Layout>
  )
}

export default BusinessActivities

export const pageQuery = graphql`
  query GET_ACTIVITIES_PAGE($id: String!) {
    wpPage(id: { eq: $id }) {
      title
    }
  }
`