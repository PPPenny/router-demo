import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import footDom from '../src/component/footer/footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<footDom />, document.getElementById('root'));
registerServiceWorker();
