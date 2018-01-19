import React,{Component}from 'react';
import './footer.css';
class FooterItem extends Component{
    render(){
        return(
            <div className="footerTxt">
                <i className={'icon '+ this.props.icon}></i>
                <div>{this.props.txt}</div>
            </div>
        )
    }
}
export default FooterItem;