import React, {Component} from 'react';
import wrap from '../../hoc/wrap'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/Sidedrawer/Sidedrawer'

class Layout extends Component {

    state = {
        showSideDrawer : false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }
    sideDrawerToogleHandler = () => {
        this.setState((prevState) => {
            return{showSideDrawer : !prevState.showSideDrawer}
        })
    }
    render(){
        return( <wrap>

            <Toolbar drawerToogleClicked={this.sideDrawerToogleHandler} /> 
            <SideDrawer open = {this.state.showSideDrawer} closed = {this.sideDrawerClosedHandler}/> 
            <main className={classes.Content}>
            {this.props.children}
            </main>
        </wrap>)
    }

}
export default Layout;