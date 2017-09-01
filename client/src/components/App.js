import React from 'react';

import Landing from './Landing';
import Catalogue from './Catalogue';
import Player from './Player';
import Admin from './Admin';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

function App() {
    return (
        <Router>
                <Route exact path="/" component={Landing}></Route>
                {/*
                <Route path="/catalogue" component={Catalogue}></Route>
                <Route path="/player" component={Player}></Route>
                <Route path="/admin" component={Admin}></Route>
                */}
        </Router>
    );
} 

export default App;
