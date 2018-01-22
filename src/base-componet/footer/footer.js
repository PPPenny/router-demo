import React,{Component}from 'react';
import FooterItem from './footer-item';
import { BrowserRouter, Route, Link } from "react-router-dom";
import OrdersIndex from '../../component/orders/index';
import OrderIndex from '../../component/order/index';
import ClueIndex from '../../component/clue/index';
import MyIndex from '../../component/my/index';

import './footer.css';
class Footer extends Component{
    render(){
        return(
            <div>
                <div className="footDiv border-t">
                    <Link to="/orders"><FooterItem txt="订单" icon="icon-new-orders"/></Link>
                    <Link to="/order"><FooterItem txt="下单" icon="icon-new-order"/></Link>
                    <Link to="/clue"><FooterItem txt="线索" icon="icon-clue"/></Link>
                    <Link to="/my"><FooterItem txt="我" icon="icon-mine"/></Link>
                </div>
                <main>
                    <Route path="/" exact component={OrdersIndex}/>     
                    <Route path="/orders" exact component={OrdersIndex} />
                    <Route path="/order" exact component={OrderIndex} />
                    <Route path="/clue" exact component={ClueIndex} />
                    <Route path="/my" exact component={MyIndex} />
               </main>
            </div>
        )
    }
}
const FootDom = ()=>{
    return( <BrowserRouter>
        <Footer/>
      </BrowserRouter>);
}

export default FootDom;