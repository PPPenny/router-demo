import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './shared/css/caag-mobile.css';
import FootDom from './base-componet/footer/footer';
import registerServiceWorker from './registerServiceWorker';
import DeviceName from './util/check-device';
let dom = document.getElementById('root');
dom.setAttribute("class",DeviceName);

ReactDOM.render(<FootDom />, document.getElementById('root'));
registerServiceWorker();
