import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './Sidedrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import wrap from '../../../hoc/wrap'

const sideDrawer = (props) => {

    let  attachedClasses = [classes.SideDrawer, classes.Close]
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open]
    }


    return(
        <wrap>
            <Backdrop show={props.open} clicked = {props.closed}/>    
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>

            </div>
        </wrap>
    )
}

export default sideDrawer;