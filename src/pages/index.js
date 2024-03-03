import * as React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Hero from "../components/Hero/Hero"
import CTAArea from "../components/CTAArea/CTAArea"
import LatestBlogPost from "../components/LatestBlogPost/LatestBlogPost"




const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h4>Start developing lightning fast frontend for WordPress sites with Gatsby!</h4>
    <Hero />
    <CTAArea />
    <LatestBlogPost />
  </Layout>
)

export const Head = () => <SEO title="Home" />

export default IndexPage
