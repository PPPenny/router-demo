import React,{Component}from 'react';
import axios from 'axios';
import {PersonInfo,ServerDom} from './myIndex';
import './index.css';
import myInfoData from './json/myInfo.json'
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
         return(<div>
             <PersonInfo dataValue={myInfoData.data}/>
             <div className="goWhere">
                 <ul className="goOther">
                    <ServerDom dataType="service" txt="联系客服" iconName="icon-arrow-down"/>
                    <ServerDom dataType="feedback" txt="问题反馈" iconName="icon-arrow-right"/>
                    <ServerDom dataType="notice" txt="公告" iconName="icon-arrow-right"/>
                    <ServerDom dataType="agent-about" txt="关于安惠通" iconName="icon-arrow-right"/>
                 </ul>
             </div>
         </div>);
     }
 }
 export default MyIndex;