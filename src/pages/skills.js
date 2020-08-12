import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import style from "./skills.module.css"
import Contact from "../components/contact"

const Skills = ({ data }) => {
  const webdevelopmentCases = data.webdevelopmentCases.edges;
  const appdevelopmentCases = data.appdevelopmentCases.edges;
  const webdesignCases = data.webdesignCases.edges;
  const uxCases = data.uxCases.edges;
  const motionCases = data.motionCases.edges;
  const printCases = data.printCases.edges;

  const webdevelopmentSkills = data.webdevelopmentSkills.edges;
  const appdevelopmentSkills = data.appdevelopmentSkills.edges;
  const webdesignSkills = data.webdesignSkills.edges;
  const uxSkills = data.uxSkills.edges;
  const motionSkills = data.motionSkills.edges;
  const printSkills = data.printSkills.edges;
  const experimentedSkills = data.experimentedSkills.edges;
  const futureSkills = data.futureSkills.edges;

  return (
      <Layout>
        <section className={style.skills}>
          <div className={style.skillsInnerwrapper}>
            <h2 className={style.skillsTitle}>Skills</h2>
            <div className={style.skillsList}>
              <input className={style.skillsListInput} id="webdevelopment" type="checkbox"/>
              <label className={style.skillsListLabel} htmlFor="webdevelopment">
                <p className={style.skillsListLabelTitle}>Webdevelopment</p>
                <div className={style.skillsListLabelArrow}></div>
                <div className={style.skillsListLabelText}>
                  {webdevelopmentSkills.length > 0 ? 
                    <ul className={style.skillsListLabelTextSkills}>
                      {webdevelopmentSkills.map(({ node }) => (
                        <li key={node.id} className={style.skillsListLabelTextSkillsItem}>
                          <img className={`${style.skillsListLabelTextSkillsItemImage} ${style.skillsListLabelTextSkillsItemImageColor}`} src={node.images[0].file.url} alt={node.title} title={node.title} />
                          <img className={`${style.skillsListLabelTextSkillsItemImage} ${style.skillsListLabelTextSkillsItemImageBlue}`} src={node.images[1].file.url} alt={node.title} title={node.title} />
                        </li>
                      ))}
                    </ul>
                  : null}
                  {webdevelopmentCases.length > 0 ? 
                    <ul className={style.skillsListLabelTextList}>
                      {webdevelopmentCases.map(({ node }) => (
                        <li key={node.id} className={style.skillsListLabelTextListItem}>
                          <Link to={`../work/${node.slug}/`} className={style.skillsListLabelTextListItemLink}>
                            <picture className={style.skillsListLabelTextListItemPicture}>
                              <source sizes="(max-width: 599px) 100vw, (min-width: 600px) 50vw, (min-width: 960px) 300px" srcSet={node.squareImage.fluid.srcSetWebp} type="image/webp"/>
                              <source sizes="(max-width: 599px) 100vw, (min-width: 600px) 50vw, (min-width: 960px) 300px" srcSet={node.squareImage.fluid.srcSet} type="image/jpeg"/> 
                              <img className={style.skillsListLabelTextListItemImage} src={node.squareImage.fluid.src} alt={node.title}/>
                            </picture>
                            <div className={style.skillsListLabelTextListItemOverlay}>
                              <div className={style.skillsListLabelTextListItemOverlayContent}>
                                <div>
                                  <p className={style.skillsListLabelTextListItemOverlayContentTitle}>{node.title}</p>
                                  <ul>
                                    {node.keywords.map(keyword => (
                                        <li key={keyword}>{keyword}</li>
                                      ))}
                                  </ul> 
                                </div>
                                <p className={style.skillsListLabelTextListItemOverlayContentButton}>View</p>
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  : <ul className={style.skillsListLabelTextEmpty}>
                    <div className={style.skillsListLabelTextEmptyItem}>
                      <p className={style.skillsListLabelTextEmptyItemText}>More coming soon.</p>
                    </div>
                    <div className={style.skillsListLabelTextEmptyItem}>
                      <p className={style.skillsListLabelTextEmptyItemText}>More coming soon.</p>
                    </div>
                  </ul>}
                </div>
              </label>
              <input className={style.skillsListInput} id="appdevelopment" type="checkbox"/>
              <label className={style.skillsListLabel} htmlFor="appdevelopment">
                <p className={style.skillsListLabelTitle}>Appdevelopment</p>
                <div className={style.skillsListLabelArrow}></div>
                <div className={style.skillsListLabelText}>
                  {appdevelopmentSkills.length > 0 ? 
                      <ul className={style.skillsListLabelTextSkills}>
                        {appdevelopmentSkills.map(({ node }) => (
                          <li key={node.id} className={style.skillsListLabelTextSkillsItem}>
                            <img className={`${style.skillsListLabelTextSkillsItemImage} ${style.skillsListLabelTextSkillsItemImageColor}`} src={node.images[0].file.url} alt={node.title} title={node.title} />
                            <img className={`${style.skillsListLabelTextSkillsItemImage} ${style.skillsListLabelTextSkillsItemImageBlue}`} src={node.images[1].file.url} alt={node.title} title={node.title} />
                          </li>
                        ))}
                      </ul>
                  : null}
                  {appdevelopmentCases.length > 0 ? 
                    <ul className={style.skillsListLabelTextList}>
                      {appdevelopmentCases.map(({ node }) => (
                        <li key={node.id} className={style.skillsListLabelTextListItem}>
                          <Link to={`../work/${node.slug}/`} className={style.skillsListLabelTextListItemLink}>
                            <picture className={style.skillsListLabelTextListItemPicture}>
                              <source sizes="(max-width: 599px) 100vw, (min-width: 600px) 50vw, (min-width: 960px) 300px" srcSet={node.squareImage.fluid.srcSetWebp} type="image/webp"/>
                              <source sizes="(max-width: 599px) 100vw, (min-width: 600px) 50vw, (min-width: 960px) 300px" srcSet={node.squareImage.fluid.srcSet} type="image/jpeg"/> 
                              <img className={style.skillsListLabelTextListItemImage} src={node.squareImage.fluid.src} alt={node.title}/>
                            </picture>
                            <div className={style.skillsListLabelTextListItemOverlay}>
                              <div className={style.skillsListLabelTextListItemOverlayContent}>
                                <div>
                                  <p className={style.skillsListLabelTextListItemOverlayContentTitle}>{node.title}</p>
                                  <ul>
                                    {node.keywords.map(keyword => (
                                        <li key={keyword}>{keyword}</li>
                                      ))}
                                  </ul> 
                                </div>
                                <p className={style.skillsListLabelTextListItemOverlayContentButton}>View</p>
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                      </ul> : 
                      <ul className={style.skillsListLabelTextEmpty}>
                        <div className={style.skillsListLabelTextEmptyItem}>
                          <p className={style.skillsListLabelTextEmptyItemText}>More coming soon.</p>
                        </div>
                        <div className={style.skillsListLabelTextEmptyItem}>
                          <p className={style.skillsListLabelTextEmptyItemText}>More coming soon.</p>
                        </div>
                      </ul>}                     
                </div>
              </label>
              <input className={style.skillsListInput} id="webdesign" type="checkbox"/>
              <label className={style.skillsListLabel} htmlFor="webdesign">
                <p className={style.skillsListLabelTitle}>Webdesign</p>
                <div className={style.skillsListLabelArrow}></div>
                <div className={style.skillsListLabelText}>
                  {webdesignSkills.length > 0 ? 
                    <ul className={style.skillsListLabelTextSkills}>
                      {webdesignSkills.map(({ node }) => (
                        <li key={node.id} className={style.skillsListLabelTextSkillsItem}>
                          <img className={`${style.skillsListLabelTextSkillsItemImage} ${style.skillsListLabelTextSkillsItemImageColor}`} src={node.images[0].file.url} alt={node.title} title={node.title} />
                          <img className={`${style.skillsListLabelTextSkillsItemImage} ${style.skillsListLabelTextSkillsItemImageBlue}`} src={node.images[1].file.url} alt={node.title} title={node.title} />
                        </li>
                      ))}
                    </ul>
                  : null}
                  {webdesignCases.length > 0 ? 
                    <ul className={style.skillsListLabelTextList}>
                      {webdesignCases.map(({ node }) => (
                        <li key={node.id} className={style.skillsListLabelTextListItem}>
                          <Link to={`../work/${node.slug}/`} className={style.skillsListLabelTextListItemLink}>
                            <picture className={style.skillsListLabelTextListItemPicture}>
                              <source sizes="(max-width: 599px) 100vw, (min-width: 600px) 50vw, (min-width: 960px) 300px" srcSet={node.squareImage.fluid.srcSetWebp} type="image/webp"/>
                              <source sizes="(max-width: 599px) 100vw, (min-width: 600px) 50vw, (min-width: 960px) 300px" srcSet={node.squareImage.fluid.srcSet} type="image/jpeg"/> 
                              <img className={style.skillsListLabelTextListItemImage} src={node.squareImage.fluid.src} alt={node.title}/>
                            </picture>
                            <div className={style.skillsListLabelTextListItemOverlay}>
                              <div className={style.skillsListLabelTextListItemOverlayContent}>
                                <div>
                                  <p className={style.skillsListLabelTextListItemOverlayContentTitle}>{node.title}</p>
                                  <ul>
                                    {node.keywords.map(keyword => (
                                        <li key={keyword}>{keyword}</li>
                                      ))}
                                  </ul> 
                                </div>
                                <p className={style.skillsListLabelTextListItemOverlayContentButton}>View</p>
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  : <ul className={style.skillsListLabelTextEmpty}>
                    <div className={style.skillsListLabelTextEmptyItem}>
                      <p className={style.skillsListLabelTextEmptyItemText}>More coming soon.</p>
                    </div>
                    <div className={style.skillsListLabelTextEmptyItem}>
                      <p className={style.skillsListLabelTextEmptyItemText}>More coming soon.</p>
                    </div>
                  </ul>}
                </div>
              </label>
              <input className={style.skillsListInput} id="ux" type="checkbox"/>
              <label className={style.skillsListLabel} htmlFor="ux">
                <p className={style.skillsListLabelTitle}>UX/UI</p>
                <div className={style.skillsListLabelArrow}></div>
                <div className={style.skillsListLabelText}>
                  {uxSkills.length > 0 ? 
                    <ul className={style.skillsListLabelTextSkills}>
                      {uxSkills.map(({ node }) => (
                        <li key={node.id} className={style.skillsListLabelTextSkillsItem}>
                          <img className={`${style.skillsListLabelTextSkillsItemImage} ${style.skillsListLabelTextSkillsItemImageColor}`} src={node.images[0].file.url} alt={node.title} title={node.title} />
                          <img className={`${style.skillsListLabelTextSkillsItemImage} ${style.skillsListLabelTextSkillsItemImageBlue}`} src={node.images[1].file.url} alt={node.title} title={node.title} />
                        </li>
                      ))}
                    </ul>
                  : null}
                  {uxCases.length > 0 ? 
                    <ul className={style.skillsListLabelTextList}>
                      {uxCases.map(({ node }) => (
                        <li key={node.id} className={style.skillsListLabelTextListItem}>
                          <Link to={`../work/${node.slug}/`} className={style.skillsListLabelTextListItemLink}>
                            <picture className={style.skillsListLabelTextListItemPicture}>
                              <source sizes="(max-width: 599px) 100vw, (min-width: 600px) 50vw, (min-width: 960px) 300px" srcSet={node.squareImage.fluid.srcSetWebp} type="image/webp"/>
                              <source sizes="(max-width: 599px) 100vw, (min-width: 600px) 50vw, (min-width: 960px) 300px" srcSet={node.squareImage.fluid.srcSet} type="image/jpeg"/> 
                              <img className={style.skillsListLabelTextListItemImage} src={node.squareImage.fluid.src} alt={node.title}/>
                            </picture>
                            <div className={style.skillsListLabelTextListItemOverlay}>
                              <div className={style.skillsListLabelTextListItemOverlayContent}>
                                <div>
                                  <p className={style.skillsListLabelTextListItemOverlayContentTitle}>{node.title}</p>
                                  <ul>
                                    {node.keywords.map(keyword => (
                                        <li key={keyword}>{keyword}</li>
                                      ))}
                                  </ul> 
                                </div>
                                <p className={style.skillsListLabelTextListItemOverlayContentButton}>View</p>
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  : <ul className={style.skillsListLabelTextEmpty}>
                    <div className={style.skillsListLabelTextEmptyItem}>
                      <p className={style.skillsListLabelTextEmptyItemText}>More coming soon.</p>
                    </div>
                    <div className={style.skillsListLabelTextEmptyItem}>
                      <p className={style.skillsListLabelTextEmptyItemText}>More coming soon.</p>
                    </div>
                  </ul>}
                </div>
              </label>
              <input className={style.skillsListInput} id="motion" type="checkbox"/>
              <label className={style.skillsListLabel} htmlFor="motion">
                <p className={style.skillsListLabelTitle}>Motion</p>
                <div className={style.skillsListLabelArrow}></div>
                <div className={style.skillsListLabelText}>
                  {motionSkills.length > 0 ? 
                    <ul className={style.skillsListLabelTextSkills}>
                      {motionSkills.map(({ node }) => (
                        <li key={node.id} className={style.skillsListLabelTextSkillsItem}>
                          <img className={`${style.skillsListLabelTextSkillsItemImage} ${style.skillsListLabelTextSkillsItemImageColor}`} src={node.images[0].file.url} alt={node.title} title={node.title} />
                          <img className={`${style.skillsListLabelTextSkillsItemImage} ${style.skillsListLabelTextSkillsItemImageBlue}`} src={node.images[1].file.url} alt={node.title} title={node.title} />
                        </li>
                      ))}
                    </ul>
                  : null}
                  {motionCases.length > 0 ? 
                    <ul className={style.skillsListLabelTextList}>
                      {motionCases.map(({ node }) => (
                        <li key={node.id} className={style.skillsListLabelTextListItem}>
                          <Link to={`../work/${node.slug}/`} className={style.skillsListLabelTextListItemLink}>
                            <picture className={style.skillsListLabelTextListItemPicture}>
                              <source sizes="(max-width: 599px) 100vw, (min-width: 600px) 50vw, (min-width: 960px) 300px" srcSet={node.squareImage.fluid.srcSetWebp} type="image/webp"/>
                              <source sizes="(max-width: 599px) 100vw, (min-width: 600px) 50vw, (min-width: 960px) 300px" srcSet={node.squareImage.fluid.srcSet} type="image/jpeg"/> 
                              <img className={style.skillsListLabelTextListItemImage} src={node.squareImage.fluid.src} alt={node.title}/>
                            </picture>
                            <div className={style.skillsListLabelTextListItemOverlay}>
                              <div className={style.skillsListLabelTextListItemOverlayContent}>
                                <div>
                                  <p className={style.skillsListLabelTextListItemOverlayContentTitle}>{node.title}</p>
                                  <ul>
                                    {node.keywords.map(keyword => (
                                        <li key={keyword}>{keyword}</li>
                                      ))}
                                  </ul> 
                                </div>
                                <p className={style.skillsListLabelTextListItemOverlayContentButton}>View</p>
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  : <ul className={style.skillsListLabelTextEmpty}>
                    <div className={style.skillsListLabelTextEmptyItem}>
                      <p className={style.skillsListLabelTextEmptyItemText}>More coming soon.</p>
                    </div>
                    <div className={style.skillsListLabelTextEmptyItem}>
                      <p className={style.skillsListLabelTextEmptyItemText}>More coming soon.</p>
                    </div>
                  </ul>}
                </div>
              </label>
              <input className={style.skillsListInput} id="print" type="checkbox"/>
              <label className={style.skillsListLabel} htmlFor="print">
                <p className={style.skillsListLabelTitle}>Print</p>
                <div className={style.skillsListLabelArrow}></div>
                <div className={style.skillsListLabelText}>
                  {printSkills.length > 0 ? 
                    <ul className={style.skillsListLabelTextSkills}>
                      {printSkills.map(({ node }) => (
                        <li key={node.id} className={style.skillsListLabelTextSkillsItem}>
                          <img className={`${style.skillsListLabelTextSkillsItemImage} ${style.skillsListLabelTextSkillsItemImageColor}`} src={node.images[0].file.url} alt={node.title} title={node.title} />
                          <img className={`${style.skillsListLabelTextSkillsItemImage} ${style.skillsListLabelTextSkillsItemImageBlue}`} src={node.images[1].file.url} alt={node.title} title={node.title} />
                        </li>
                      ))}
                    </ul>
                  : null}
                  {printCases.length > 0 ? 
                    <ul className={style.skillsListLabelTextList}>
                      {printCases.map(({ node }) => (
                        <li key={node.id} className={style.skillsListLabelTextListItem}>
                          <Link to={`../work/${node.slug}/`} className={style.skillsListLabelTextListItemLink}>
                            <picture className={style.skillsListLabelTextListItemPicture}>
                              <source sizes="(max-width: 599px) 100vw, (min-width: 600px) 50vw, (min-width: 960px) 300px" srcSet={node.squareImage.fluid.srcSetWebp} type="image/webp"/>
                              <source sizes="(max-width: 599px) 100vw, (min-width: 600px) 50vw, (min-width: 960px) 300px" srcSet={node.squareImage.fluid.srcSet} type="image/jpeg"/> 
                              <img className={style.skillsListLabelTextListItemImage} src={node.squareImage.fluid.src} alt={node.title}/>
                            </picture>
                            <div className={style.skillsListLabelTextListItemOverlay}>
                              <div className={style.skillsListLabelTextListItemOverlayContent}>
                                <div>
                                  <p className={style.skillsListLabelTextListItemOverlayContentTitle}>{node.title}</p>
                                  <ul>
                                    {node.keywords.map(keyword => (
                                        <li key={keyword}>{keyword}</li>
                                      ))}
                                  </ul> 
                                </div>
                                <p className={style.skillsListLabelTextListItemOverlayContentButton}>View</p>
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  : <ul className={style.skillsListLabelTextEmpty}>
                    <div className={style.skillsListLabelTextEmptyItem}>
                      <p className={style.skillsListLabelTextEmptyItemText}>More coming soon.</p>
                    </div>
                    <div className={style.skillsListLabelTextEmptyItem}>
                      <p className={style.skillsListLabelTextEmptyItemText}>More coming soon.</p>
                    </div>
                  </ul>}
                </div>
              </label>
            </div>
          </div>
        </section>
        <section>
          <h2 style={{display: "none"}}>Other</h2>                         
          {experimentedSkills.length > 0 ? 
            <article className={style.other}>
              <div className={style.otherInnerwrapper}>
                <h3 className={style.otherTitle}>Experimented</h3>
                <ul className={style.otherSkills}>
                  {experimentedSkills.map(({ node }) => (
                    <li key={node.title} className={style.otherSkillsItem}>
                      <img className={`${style.otherSkillsItemImage} ${style.otherSkillsItemImageColor}`} src={node.images[0].file.url} alt={node.title} title={node.title} />
                      <img className={`${style.otherSkillsItemImage} ${style.otherSkillsItemImageBlue}`} src={node.images[1].file.url} alt={node.title} title={node.title} />
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          : null }
          {futureSkills.length > 0 ? 
            <article className={style.other}>
              <div className={`${style.otherInnerwrapper} ${style.otherInnerwrapperLast}`}>
                <h3 className={style.otherTitle}>Future interests</h3>
                <ul className={style.otherSkills}>
                  {futureSkills.map(({ node }) => (
                    <li key={node.title} className={style.otherSkillsItem}>
                      <img className={`${style.otherSkillsItemImage} ${style.otherSkillsItemImageColor}`} src={node.images[0].file.url} alt={node.title} title={node.title} />
                      <img className={`${style.otherSkillsItemImage} ${style.otherSkillsItemImageBlue}`} src={node.images[1].file.url} alt={node.title} title={node.title} />
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          : null }                           
        </section>
        <section className={style.contact}>
          <div className={style.contactInnerwrapper}>
            <h2 className={style.contactTitle}>Like what you see?</h2>
            <Contact />
          </div>
        </section>
      </Layout>
  )
}

export default Skills;

export const pageQuery = graphql`
  query {
    webdevelopmentCases: allContentfulCase(limit: 2, filter: {skills: {in: "webdevelopment"}}, sort: { fields: created, order: DESC }) {
      edges {
        node {
          id
          slug
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
    appdevelopmentCases: allContentfulCase(limit: 2, filter: {skills: {in: "appdevelopment"}}, sort: { fields: created, order: DESC }) {
      edges {
        node {
          id
          slug
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
    webdesignCases: allContentfulCase(limit: 2, filter: {skills: {in: "webdesign"}}, sort: { fields: created, order: DESC }) {
      edges {
        node {
          id
          slug
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
    uxCases: allContentfulCase(limit: 2, filter: {skills: {in: "ux"}}, sort: { fields: created, order: DESC }) {
      edges {
        node {
          id
          slug
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
    motionCases: allContentfulCase(limit: 2, filter: {skills: {in: "motion"}}, sort: { fields: created, order: DESC }) {
      edges {
        node {
          id
          slug
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
    printCases: allContentfulCase(limit: 2, filter: {skills: {in: "print"}}, sort: { fields: created, order: DESC }) {
      edges {
        node {
          id
          slug
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
    webdevelopmentSkills: allContentfulSkills(filter: {skills: {in: "webdevelopment"}}) {
      edges {
        node {
          id
          title
          images {
            file {
              url
            }
          }
        }
      }
    }
    appdevelopmentSkills: allContentfulSkills(filter: {skills: {in: "appdevelopment"}}) {
      edges {
        node {
          id
          title
          images {
            file {
              url
            }
          }
        }
      }
    }
    webdesignSkills: allContentfulSkills(filter: {skills: {in: "webdesign"}}) {
      edges {
        node {
          id
          title
          images {
            file {
              url
            }
          }
        }
      }
    }
    uxSkills: allContentfulSkills(filter: {skills: {in: "ux"}}) {
      edges {
        node {
          id
          title
          images {
            file {
              url
            }
          }
        }
      }
    }
    motionSkills: allContentfulSkills(filter: {skills: {in: "motion"}}) {
      edges {
        node {
          id
          title
          images {
            file {
              url
            }
          }
        }
      }
    }
    printSkills: allContentfulSkills(filter: {skills: {in: "print"}}) {
      edges {
        node {
          id
          title
          images {
            file {
              url
            }
          }
        }
      }
    }
    experimentedSkills: allContentfulSkills(filter: {skills: {in: "experimented"}}) {
      edges {
        node {
          id
          title
          images {
            file {
              url
            }
          }
        }
      }
    }
    futureSkills: allContentfulSkills(filter: {skills: {in: "future"}}) {
      edges {
        node {
          id
          title
          images {
            file {
              url
            }
          }
        }
      }
    }
  }
`