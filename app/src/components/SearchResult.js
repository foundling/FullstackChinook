import React from 'react';
import ArtistPanel from './ArtistPanel';
import AlbumPanel from './AlbumPanel';
import PlaylistPanel from './PlaylistPanel';

const panels = {
    Artist: ArtistPanel,
    Album: AlbumPanel,
    Playlist: PlaylistPanel
};

class SearchResult extends React.Component {

    render() {
        const { result, resultType } = this.props;
        return React.createElement(panels[resultType], {
        });
    }

}

export default SearchResult;
