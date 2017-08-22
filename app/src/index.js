import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const categories = ['Artist','Album','Song'];
ReactDOM.render(<App categories={categories}/>, document.getElementById('root'));
