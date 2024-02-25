import * as React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"




const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h4>Start developing lightning fast frontend for WordPress sites with Gatsby!</h4>
  </Layout>
)

export const Head = () => <SEO title="Home" />

export default IndexPage
