import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import style from "./index.module.css"
import laptop from "../images/laptop.svg"

const Home = ({ data }) => {
  const cases = data.allContentfulCase.edges

  return (
      <Layout>
        <section className={style.intro}>
          <div className={style.introInnerwrapper}>
            <div className={style.introContent}>
              <h2 className={style.introContentTitle}>Hi there</h2>
              <p className={style.introContentText}>My name is Lars. I’m a <strong>digital creative.</strong> I have many interests, but mainly <strong>webdesign &amp; -development.</strong></p>
              <p>Check out my <Link className={style.link} to="/work/">work!</Link></p>
            </div>
            <img className={style.introImage} src={laptop} alt="Me working on my laptop"/>
          </div>
        </section>
        <section className={style.work}>
          <div className={style.workInnerwrapper}>
            <h2 className={style.workTitle}>Recent work</h2>
            <ul className={style.workList}>
              {cases.map(({ node }) => {
                return (
                  <li key={node.id} className={style.workListItem}>
                    <Link to="/work/" className={style.workListItemLink}>
                      <picture className={style.workListItemPicture}>
                        <source srcSet={node.squareImage.fluid.srcSetWebp} type="image/webp"/>
                        <source srcSet={node.squareImage.fluid.srcSet} type="image/jpeg"/> 
                        <img className={style.workListItemImage} src={node.squareImage.fluid.src} alt={node.title}/>
                      </picture>
                      <div className={style.workListItemOverlay}>
                        <div className={style.workListItemOverlayContent}>
                          <div>
                            <p className={style.workListItemOverlayContentTitle}>{node.title}</p>
                            <ul>
                              {node.keywords.map(keyword => {
                                return (
                                  <li key={keyword}>{keyword}</li>
                                )  
                              })}
                            </ul> 
                            </div>
                          <p className={style.workListItemOverlayContentButton} to="/work/">View</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
            <Link className={style.workButton} to="/work/">View more</Link>
          </div>
        </section>
      </Layout>
  );
}



export default Home;

export const pageQuery = graphql`
  query {
    allContentfulCase(limit: 6, sort: { fields: created, order: DESC }) {
      edges {
        node {
          id
          title
          keywords
          squareImage {
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