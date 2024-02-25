import * as React from "react"

import SEO from "../components/SEO/SEO"




const IndexPage = () => (
  <div>
    <SEO title="Home" />
      <p>Start developing Gatsby frontend App for WordPress site!</p>
  </div>
)

export const Head = () => <SEO title="Home" />

export default IndexPage
