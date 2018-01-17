import React,{Component}from 'react';
import FooterItem from './footer-item';
import { BrowserRouter, Route, Link } from "react-router-dom";
import OrdersIndex from '../pages/orders/index';
import OrderIndex from '../pages/order/index';
import ClueIndex from '../pages/clue/index';
import MyIndex from '../pages/my/index';

import './footer.css';
class Footer extends Component{
    render(){
        return(
            <div>
                <div className="footDiv">
                    <Link to="/pages/orders"><FooterItem txt="订单"/></Link>
                    <Link to="/pages/order"><FooterItem txt="下单"/></Link>
                    <Link to="/pages/clue"><FooterItem txt="线索"/></Link>
                    <Link to="/pages/my"><FooterItem txt="我"/></Link>
                </div>
                <main>
                    <Route path="/" exact component={OrdersIndex}/>
                     
                        <Route path="/pages/orders" exact component={OrdersIndex} />
                        <Route path="/pages/order" exact component={OrderIndex} />
                        <Route path="/pages/clue" exact component={ClueIndex} />
                        <Route path="/pages/my" exact component={MyIndex} />
                    
               </main>
            </div>
        )
    }
}
const FootDom = ()=>
    <BrowserRouter>
      <Footer/>
    </BrowserRouter>

export default FootDom;