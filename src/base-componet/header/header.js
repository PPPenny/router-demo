import React,{Component}from 'react';
import './header.css';
import DeviceName from '../../util/check-device'
import {Route, Link } from "react-router-dom";
class Header extends Component{

    render(){
        return(
            <div className={DeviceName +" header"}>
                <Link to={this.props.linkTo ? this.props.linkTo : ""}><i className={"icon-left "+this.props.iconLeftClass}/></Link>
                <h1>{this.props.title}</h1>
                <Route></Route>
            </div>
        )
    }
}
export default Header;