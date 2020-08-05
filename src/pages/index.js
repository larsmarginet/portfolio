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