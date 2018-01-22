import React,{Component}from 'react';
import {history} from 'react-router-dom';
import './header.css';
import DeviceName from '../../util/check-device';
class Header extends Component{
    constructor(props){
        super(props);
        this.goPre = this.goPre.bind(this);
    }
    goPre(){
        this.props.history.goBack();
    };
    render(){
        return(
            <div className={DeviceName +" header"}>
                <i className={"icon-left "+this.props.iconLeftClass} onClick={this.goPre}/>
                <h1>{this.props.title}</h1>
                
            </div>
        )
    }
}
export default Header;