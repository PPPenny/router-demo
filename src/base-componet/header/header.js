import React,{Component}from 'react';
import './header.css';
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
            <div className=" header">
                <i className={"icon-left "+this.props.iconLeftClass} onClick={this.goPre}/>
                <h1>{this.props.title}</h1>
                
            </div>
        )
    }
}
export default Header;