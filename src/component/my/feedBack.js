import React,{Component}from 'react';
import Header from '../../base-componet/header/header';
import './feedBack.css';
class FeedBack extends Component{
 
    render(){
        return(<div id="feedback">
                <Header title="问题反馈" iconLeftClass="icon-arrow-left"/>
                <div className="container">
                </div>
            </div>
            )
    }

}
export default FeedBack;