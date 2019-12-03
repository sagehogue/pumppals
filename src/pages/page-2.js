import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    {/* <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p> */}
    <AniLink swipe to="/">Go back to the homepage</AniLink>
  </Layout>
)

export default SecondPage
