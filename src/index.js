import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import Main from './main.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
serviceWorker.unregister();
