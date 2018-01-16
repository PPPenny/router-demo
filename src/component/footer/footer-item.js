import React,{Component}from 'react';
import './footer.css';
class FooterItem extends Component{
    render(){
        return(
            <div>
                <div className="footerTxt">{this.props.txt}</div>
            </div>
        )
    }
}
export default FooterItem;