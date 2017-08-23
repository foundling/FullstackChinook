import React from 'react';
import List from './List';
import Landing from './Landing';
import Artists from './Artists';
import Albums from './Albums';
import Playlists from './Playlists';
import { HashRouter, Route } from 'react-router-dom';

const App = () => (

    <HashRouter>
        <div className="app">
            <Route exact path="/" component={Landing} />
            <Route exact path="/artists" component={Artists} />
            <Route exact path="/albums" component={Albums} />
            <Route exact path="/playlists" component={Playlists} />
        </div>
    </HashRouter>

)

export default App;
