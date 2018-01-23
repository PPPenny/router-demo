import React,{Component}from 'react';
import './myIndex.css';
import UserImg from './imgs/defult-head.png';
class PersonInfo extends Component{
    render(){
        return(<div id="user-message">
                    <img className="user-head" src={UserImg} alt="用户默认头像" />
                    <div id="user-info">
                        <div className="messageInfo">
                            <div className="user-name nowrap">{this.props.dataValue.name}</div>
                        </div>
                        <div className="user-addr nowrap">{this.props.dataValue.dealerName}</div>
                    </div>
                    <i className="icon-arrow-right icon-arrow-head"></i>
            </div>
            )   
         }
}

class ServerDom extends Component{
    render(){
        return(
            <li>        
            <span className="border-b">{this.props.txt}</span>
            <i className={this.props.iconName}></i>
            </li>
        )
         
    }
}

class ServerDomNum extends Component{
    render(){
        return(
            <li>        
            <span className="border-b">{this.props.txt}</span>
            <label className="li-txt-rt">{this.props.htmlValue}</label>
            </li>
        )
         
    }
}

export {PersonInfo,ServerDom,ServerDomNum}



