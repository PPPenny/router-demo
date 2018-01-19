import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './shared/css/caag-mobile.css';
import FootDom from './base-componet/footer/footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FootDom />, document.getElementById('root'));
registerServiceWorker();
