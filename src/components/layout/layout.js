import React from 'react';

import Header from '../header/header';
import NavMenu from '../NavMenu/NavMenu';

import styles from './layout.module.css';

export default (props) => {
    {console.log(window.innerWidth)}
    return (
        <div className={styles.Layout}>
            {window.innerWidth < 600 ? <NavMenu /> : <Header />}
            {props.children}
        </div>
    )
}