import React,{Component}from 'react';
import './header.css';
class Header extends Component{
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
    }
    goBack(){


    }
    render(){
        return(
            <div className="header border-b">
                <i className={"icon-left "+this.props.iconLeftClass} onClick={this.goBack}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
export default Header;