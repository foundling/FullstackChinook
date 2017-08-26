import React from 'react';

class PlaylistPanel extends React.Component {

    render() {
        const { result } = this.props;
        return (
            <ul>
                <li>name: {result.playlistName}</li>
                <li>trackName: {result.trackName}</li>
            </ul>
        );
    }

}

export default PlaylistPanel;
