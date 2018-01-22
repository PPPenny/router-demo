import React,{Component}from 'react';
// import axios from 'axios';
import {PersonInfo,ServerDom} from './myIndex';
import Header from '../../base-componet/header/header';
import './index.css';
import myInfoData from './json/myInfo.json'
import { Link } from 'react-router-dom';
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
        // axios.get('./json/myInfo.json').then((data)=>{
        //     if(data.result === "0"){
                window.localStorage['myInfo'] = JSON.stringify(myInfoData.data);
        //         this.dataSourse = data.data;
        //     }
        //     }).catch((error)=>{
        //         console.log("出错了");

        //     })

        }
    
     render(){
         return(
             <div>
                 <Header txt='我'/>
                <div className="container">  
                    <div className="myHead border-t border-b">
                    <PersonInfo dataValue={myInfoData.data}/>
                    </div>
                    <div className="goWhere">
                        <ul className="goOther">
                            <ServerDom dataType="service" txt="联系客服" iconName="icon-arrow-down"/>
                            <Link to="\feed"><ServerDom dataType="feedback" txt="问题反馈" iconName="icon-arrow-right"/></Link>
                            <ServerDom dataType="notice" txt="公告" iconName="icon-arrow-right"/>
                            <ServerDom dataType="agent-about" txt="关于安惠通" iconName="icon-arrow-right"/>
                        </ul>
                    </div>
                </div>  
             </div>
       );
     }
 }
 export default MyIndex;