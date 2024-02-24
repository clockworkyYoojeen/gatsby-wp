import * as React from "react"
import { Link } from "gatsby"

import SEO from "../components/SEO/SEO"

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export const Head = () => <SEO title="Page two" />

export default SecondPage
