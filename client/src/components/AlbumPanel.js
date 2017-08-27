import React from 'react';

class AlbumPanel extends React.Component {

    render() {
        const { result } = this.props;
        return (
            <ul>
                <li>{result.Title}</li>
            </ul>
        );
    }

}

export default AlbumPanel;
