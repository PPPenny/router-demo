import React,{Component}from 'react';
// import axios from 'axios';
import {PersonInfo,ServerDom,ServerDomNum} from './myIndex';
import Header from '../../base-componet/header/header';
import './index.css';
import myInfoData from './json/myInfo.json'
import {BrowserRouter, Link,Route} from 'react-router-dom';
import FeedBack from './feedBack';
 class MyIndex extends Component{
    constructor(){
        super();
         this.dataSourse = {};
        this.get = this.get.bind(this);
    }
    componentWillMount(){
        this.get();
    }
    get(){
        window.localStorage['myInfo'] = JSON.stringify(myInfoData.data);
        }
    
     render(){
         return(
             <BrowserRouter>
             <div id="my-index">
                <Header title='我'/>
                <div className="container">  
                    <div className="myHead border-t border-b">
                    <PersonInfo dataValue={myInfoData.data}/>
                    </div>
                    <div className="goWhere">
                        <ul className="goOther">
                            <ServerDom  txt="联系客服" iconName="icon-arrow-down"/>
                            <Link to="/my/feedBack"><ServerDom dataType="feedback" txt="问题反馈" iconName="icon-arrow-right"/></Link>
                            <ServerDom  txt="公告" iconName="icon-arrow-right"/>
                            <ServerDomNum txt="经纪人类型" htmlValue = {myInfoData.data.agentType}/>
                            <ServerDomNum txt="认证状态" htmlValue = {myInfoData.data.state}/>
                            <ServerDomNum txt="当前版本" htmlValue = {myInfoData.data.version}/>
                            <ServerDom  txt="关于安惠通" iconName="icon-arrow-right"/>                
                        </ul>
                    </div>
                </div>  
                <main>
                    <Route path='/my/feedBack' exact component={FeedBack}/>
                </main>
             </div>
             </BrowserRouter>
       );
     }
 }






 export default MyIndex;