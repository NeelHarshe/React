import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToogle from '../Sidedrawer/DrawerToogle/DrawerToogle'

const Toolbar = (props) => (
<header className={classes.Toolbar}>
    <DrawerToogle clicked = {props.drawerToogleClicked}/>
    <div className={classes.Logo}>
        <Logo/>
    </div>
    <nav className={classes.DesktopOnly}>
        <NavigationItems/>
    </nav>
</header>

);

export default Toolbar;