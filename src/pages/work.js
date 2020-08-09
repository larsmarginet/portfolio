import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Contact from "../components/contact";
import style from "./work.module.css"

const Work = ({ data }) => {
  const cases = data.allContentfulCase.edges;

  return (
      <Layout>
        <section className={style.work}>
          <h2 style={{display: "none"}}>Work</h2>
          {cases.map(({ node }) => {
            return (
              <article className={style.case} key={node.id}>
                <Link to={node.slug} className={style.caseInnerwrapper}>
                  <h3 className={style.caseTitle}>{node.title}</h3>
                  <p className={style.caseDescription}>{node.shortDescription.shortDescription}</p>
                  <ul className={style.caseKeywords}>
                    {node.keywords.map(keyword => {
                        return (
                          <li className={style.caseKeywordsKeyword} key={keyword}>{keyword}</li>
                        )  
                      })}
                  </ul> 
                  <picture className={style.caseImage}>
                    <source media="(max-width: 959px)" sizes="100vw" srcSet={node.mockUp[1].fluid.srcSetWebp} type="image/webp"/>
                    <source media="(min-width: 960px)" sizes="50vw" srcSet={node.mockUp[0].fluid.srcSetWebp} type="image/webp"/>
                    <source media="(max-width: 959px)" sizes="100vw" srcSet={node.mockUp[1].fluid.srcSet} type="image/png"/> 
                    <source media="(min-width: 960px)" sizes="50vw" srcSet={node.mockUp[0].fluid.srcSet} type="image/png"/>
                    <img className={style.caseImageImg} src={node.mockUp[0].fluid.src} alt={node.title}/>
                  </picture>
                  <p className={style.caseButton}>View case</p>
                </Link>
              </article>
            )
          })}
        </section>
        <section className={style.contact}>
          <div className={style.contactInnerwrapper}>
            <h2 className={style.contactTitle}>Maybe your project is next?</h2>
            <Contact />
          </div>
        </section>
      </Layout>
  )
}

export default Work; 

export const pageQuery = graphql`
  query {
    allContentfulCase( sort: { fields: created, order: DESC }) {
      edges {
        node {
          id
          slug
          title
          keywords
          shortDescription {
            shortDescription
          }
          mockUp {
            fluid {
              src
              srcSetWebp
              srcSet
            }
          }
        }
      }
    }
  }
`