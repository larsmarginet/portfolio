import React from "react"
import Layout from "../components/layout"
import style from "./about.module.css"
import Contact from "../components/contact"
import trekking from "../images/trekking.svg"
import reading from "../images/reading.svg"
import activism from "../images/activism.svg"
import devineBlue from "../images/devine-logo-blue.svg"
import devineColor from "../images/devine-logo-color.svg"
import visoBlue from "../images/viso-logo-blue.svg"
import visoColor from "../images/viso-logo-color.svg"
import saskBlue from "../images/sask-logo-blue.svg"
import saskColor from "../images/sask-logo-color.svg"

export default function About() {
  return (
      <Layout>
        <section className={style.intro}>
          <div className={style.introInnerwrapper}>
            <picture className={style.introPicture}>
              <source media="(max-width: 599px)" srcSet={reading} type="image/svg+xml"/>
              <source media="(min-width: 600px)" srcSet={trekking} type="image/svg+xml"/>
              <img className={style.introPictureImage} src={trekking} alt="me with a backpack"/>
            </picture>
            <div className={style.introInfo}>
              <h2 className={style.introInfoTitle}>Hi, I’m Lars</h2>
              <p className={style.introInfoText}>Nice to meet you! I’m a digital creative based in Ghent, Belgium. Next semester, I will start my last year of studying <strong>Digital Design &amp; Development (<a className={style.link} rel="noreferrer" target="_blank" href="https://www.devine.be/">Devine</a>).</strong></p>
            </div>
          </div>
        </section>
        <section className={style.education}>
          <div className={style.educationInnerwrapper}>
            <h2 className={style.educationTitle}>Education</h2>
            <div className={style.educationList}>
              <input className={style.educationListInput} id="devine" type="checkbox"/>
              <label className={style.educationListLabel} htmlFor="devine">
                <p className={style.educationListLabelTitle}>DEVINE</p>
                <div className={style.educationListLabelArrow}></div>
                <div className={style.educationListLabelText}>
                  <div className={style.educationListLabelTextWrapper}>
                    <p>Digital Design &amp; Development is a 3-year bachelor degree and is part of KASK and Howest.</p>
                    <p>In Devine you learn to research, design and develop in order to make the best possible digital products.</p>
                    <p>I’m now going to my third and final year.</p>
                  </div>
                  <a className={style.educationListLabelTextLink} rel="noreferrer" target="_blank" href="https://www.devine.be/">
                    <img className={`${style.educationListLabelTextLinkImage} ${style.educationListLabelTextLinkImageColor}`} src={devineColor} alt="logo devine"/>
                    <img className={`${style.educationListLabelTextLinkImage} ${style.educationListLabelTextLinkImageBlue}`} src={devineBlue} alt="logo devine"/>
                  </a>
                </div>
              </label>
              <input className={style.educationListInput} id="viso" type="checkbox"/>
              <label className={style.educationListLabel} htmlFor="viso">
                <p className={style.educationListLabelTitle}>VISO</p>
                <div className={style.educationListLabelArrow}></div>
                <div className={style.educationListLabelText}>
                <div className={style.educationListLabelTextWrapper}>
                    <p>VISO is a highschool in Mariakerke. Here I studied Graphical communication and graduated summa cum laude. I built my first websites with HTML and CSS in this school and never stopped creating since.</p>
                  </div>
                  <a className={style.educationListLabelTextLink} rel="noreferrer" target="_blank" href="https://www.viso.be/">
                    <img className={`${style.educationListLabelTextLinkImage} ${style.educationListLabelTextLinkImageColor}`} src={visoColor} alt="logo viso"/>
                    <img className={`${style.educationListLabelTextLinkImage} ${style.educationListLabelTextLinkImageBlue}`} src={visoBlue} alt="logo viso"/>
                  </a>
                </div>
              </label>
              <input className={style.educationListInput} id="sask" type="checkbox"/>
              <label className={style.educationListLabel} htmlFor="sask">
                <p className={style.educationListLabelTitle}>SASK</p>
                <div className={style.educationListLabelArrow}></div>
                <div className={style.educationListLabelText}>
                  <div className={style.educationListLabelTextWrapper}>
                    <p>Sask is the Urban Academy of Fine Arts in Deinze. During the 5 years I attended I was able to develop my creative skills. I learned sketching, but also daring to go out of my comfort zone.</p>
                  </div>
                  <a className={style.educationListLabelTextLink} rel="noreferrer" target="_blank" href="https://www.saskdeinze.be/">
                    <img className={`${style.educationListLabelTextLinkImage} ${style.educationListLabelTextLinkImageColor}`} src={saskColor} alt="logo sask"/>
                    <img className={`${style.educationListLabelTextLinkImage} ${style.educationListLabelTextLinkImageBlue}`} src={saskBlue} alt="logo sask"/>
                  </a>
                </div>
              </label>
            </div>
          </div>
        </section>
        <section className={style.hobbies}>
          <h2 style={{display: "none"}}>Hobbies</h2>
          <article className={style.hobbiesHobby}>
            <p className={style.hobbiesTitle}>Hobbies</p>
            <div className={style.hobbiesHobbyInnerwrapper}>
              <div className={style.hobbiesHobbyInfo}>
                <h3 className={style.hobbiesHobbyInfoTitle}>Reading</h3>
                <p className={style.hobbiesHobbyInfoText}>I love reading! Most of what I read is philosophy, politics, history, society, etc. I read because I want to better understand the world in order to change it. My favorite book right now is The Shock Doctrine by Naomi Klein.</p>
              </div>
              <img className={style.hobbiesHobbyImage} src={reading} alt="me reading a book"/>
            </div>
          </article>
          <article className={style.hobbiesHobbyGreen}>
            <div className={style.hobbiesHobbyInnerwrapperGreen}>
              <img className={style.hobbiesHobbyImage} src={trekking} alt="me reading a book"/>
              <div className={style.hobbiesHobbyInfo}>
                <h3 className={style.hobbiesHobbyInfoTitle}>Trekking</h3>
                <p className={style.hobbiesHobbyInfoText}>From a young age I felt attracted to nature. As a kid we went camping, and as a teenager I went on my first Trekking. Now I am a guide in <strong><a rel="noreferrer" target="_blank" href="https://www.drakkar.be/" className={style.link}>Drakker.</a> </strong> We organize youth holidays in Norway and Sweden, where we go hiking, kayaking, etc.</p>
              </div>
            </div>
          </article>
          <article className={style.hobbiesHobby}>
            <div className={style.hobbiesHobbyInnerwrapper}>
              <div className={style.hobbiesHobbyInfo}>
                <h3 className={style.hobbiesHobbyInfoTitle}>Activism</h3>
                <p className={style.hobbiesHobbyInfoText}>Since the big climate strikes in 2019 I became an activist. I learned so much since. Not only about climate change, but also about other social issues. I am now a member of Comac, where I help as much as I can with my skills. I have worked on different campaigns, making visuals, posters and videos.</p>
              </div>
              <img className={style.hobbiesHobbyImage} src={activism} alt="me reading a book"/>
            </div>
          </article>
        </section>
        <section className={style.contact}>
          <div className={style.contactInnerwrapper}>
            <h2 className={style.contactTitle}>Enough about me. What’s up?</h2>
            <Contact />
          </div>
        </section>
      </Layout>
  )
}