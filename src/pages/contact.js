import React from "react"
import Layout from "../components/layout"
import Contact from "../components/contact"
import style from "./contact.module.css"
import instagram from "../images/icon-instagram-blue.svg";
import github from "../images/icon-github-blue.svg";

const ContactPage = () => {
  return (
      <Layout>
        <section className={style.contact}>
          <div className={style.contactInnerwrapper}>
            <h2 className={style.contactTitle}>Contact</h2>
            <div className={style.contactLinks}>
              <a className={`${style.contactLinksLink} ${style.link}`} href="mailto:&#108;&#97;&#114;&#115;&#109;&#97;&#114;&#103;&#105;&#110;&#101;&#116;&#64;&#121;&#97;&#104;&#111;&#111;&#46;&#99;&#111;&#109;">larsmarginet&#64;yahoo.com</a>
              <a className={`${style.contactLinksLink} ${style.link}`} href="tel:0475673855">047567&zwnj;3855</a>
            </div>
            <div className={style.contactSocials}>
              <a className={style.contactSocialsSocial} href="https://github.com/larsmarginet" rel="noreferrer" target="_blank"><img src={github} title="visit my Github" width="37" height="36" alt="Logo Github"/></a>
              <a className={style.contactSocialsSocial} href="https://www.instagram.com/designed_by_lars/" rel="noreferrer" target="_blank"><img src={instagram} title="visit my Instagram" width="36" height="36" alt="Logo Instagram"/></a>
            </div>
            <p className={style.contactSubtitle}>Let's talk</p>
            <Contact/>
          </div>
        </section>
      </Layout>
  )
}

export default ContactPage