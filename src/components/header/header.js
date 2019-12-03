import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Logo from '../logo/logo';

import styles from './header.module.css';

class Header extends React.Component {
    render() {
        return (
        <div className={styles.header}>
            <Logo />
            <AniLink swipe to="/about-us/">About Us</AniLink>
            <AniLink swipe to="/rates/">Rates</AniLink>
            <AniLink swipe to="/details/">Facility Details</AniLink>
            {/* <AniLink swipe to="//">Go to page 2</AniLink> */}
        </div>
        )
    }
}

export default Header;