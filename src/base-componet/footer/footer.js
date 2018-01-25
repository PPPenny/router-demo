import React,{Component}from 'react';
import FooterItem from './footer-item';
import { BrowserRouter, Route, NavLink  } from "react-router-dom";
import OrdersIndex from '../../component/orders/index';
import OrderIndex from '../../component/order/index';
import ClueIndex from '../../component/clue/index';
import MyIndex from '../../component/my/index';
import FooterData from './data.json';

import './footer.css';
class FootDom extends Component{
 
    render(){
        return(
            <BrowserRouter>
               <div>
                    <div className="footDiv border-t">
                        {FooterData.data.map(function(ft,index){
                            return(<NavLink  key={index} to={ft.link}  activeClassName="active-footer-item"><FooterItem txt={ft.txt} icon={ft.onIcon}/></NavLink>); 
                        })
                        }
                    </div>
                    <main>
                        <Route path="/" exact component={OrdersIndex}/>     
                        <Route path="/orders" exact component={OrdersIndex} />
                        <Route path="/order" exact component={OrderIndex} />
                        <Route path="/clue" exact component={ClueIndex} />
                        <Route path="/my" exact component={MyIndex} />
                    </main>
               </div>
            </BrowserRouter>
        )
    }
}
export default FootDom;