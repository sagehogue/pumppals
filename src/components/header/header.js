import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Logo from '../logo/logo';

import styles from './header.module.css';
const path = {
    home: "/",
    about: "/about-us/",
    rates: "/rates/",
    details: "/details/",
}

class Header extends React.Component {
    render() {
        return (
        <div className={styles.header}>
            <Logo />
            <AniLink swipe to={path.about} active={window.location.pathname === path.about? true : undefined}>About Us</AniLink>
            <AniLink swipe to={path.rates} active={window.location.pathname === path.rates? true : undefined}>Rates</AniLink>
            <AniLink swipe to={path.details} active={window.location.pathname === path.details? true : undefined}>Facility Details</AniLink>
            {/* <AniLink swipe to="//">Go to page 2</AniLink> */}
            <div className={styles.callToAction}>GET IN TOUCH</div>
        </div>
        )
    }
}

export default Header;