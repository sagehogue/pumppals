import React, { Component } from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink"

import NavButton from './NavButton/NavButton';
import NavTray from './NavTray/NavTray';
import TrayItem from './NavTray/TrayItem/TrayItem';
import Backdrop from '../Backdrop/Backdrop';

import classes from './NavMenu.module.css';

class NavMenu extends Component {
    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
        this.setState({
            menuIsClosed: true,
            // activePage: "splash",
            width: window.innerWidth,
        })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState((oldState) => {
            return {
                ...oldState,
                width: window.innerWidth
            }
        });
    };

    
    handlePageChange = (e) => {
        // e.preventDefault();
        // console.log(e.target)
        const pageClicked = e.target.innerText;
        this.setState((oldState) => {
            return {
                ...oldState,
                activePage: pageClicked,
            }
        })
    }
    
    toggleMenu = () => {
        this.setState({ menuIsClosed: !this.state.menuIsClosed })
    }
                path = {
                    home: "/",
                    about: "/about-us/",
                    rates: "/rates/",
                    details: "/details/",
                }

    render() {

        return (
            <div className={classes.NavMenu}>
                <NavButton
                    menuClosed={this.state.menuIsClosed}
                    toggleMenuHandler={this.toggleMenu} />
                <NavTray menuClosed={this.state.menuIsClosed}>
                    <AniLink exact to="/">
                        <TrayItem active={this.state.activePage == this.path.home? true : undefined} clickHandler={this.handlePageChange}>
                            Home
                        </TrayItem>
                    </AniLink>
                    <AniLink to={this.path.about} activeClassName={classes.active}>
                        <TrayItem active={this.state.activePage == this.path.about? true : undefined} clickHandler={this.handlePageChange}>
                            About Us
                        </TrayItem>
                    </AniLink>
                    <AniLink to={this.path.rates} activeClassName={classes.active}>
                        <TrayItem active={this.state.activePage == this.path.rates? true : undefined} clickHandler={this.handlePageChange}>
                            Rates
                        </TrayItem>
                    </AniLink>
                    <AniLink to={this.path.details} activeClassName={classes.active}>
                        <TrayItem active={this.state.activePage == this.path.details? true : undefined} clickHandler={this.handlePageChange}>
                            Facility Details
                        </TrayItem>
                    </AniLink>
                </NavTray>
                <Backdrop isDisabled={this.state.menuIsClosed} menuHandler={this.toggleMenu} />
            </div>
        ) 
    }
}

export default NavMenu;