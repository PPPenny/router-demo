import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FootDom from '../src/component/footer/footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FootDom />, document.getElementById('root'));
registerServiceWorker();
