import React from 'react';

import classes from './TrayItem.module.css';

const trayItem = (props) => {
    return (
        <div onClick={props.clickHandler} className={[classes.TrayItem, props.active? classes.active : ""].join(' ')}>
            {props.children}
        </div>
    )
}

export default trayItem;