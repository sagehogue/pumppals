import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "./index.module.css"
// import images from '../';

import Layout from "../components/layout/layout"
// import Image from "../components/image"
// import SEO from "../../components/seo"

const MobileView = () => {
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(filter: { relativeDirectory: { eq: "index" } }) {
        nodes {
          id
          childImageSharp {
            fixed(width: 160) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      image: file(relativePath: { eq: "index/crunch.jpg" }) {
        id
        childImageSharp {
          fixed(width: 160) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data.images)
  return (
    <Layout>
      {/* <div className={styles.mobileGrid}>
        <div className={styles.imageA}>
          <Img fluid={data.image.childImageSharp.fluid} />
        </div>
        <div className={styles.imageB}>
          <img />
        </div>
        <div className={styles.imageC}>
          <img />
        </div>
        <div className={styles.imageD}>
          <img />
        </div>
      </div> */}
      <div className={styles.gallery}>
        {data.images.nodes.map(image => (
        <div className={styles.photo}>
          <Img key={image.id} fluid={image.childImageSharp.fluid} />
        </div>
        ))}
      </div>
      <div className={styles.mobileFooter}>
        <h1>mobile</h1>
      </div>
    </Layout>
  )
}

const fullSizeView = () => (
  <Layout>
    <div className={styles.fullsizeGridContainer}>
      <h1>full</h1>
    </div>
    <div className={styles.fullsizeFooter}></div>
    <AniLink swipe to="/page-2/">
      Go to page 2
    </AniLink>
  </Layout>
)

const IndexPage = () => {
  // const images = useStaticQuery(graphql`
  // query Images {
  //   image: file(relativePath: {eq: "index/crunch.jpg"}) {
  //       id
  //       childImageSharp {
  //         fluid {
  //           src
  //           srcSet
  //         }
  //       }
  //     }

  // }
  // `)
  // console.log(images);
  return window.innerWidth > 500 ? fullSizeView() : MobileView()
}
export default IndexPage
