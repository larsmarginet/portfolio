import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import style from "./404.module.css"

export default function About() {
  return (
    <Layout>
      <section className={style.section}>
        <h2 className={style.sectionTitle}>404</h2>
        <p className={style.sectionText}>Page not found.</p>
        <Link className={style.sectionLink} to="/">Home</Link>
      </section>
    </Layout>
  )
}