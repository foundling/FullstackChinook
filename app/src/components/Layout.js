import React from 'react';
import Menu from './Menu';
import InputFilter from './InputFilter';
import SearchResults from './SearchResults'; 
import axios from 'axios';

class Layout extends React.Component {

    constructor() {

        super();

        this.state = {
            title: "Artists",
            categories: ['Artists','Albums','Playlists'],
            searchResults: {
                Artists: [], 
                Albums: [], 
                Playlists: []
            } 
        };
        this.updateResults = this.updateResults.bind(this);
        this.search = this.search.bind(this);

    }

    search(query) {
        const resource = this.state.title.toLowerCase();
        axios
            .get(`http://localhost:3000/${resource}?q=${query}`)
            .then(this.updateResults);
    }

    updateResults({ data }) { 
        const update = Object.assign({},this.state.searchResults, {[this.state.title]: data});
        this.setState({ searchResults: update });
    }

    changePage(title) {
        this.setState({title});
    }

    render() {
        return (
            <div>
                <InputFilter search={this.search} />
                <h1>{this.state.title}</h1>
                <Menu 
                    title={this.state.title}
                    categories={this.state.categories} 
                    changePage={this.changePage.bind(this)} />
                <SearchResults 
                    resultType={this.state.title.slice(0,-1)} 
                    results={this.state.searchResults[this.state.title]} />
            </div>
        );
    }

}

export default Layout;
