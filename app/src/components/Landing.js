import React, { Component }  from 'react';
import { Link } from 'react-router-dom';

const Landing = (props) => (
    <div className="Landing">
        <header className="Landing-Header">
            Chinook Database Digital Store
        </header>
        <ul>
            <li><Link to="/artists">artists</Link></li>
            <li><Link to="/albums">albums</Link></li>
            <li><Link to="/playlists">playlists</Link></li>
        </ul>
    </div>
);

export default Landing;
