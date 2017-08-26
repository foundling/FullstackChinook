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

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        const ResultType = panels[this.props.resultType];
        return <ResultType result={this.props.result} />
    }

}

export default SearchResult;
