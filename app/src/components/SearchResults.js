import React from 'react';
import SearchResult from './SearchResult';

class SearchResults extends React.Component {

    render() {

        const { results, resultType } = this.props;

        return (
            <div className="SearchResults">
               <ul>
                    {results.map((result, index) => <SearchResult result={result} resultType={resultType} key={result.TrackId} />)}
                </ul>
            </div>
        )
    }

}

export default SearchResults;
