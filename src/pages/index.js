import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import style from "./index.module.css"
import laptop from "../images/laptop.svg"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Lars M. - Portfolio</title>
        <meta name="title" content="Lars M. - Portfolio"/>
        <meta name="description" content="Hi there! My name is Lars. I’m a digital creative. I have many interests, but mainly webdesign & -development. 
        Check out my work!"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://portfolio.larsmarginet.be/"/>
        <meta property="og:title" content="Lars M. - Portfolio"/>
        <meta property="og:description" content="Hi there! My name is Lars. I’m a digital creative. I have many interests, but mainly webdesign & -development. 
        Check out my work!"/>
        <meta property="og:image" content="https://portfolio.larsmarginet.be/banner.jpg"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://portfolio.larsmarginet.be/"/>
        <meta property="twitter:title" content="Lars M. - Portfolio"/>
        <meta property="twitter:description" content="Hi there! My name is Lars. I’m a digital creative. I have many interests, but mainly webdesign & -development. 
        Check out my work!"/>
        <meta property="twitter:image" content="https://portfolio.larsmarginet.be/banner.jpg"/>
      </Helmet>
      <Layout>
        <section className={style.intro}>
          <div className={style.introContent}>
            <h2 className={style.introContentTitle}>Hi there</h2>
            <p className={style.introContentText}>My name is Lars. I’m a <strong>digital creative.</strong> I have many interests, but mainly <strong>webdesign &amp; -development.</strong></p>
          </div>
          <img src={laptop} alt="Me working on my laptop"/>
        </section>
      </Layout>
    </>
  );
}