import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem'
const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link = "/" active={true}>Burger Builder</NavigationItem>
        <NavigationItem>Checkout</NavigationItem>
    </ul>
);

export default navigationItems;