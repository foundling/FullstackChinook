import React from 'react';

class AlbumPanel extends React.Component {

    render() {
        const { result } = this.props;
        return (
            <ul>
                <li>{result.Name}</li>
            </ul>
        );
    }

}

export default AlbumPanel;
