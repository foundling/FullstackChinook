import React from 'react';

class PlaylistPanel extends React.Component {

    render() {
        const { result } = this.props;
        return (
            <ul>
                <li>{result.Name}</li>
            </ul>
        );
    }

}

export default PlaylistPanel;
