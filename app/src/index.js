import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const data = {
    categories: ['Artists','Albums','Playlists']
}
ReactDOM.render(<App categories={data.categories}/>, document.getElementById('root'));
