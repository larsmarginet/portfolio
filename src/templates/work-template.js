import React from "react"
import { Link, graphql } from "gatsby"
import style from "./work-template.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import facebook from "../images/icon-facebook-blue.svg";
import instagram from "../images/icon-instagram-blue.svg";
import github from "../images/icon-github-blue.svg";
import pixel from "../images/pixel.png";

const WorkTemplate = ({ data }) => {
    const work = data.contentfulCase;
    // createPage in gatsby-node.js passes the id and can be used as $id in a graphql query
    const related = data.allContentfulCase.edges;

    return (
        <Layout>
            <section className={style.intro}>
                <div className={style.introInnerwrapper}>
                    <div className={style.introInfo}> 
                        <h2 className={style.introInfoTitle}>{work.title}</h2>
                        <div className={style.introInfoDescription}>{documentToReactComponents(work.longDescription.json)}</div>
                        <ul className={style.introInfoKeywords}>
                        {work.keywords.map(keyword => (
                            <li key={keyword} className={style.introInfoKeywordsKeyword}>{keyword}</li>
                            ))}
                        </ul> 
                        {work.website ? <a className={style.introInfoSocialsWebsite} rel="noreferrer" target="_blank" href={work.website}>Visit website</a> : null}
                        <div className={style.introInfoSocials}>
                            <div className={style.introInfoSocialsWrapper}>
                                {work.facebook ? <a className={style.introInfoSocialsWrapperLink} rel="noreferrer" target="_blank" href={work.facebook[1]}><img src={facebook} alt="logo facebook"/><span className={style.introInfoSocialsWrapperLinkItem}>{work.facebook[0]}</span></a> : null}
                                {work.instagram ? <a className={style.introInfoSocialsWrapperLink} rel="noreferrer" target="_blank" href={work.instagram[1]}><img src={instagram} alt="logo instagram"/><span className={style.introInfoSocialsWrapperLinkItem}>{work.instagram[0]}</span></a> : null}
                                {work.github ? <a className={style.introInfoSocialsWrapperLink} rel="noreferrer" target="_blank" href={work.github}><img src={github} alt="logo github"/><span className={style.introInfoSocialsWrapperLinkItem}>Source code</span></a> : null}
                            </div>
                        </div>
                        <div className={style.introInfoStats}>
                            {work.year ? <p><strong>Year: </strong>{work.year}</p> : null}
                            {work.timeline ? <p><strong>Timeline: </strong>{work.timeline}</p> : null}
                            {/* use no as url if there is no url */}
                            {work.collaborators ? <div className={style.introInfoStatsCollaborators}><strong>Collaborators: </strong> <ul className={style.introInfoStatsCollaboratorsNames}>{work.collaborators.map((collaborator, i) => (<li key={i} className={style.introInfoStatsCollaboratorsNamesName}>{work.collaboratorsUrls[i] !== "no" ? <a className={style.introInfoStatsCollaboratorsNamesNameLink} href={work.collaboratorsUrls[i]} rel="noreferrer" target="_blank">{collaborator}</a> : collaborator}{(work.collaborators.length > 1 && i !== (work.collaborators.length - 1)) ? "," : null}</li>))}</ul></div> : null}
                        </div>
                    </div>
                    <picture className={style.introImage}>
                        <source media="(max-width: 377px)" sizes="1px" srcSet={pixel} type="image/png"/>
                        <source media="(max-width: 959px)" sizes="100vw" srcSet={work.mockUp[1].fluid.srcSetWebp} type="image/webp"/>
                        <source media="(min-width: 960px)" sizes="50vw" srcSet={work.mockUp[0].fluid.srcSetWebp} type="image/webp"/>
                        <source media="(max-width: 959px)" sizes="100vw" srcSet={work.mockUp[1].fluid.srcSet} type="image/png"/> 
                        <source media="(min-width: 960px)" sizes="50vw" srcSet={work.mockUp[0].fluid.srcSet} type="image/png"/>
                        <img className={style.introImageImg} src={work.mockUp[0].fluid.src} alt={work.title}/>
                    </picture>
                </div>
            </section>
            <section className={style.main}>
                <h2 style={{display: "none"}}>Project</h2>
                <div className={style.mainInnerwrapper}>
                    {work.biggestChallenges ? 
                        <article className={style.mainChallenges}> 
                            <h3 className={style.mainChallengesTitle}>Biggest challenge{work.biggestChallenges.length > 1 ? "s" : null}</h3>
                            <ul className={style.mainChallengesList}>
                                {work.biggestChallenges.map((challenge, i) => (
                                    <li className={style.mainChallengesListItem} key={i}>{challenge}</li>
                                ))}
                            </ul>
                        </article> 
                    : null }
                    {work.bigImage ? 
                        <article className={style.mainImage}>
                            <h3 style={{display: "none"}}>Image</h3>
                            <picture className={style.mainImagePicture}>
                                <source sizes="100vw, (min-width: 960px) 960px" srcSet={work.bigImage.fluid.srcSetWebp} type="image/webp"/>
                                <source  sizes="100vw, (min-width: 960px) 960px" srcSet={work.bigImage.fluid.srcSet} type="image/png"/> 
                                <img className={style.mainImagePictureImg} src={work.bigImage.fluid.src} alt={work.bigImage.title}/>
                            </picture>
                        </article>
                    : null}
                    {work.vimeoId ? 
                        <article className={style.mainVideo}>
                            <h3 style={{display: "none"}}>Video</h3>
                            <div className={style.mainVideoWrapper}><iframe src={`https://player.vimeo.com/video/${work.vimeoId}?color=F24F5B`} style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                        </article>
                    : null}
                    {work.projectImages ? 
                        <article className={style.mainImages}>
                            <h3 style={{display: "none"}}>Overview project</h3>
                            <div className={style.mainImagesWrapper}>
                                {work.projectImages.map((image) => (
                                    <picture className={style.mainImagesWrapperPicture} key={image.title}>
                                        <source sizes="100vw, (min-width: 960px) 460px" srcSet={image.fluid.srcSetWebp} type="image/webp"/>
                                        <source sizes="100vw, (min-width: 960px) 460px" srcSet={image.fluid.srcSet} type="image/jpeg"/> 
                                        <img className={style.mainImagesWrapperPictureImg} src={image.fluid.src} alt={image.title}/>
                                    </picture>
                                ))}
                            </div>
                        </article>
                    : null}
                    {work.facebookEmbedUrl ? 
                        <article className={style.mainFacebook}>
                            <h3 style={{display: "none"}}>Facebook Video</h3>
                            <div className={style.mainFacebookWrapper}>
                                <iframe src={work.facebookEmbedUrl} width="460" style={{border:"none", overflow:"hidden"}} scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
                            </div>
                        </article>
                    : null}
                    {work.colors ? 
                        <article className={style.mainColors}>
                            <h3 className={style.mainColorsTitle}>Colors</h3>
                            <div className={`${style.mainColorsWrapper} ${work.colors.length > 4 ? style.mainColorsWrapperRows : style.mainColorsWrapperCol}`}>
                                {work.colors.map((color) => (
                                    <div className={style.mainColorsWrapperColor} key={color}>
                                    <div className={style.mainColorsWrapperColorCircle} style={{backgroundColor: color}}></div>
                                    <p className={style.mainColorsWrapperColorText} style={{color: color}}>{color}</p>
                                    </div>
                                ))}
                            </div>
                        </article>
                    : null}
                    {work.typography ? 
                        <article className={style.mainTypography}>
                            <h3 className={style.mainTypographyTitle}>Typography</h3>
                            {work.quote ? <blockquote className={style.mainTypographyQuote}>“{work.quote.quote}”</blockquote> : null}
                            <div className={style.mainTypographyImages}>
                                {work.typography.map((font) => (
                                    <img className={style.mainTypographyImagesImg} src={font.file.url} alt={font.title}/>
                                ))}
                            </div>
                        </article>
                    : null}
                </div>
            </section>
            <section className={style.more}>
                <div className={style.moreInnerwrapper}>
                    <h2  className={style.moreTitle}>More Projects</h2>
                    <ul className={style.moreList}>
                    {related.map(({ node }) => (
                        <li key={node.id} className={style.moreListItem}>
                        <Link to={`work/${node.slug}/`} className={style.moreListItemLink}>
                            <picture className={style.moreListItemPicture}>
                            <source sizes="100vw, (min-width: 600px) 50vw, (min-width: 960px) 300px" srcSet={node.squareImage.fluid.srcSetWebp} type="image/webp"/>
                            <source sizes="100vw, (min-width: 600px) 50vw, (min-width: 960px) 300px" srcSet={node.squareImage.fluid.srcSet} type="image/jpeg"/> 
                            <img className={style.moreListItemImage} src={node.squareImage.fluid.src} alt={node.title}/>
                            </picture>
                            <div className={style.moreListItemOverlay}>
                            <div className={style.moreListItemOverlayContent}>
                                <div>
                                <p className={style.moreListItemOverlayContentTitle}>{node.title}</p>
                                <ul>
                                    {node.keywords.map(keyword => (
                                        <li key={keyword}>{keyword}</li>
                                    ))}
                                </ul> 
                                </div>
                                <p className={style.moreListItemOverlayContentButton}>View</p>
                            </div>
                            </div>
                        </Link>
                        </li>
                    ))}
                </ul>
            </div>
            </section>
        </Layout>
    )
}

export default WorkTemplate

export const pageQuery = graphql`
  query CaseById($id: String!) {
    contentfulCase(id: { eq: $id }) {
        id
        title
        mockUp {
            fluid {
              src
              srcSetWebp
              srcSet
            }
        }
        keywords
        longDescription {
            json
          }
        year
        timeline
        collaborators
        collaboratorsUrls
        website
        facebook
        github
        instagram
        biggestChallenges
        bigImage {
          fluid {
            src
            srcSet
            srcSetWebp
          }
          title
        }
        vimeoId
        projectImages {
          fluid {
            src
            srcSet
            srcSetWebp
          }
          title
        }
        facebookEmbedUrl
        colors
        typography {
          file {
            url
          }
          title
        }
        quote {
          quote
        }
    }

    allContentfulCase(limit: 3, filter: {id: {ne: $id}}, sort: { fields: created, order: DESC}) {
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
  }
`
