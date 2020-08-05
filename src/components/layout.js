import React, {useState } from "react"
import { Link } from "gatsby"
import style from "./layout.module.css"
import useDocumentScrollThrottled from '../utils/useDocumentScrollThrottled';
import logo from "../images/logo.svg"
import logoFooter from "../images/logoFooter.svg"
import logoGithub from "../images/icon-github.svg"
import logoInstagram from "../images/icon-instagram.svg"

const Layout = ({ children }) => {
    // Logic that shows the navbar when scrolling up
    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const MINIMUM_SCROLL = 80;
    const TIMEOUT_DELAY = 0;
    useDocumentScrollThrottled(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
        setTimeout(() => {
            setShouldHideHeader(isScrolledDown && isMinimumScrolled);
        }, TIMEOUT_DELAY);
    });
    
    return (
        <>
            <header className={`${style.header} ${shouldHideHeader ? style.hidden : ""}`}>
                <nav className={style.headerNav}>
                    <Link className={style.headerNavLogo} to="/">
                        <h1 className={style.headerNavTitle}><img className={style.headerNavTitleImg} src={logo} alt="Logo"/><span className="visually-hidden">Lars M.</span></h1>
                    </Link>
                    <input className={style.headerNavMenuBtn} type="checkbox" id="menu-btn"/>
                    <label className={style.headerNavMenuIcon} htmlFor="menu-btn">
                        <span className={style.headerNavMenuIconNavicon}></span>
                    </label>
                    <ul className={style.headerNavList}>
                        <li className={style.headerNavListItem}><Link activeClassName={style.headerNavListItemCurrent} className={style.headerNavListItemLink} to="/work/">Work</Link></li>
                        <li className={style.headerNavListItem}><Link activeClassName={style.headerNavListItemCurrent} className={style.headerNavListItemLink} to="/skills/">Skills</Link></li>
                        <li className={style.headerNavListItem}><Link activeClassName={style.headerNavListItemCurrent} className={style.headerNavListItemLink} to="/about">About</Link></li>
                        <li className={style.headerNavListItem}><Link activeClassName={style.headerNavListItemCurrent} className={style.headerNavListItemLink} to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <main className={style.main}>
                {children}
            </main> 
            <footer className={style.footer}>
                <div className={style.footerInnerwrapper}>
                    <img className={style.footerLogo} src={logoFooter} alt="Logo"/>
                    <div className={style.footerContact}>
                        <a className={`${style.footerContactLink} ${style.link}`} href="mailto:&#108;&#97;&#114;&#115;&#109;&#97;&#114;&#103;&#105;&#110;&#101;&#116;&#64;&#121;&#97;&#104;&#111;&#111;&#46;&#99;&#111;&#109;">larsmarginet&#64;yahoo.com</a>
                        <a className={`${style.footerContactLink} ${style.link}`} href="tel:0475673855">047567&zwnj;3855</a>
                        <div className={style.footerSocials}>
                            <a href="https://github.com/larsmarginet" rel="noreferrer" target="_blank"><img src={logoGithub} title="visit my Github" width="37" height="36" alt="Logo Github"/></a>
                            <a href="https://www.instagram.com/designed_by_lars/" rel="noreferrer" target="_blank"><img src={logoInstagram} title="visit my Instagram" width="36" height="36" alt="Logo Instagram"/></a>
                        </div>
                    </div>
                    <p className={style.footerCopyRight}>&copy; Lars Marginet</p>
                </div>
            </footer>
        </>
    )
}
export default Layout;