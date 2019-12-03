import React from 'react';

import Header from '../header/header';

import styles from './layout.module.css';

export default (props) => {
    return (
        <div className={styles.Layout}>
            <Header />
            {props.children}
        </div>
    )
}